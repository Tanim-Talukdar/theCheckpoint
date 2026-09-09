import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },

    showtimeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Showtime",
      required: true,
    },

    hallId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hall",
      required: true,
    },

    seats: {
      type: [String],
      required: true,
      validate: {
        validator: (seats) =>
          seats.length >= 1 && seats.length <= 8,
        message: "You can book between 1 and 8 seats",
      },
    },

    customer: {
      name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
      },

      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        maxlength: 150,
      },

      phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
      },
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    payment: {
  tranId: {
    type: String,
    unique: true,
    sparse: true,
  },
  valId: String,
  bankTranId: String,
  cardType: String,
  paymentMethod: String,
},

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "cancelled"],
      default: "pending",
    },

    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },

    // Pending booking expires after a limited time
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 15 * 60 * 1000),
    },
  },
  {
    timestamps: true,
  }
);

// Automatically remove expired pending bookings
BookingSchema.index(
  { expiresAt: 1 },
  {
    expireAfterSeconds: 0,
    partialFilterExpression: {
      bookingStatus: "pending",
      paymentStatus: "pending",
    },
  }
);

// Prevent the same seat from being booked twice
// for the same showtime.
BookingSchema.index(
  { showtimeId: 1, seats: 1 },
  { unique: true }
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);