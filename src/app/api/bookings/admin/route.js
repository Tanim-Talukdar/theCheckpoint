import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/booking";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET() {
  try {
    await requireAdmin();
    await connectDB();

    const bookings = await Booking.find({})
      .populate("movieId", "title poster backdrop duration rating")
      .populate("showtimeId", "date startTime ticketPrice")
      .populate("hallId", "name capacity rows seatsPerRow seats")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error("GET admin bookings error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bookings",
      },
      { status: 500 }
    );
  }
}