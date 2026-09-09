"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FiLoader, FiCreditCard } from "react-icons/fi";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!bookingId) {
      setError("Booking ID is missing.");
      setLoading(false);
      return;
    }

    async function startPayment() {
      try {
        const response = await fetch("/api/payment/sslcommerz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bookingId }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Payment initialization failed"
          );
        }

        window.location.href = data.paymentUrl;
      } catch (err) {
        console.error(err);
        setError(err.message || "Payment failed");
        setLoading(false);
      }
    }

    startPayment();
  }, [bookingId]);

  if (error) {
    return (
      <main className="min-h-screen bg-[#050A14] text-white flex items-center justify-center">
        <p className="text-red-400">{error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050A14] text-white flex items-center justify-center">
      <div className="text-center">
        <FiCreditCard className="mx-auto mb-4 text-3xl text-blue-400" />

        <h1 className="text-lg font-semibold">
          Redirecting to Payment
        </h1>

        <div className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-400">
          <FiLoader className="animate-spin" />
          Please wait...
        </div>
      </div>
    </main>
  );
}