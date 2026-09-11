
import { NextResponse } from "next/server";
import { z } from "zod";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/booking";
import Showtime from "@/models/showtime";
import Hall from "@/models/hall";
import Movie from "@/models/movie";

const bookingSchema = z.object({
  movieId: z.string().min(1),
  showtimeId: z.string().min(1),
  hallId: z.string().min(1),

  seats: z
    .array(z.string().min(1))
    .min(1)
    .max(8),

  customer: z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(150),
    phone: z.string().trim().min(5).max(20),
  }),

  totalAmount: z.number().min(0),
});

export async function POST(request) {
  const session = await mongoose.startSession();

  try {
    const body = await request.json();

    const validation = bookingSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid booking data",
          errors: validation.error.flatten(),
        },
        { status: 400 }
      );
    }

    const {
      movieId,
      showtimeId,
      hallId,
      seats,
      customer,
    } = validation.data;

    if (
      !mongoose.Types.ObjectId.isValid(movieId) ||
      !mongoose.Types.ObjectId.isValid(showtimeId) ||
      !mongoose.Types.ObjectId.isValid(hallId)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid movie, showtime or hall ID",
        },
        { status: 400 }
      );
    }

    const uniqueSeats = [...new Set(seats)];

    if (uniqueSeats.length !== seats.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Duplicate seats are not allowed",
        },
        { status: 400 }
      );
    }

    await connectDB();

    let createdBooking;

    await session.withTransaction(async () => {
      const movie = await Movie.findById(movieId).session(session);

      if (!movie) {
        throw new Error("MOVIE_NOT_FOUND");
      }

      const showtime = await Showtime.findById(showtimeId).session(session);

      if (!showtime) {
        throw new Error("SHOWTIME_NOT_FOUND");
      }

      if (showtime.movieId.toString() !== movieId) {
        throw new Error("SHOWTIME_MOVIE_MISMATCH");
      }

      if (showtime.hallId.toString() !== hallId) {
        throw new Error("SHOWTIME_HALL_MISMATCH");
      }

      const hall = await Hall.findById(hallId).session(session);

      if (!hall) {
        throw new Error("HALL_NOT_FOUND");
      }

      const validSeats = new Set(
        (hall.seats || []).map(
          (seat) => seat.seatNumber
        )
      );

      const invalidSeats = uniqueSeats.filter(
        (seat) => !validSeats.has(seat)
      );

      if (invalidSeats.length > 0) {
        throw new Error("INVALID_SEAT");
      }

      const now = new Date();

      const activeBookings = await Booking.find({
        showtimeId,

        $or: [
          {
            bookingStatus: "confirmed",
          },
          {
            bookingStatus: "pending",
            paymentStatus: "pending",
            expiresAt: { $gt: now },
          },
        ],
      })
        .select("seats")
        .session(session);

      const occupiedSeats = new Set(
        activeBookings.flatMap(
          (booking) => booking.seats
        )
      );

      const alreadyBooked = uniqueSeats.filter(
        (seat) => occupiedSeats.has(seat)
      );

      if (alreadyBooked.length > 0) {
        throw new Error(
          `SEATS_BOOKED:${alreadyBooked.join(",")}`
        );
      }

      const totalAmount =
        showtime.ticketPrice * uniqueSeats.length;

      const [booking] = await Booking.create(
        [
          {
            movieId,
            showtimeId,
            hallId,

            movieSnapshot: {
              title: movie.title,
              poster: movie.poster || "",
              backdrop: movie.backdrop || "",
              duration: movie.duration || 0,
              rating: movie.rating || 0,
            },

            showtimeSnapshot: {
              date: showtime.date,
              startTime: showtime.startTime,
              ticketPrice: showtime.ticketPrice,
            },

            seats: uniqueSeats,

            customer: {
              name: customer.name,
              email: customer.email.toLowerCase(),
              phone: customer.phone,
            },

            totalAmount,

            paymentStatus: "pending",
            bookingStatus: "pending",

            expiresAt: new Date(
              Date.now() + 10 * 60 * 1000
            ),
          },
        ],
        { session }
      );
      console.log("SNAPSHOT TEST", {
  movieSnapshot: {
    title: movie.title,
    poster: movie.poster || "",
  },
  showtimeSnapshot: {
    date: showtime.date,
    startTime: showtime.startTime,
    ticketPrice: showtime.ticketPrice,
  },
});

      createdBooking = booking;
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking created successfully",
        booking: {
          _id: createdBooking._id,
          movieId: createdBooking.movieId,
          showtimeId: createdBooking.showtimeId,
          hallId: createdBooking.hallId,
          seats: createdBooking.seats,
          customer: createdBooking.customer,
          totalAmount: createdBooking.totalAmount,
          paymentStatus: createdBooking.paymentStatus,
          bookingStatus: createdBooking.bookingStatus,
          expiresAt: createdBooking.expiresAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST booking error:", error);

    if (error.message === "MOVIE_NOT_FOUND") {
      return NextResponse.json(
        { success: false, message: "Movie not found" },
        { status: 404 }
      );
    }

    if (error.message === "SHOWTIME_NOT_FOUND") {
      return NextResponse.json(
        { success: false, message: "Showtime not found" },
        { status: 404 }
      );
    }

    if (error.message === "HALL_NOT_FOUND") {
      return NextResponse.json(
        { success: false, message: "Hall not found" },
        { status: 404 }
      );
    }

    if (error.message === "SHOWTIME_MOVIE_MISMATCH") {
      return NextResponse.json(
        {
          success: false,
          message: "Showtime does not belong to this movie",
        },
        { status: 400 }
      );
    }

    if (error.message === "SHOWTIME_HALL_MISMATCH") {
      return NextResponse.json(
        {
          success: false,
          message: "Showtime does not belong to this hall",
        },
        { status: 400 }
      );
    }

    if (error.message === "INVALID_SEAT") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid seat selected",
        },
        { status: 400 }
      );
    }

    if (error.message.startsWith("SEATS_BOOKED:")) {
      const occupiedSeats =
        error.message
          .replace("SEATS_BOOKED:", "")
          .split(",");

      return NextResponse.json(
        {
          success: false,
          message:
            "Some selected seats are already booked",
          occupiedSeats,
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create booking",
      },
      { status: 500 }
    );
  } finally {
    await session.endSession();
  }
}
