import { NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/booking";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const showtimeId = searchParams.get("showtimeId");

    if (
      !showtimeId ||
      !mongoose.Types.ObjectId.isValid(showtimeId)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid showtimeId is required",
        },
        { status: 400 }
      );
    }

    const bookings = await Booking.find({
      showtimeId,

      $or: [
        {
          bookingStatus: "confirmed",
        },
        {
          bookingStatus: "pending",
          paymentStatus: "pending",
          expiresAt: { $gt: new Date() },
        },
      ],
    }).select("seats");

    const occupiedSeats = [
      ...new Set(
        bookings.flatMap((booking) => booking.seats)
      ),
    ];

    return NextResponse.json({
      success: true,
      occupiedSeats,
    });
  } catch (error) {
    console.error("GET occupied seats error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch occupied seats",
      },
      { status: 500 }
    );
  }
}