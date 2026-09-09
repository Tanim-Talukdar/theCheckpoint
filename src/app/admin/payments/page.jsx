
"use client";

import { useCallback, useEffect, useState } from "react";
import {
  FiCalendar,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiCreditCard,
  FiDollarSign,
  FiEye,
  FiMail,
  FiPhone,
  FiSearch,
  FiUser,
  FiX,
  FiXCircle,
} from "react-icons/fi";

const paymentStatusStyles = {
  paid: "border-green-400/20 bg-green-400/10 text-green-400",
  pending: "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",
  failed: "border-red-400/20 bg-red-400/10 text-red-400",
  cancelled: "border-slate-400/20 bg-slate-400/10 text-slate-400",
};

const bookingStatusStyles = {
  confirmed: "border-green-400/20 bg-green-400/10 text-green-400",
  pending: "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",
  cancelled: "border-red-400/20 bg-red-400/10 text-red-400",
};

function formatMoney(amount) {
  return `৳${Number(amount || 0).toLocaleString("en-BD")}`;
}

function formatDate(date) {
  if (!date) return "—";

  try {
    return new Date(date).toLocaleString("en-BD", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return "—";
  }
}

function StatusBadge({ status }) {
  if (!status) return null;

  const style =
    paymentStatusStyles[status] ||
    bookingStatusStyles[status] ||
    "border-white/10 bg-white/5 text-white/60";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${style}`}
    >
      {status}
    </span>
  );
}

function StatCard({ icon: Icon, label, value, description }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#080D18] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
          <Icon size={20} />
        </div>
      </div>

      <p className="text-sm text-white/50">{label}</p>

      <p className="mt-1 text-2xl font-bold text-white">
        {value}
      </p>

      {description && (
        <p className="mt-1 text-xs text-white/30">
          {description}
        </p>
      )}
    </div>
  );
}

function PaymentDetails({
  payment,
  onClose,
  onCopy,
  copied,
}) {
  if (!payment) return null;

  const movie = payment.movieId;
  const showtime = payment.showtimeId;
  const hall = payment.hallId;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-[#080D18] shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#080D18] px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-white">
              Payment Details
            </h2>

            <p className="mt-1 text-sm text-white/40">
              Booking information and payment details
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="space-y-6 p-6">
          {/* Status */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="mb-2 text-xs uppercase tracking-wider text-white/30">
                Payment Status
              </p>

              <StatusBadge status={payment.paymentStatus} />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="mb-2 text-xs uppercase tracking-wider text-white/30">
                Booking Status
              </p>

              <StatusBadge status={payment.bookingStatus} />
            </div>
          </div>

          {/* Movie */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/40">
              Movie & Showtime
            </h3>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex gap-4">
                {movie?.poster ? (
                  <img
                    src={movie.poster}
                    alt={movie.title || "Movie"}
                    className="h-24 w-16 rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex h-24 w-16 items-center justify-center rounded-xl bg-white/5 text-white/20">
                    <FiCreditCard size={22} />
                  </div>
                )}

                <div className="min-w-0">
                  <h4 className="text-lg font-bold text-white">
                    {movie?.title || "Unknown movie"}
                  </h4>

                  <div className="mt-2 space-y-1 text-sm text-white/50">
                    <p className="flex items-center gap-2">
                      <FiCalendar size={14} />
                      {showtime?.date || "—"}
                    </p>

                    <p className="flex items-center gap-2">
                      <FiClock size={14} />
                      {showtime?.startTime || "—"}
                    </p>

                    <p>
                      Hall: {hall?.name || "—"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Customer */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/40">
              Customer
            </h3>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-2 text-xs text-white/30">
                  Name
                </p>

                <p className="flex items-center gap-2 break-words text-sm font-medium text-white">
                  <FiUser className="shrink-0 text-white/40" />
                  {payment.customer?.name || "—"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-2 text-xs text-white/30">
                  Email
                </p>

                <p className="flex items-center gap-2 break-all text-sm font-medium text-white">
                  <FiMail className="shrink-0 text-white/40" />
                  {payment.customer?.email || "—"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-2 text-xs text-white/30">
                  Phone
                </p>

                <p className="flex items-center gap-2 text-sm font-medium text-white">
                  <FiPhone className="shrink-0 text-white/40" />
                  {payment.customer?.phone || "—"}
                </p>
              </div>
            </div>
          </section>

          {/* Booking */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/40">
              Booking
            </h3>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/30">
                  Seats
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  {payment.seats?.join(", ") || "—"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/30">
                  Ticket Price
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  {formatMoney(showtime?.ticketPrice)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/30">
                  Total Amount
                </p>

                <p className="mt-1 text-lg font-bold text-blue-400">
                  {formatMoney(payment.totalAmount)}
                </p>
              </div>
            </div>
          </section>

          {/* Payment Information */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/40">
              Payment Information
            </h3>

            <div className="space-y-3">
              <InfoRow
                label="Transaction ID"
                value={payment.payment?.tranId}
                copyable
                onCopy={onCopy}
                copied={copied}
              />

              <InfoRow
                label="Validation ID"
                value={payment.payment?.valId}
              />

              <InfoRow
                label="Bank Transaction"
                value={payment.payment?.bankTranId}
              />

              <InfoRow
                label="Payment Method"
                value={payment.payment?.paymentMethod}
              />

              <InfoRow
                label="Booking ID"
                value={payment._id}
                copyable
                onCopy={onCopy}
                copied={copied}
              />

              <InfoRow
                label="Created"
                value={formatDate(payment.createdAt)}
              />

              <InfoRow
                label="Updated"
                value={formatDate(payment.updatedAt)}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  copyable = false,
  onCopy,
  copied,
}) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-xs uppercase tracking-wider text-white/30">
        {label}
      </span>

      <div className="flex min-w-0 items-center gap-2">
        <span className="break-all text-sm font-medium text-white/80">
          {value || "—"}
        </span>

        {copyable && value && (
          <button
            type="button"
            onClick={() => onCopy(value)}
            className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/50 transition hover:bg-white/10 hover:text-white"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState([]);

  const [stats, setStats] = useState({
    totalBookings: 0,
    paidCount: 0,
    pendingCount: 0,
    failedCount: 0,
    cancelledCount: 0,
    totalRevenue: 0,
  });

  const [search, setSearch] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("all");
  const [bookingStatus, setBookingStatus] = useState("all");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedPayment, setSelectedPayment] =
    useState(null);

  const [copied, setCopied] = useState(false);

  const fetchPayments = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const params = new URLSearchParams();

      params.set("page", String(page));
      params.set("limit", "10");
      params.set("search", search);
      params.set("paymentStatus", paymentStatus);
      params.set("bookingStatus", bookingStatus);

const response = await fetch(
  `/api/payment?${params.toString()}`,
  {
    cache: "no-store",
  }
);

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to fetch payments"
        );
      }

      setPayments(data.payments || []);

      setStats(
        data.stats || {
          totalBookings: 0,
          paidCount: 0,
          pendingCount: 0,
          failedCount: 0,
          cancelledCount: 0,
          totalRevenue: 0,
        }
      );

      setTotalPages(
        data.pagination?.totalPages || 1
      );
    } catch (error) {
      console.error("Fetch admin payments error:", error);

      setError(
        error.message || "Failed to load payment data"
      );
    } finally {
      setLoading(false);
    }
  }, [
    page,
    search,
    paymentStatus,
    bookingStatus,
  ]);

  useEffect(() => {
    fetchPayments();
  }, [fetchPayments]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handlePaymentStatus = (event) => {
    setPaymentStatus(event.target.value);
    setPage(1);
  };

  const handleBookingStatus = (event) => {
    setBookingStatus(event.target.value);
    setPage(1);
  };

  const resetFilters = () => {
    setSearch("");
    setPaymentStatus("all");
    setBookingStatus("all");
    setPage(1);
  };

  const copyTransaction = async (value) => {
    if (!value) return;

    try {
      await navigator.clipboard.writeText(String(value));

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Payments
            </h1>

            <p className="mt-2 text-sm text-white/40">
              Manage movie booking payments and
              transactions.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard
            icon={FiDollarSign}
            label="Total Revenue"
            value={formatMoney(stats.totalRevenue)}
            description="Successful payments"
          />

          <StatCard
            icon={FiCheckCircle}
            label="Paid"
            value={stats.paidCount}
            description="Confirmed payments"
          />

          <StatCard
            icon={FiClock}
            label="Pending"
            value={stats.pendingCount}
            description="Awaiting payment"
          />

          <StatCard
            icon={FiXCircle}
            label="Failed"
            value={stats.failedCount}
            description="Failed payments"
          />

          <StatCard
            icon={FiCreditCard}
            label="Cancelled"
            value={stats.cancelledCount}
            description="Cancelled payments"
          />
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-2xl border border-white/10 bg-[#080D18] p-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <FiSearch
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />

              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search customer, phone, email or transaction..."
                className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-blue-500/50 focus:bg-white/[0.05]"
              />
            </div>

            {/* Payment Status */}
            <select
              value={paymentStatus}
              onChange={handlePaymentStatus}
              className="h-11 rounded-xl border border-white/10 bg-[#0B111D] px-4 text-sm text-white outline-none focus:border-blue-500/50"
            >
              <option value="all">
                All Payments
              </option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
              <option value="cancelled">
                Cancelled
              </option>
            </select>

            {/* Booking Status */}
            <select
              value={bookingStatus}
              onChange={handleBookingStatus}
              className="h-11 rounded-xl border border-white/10 bg-[#0B111D] px-4 text-sm text-white outline-none focus:border-blue-500/50"
            >
              <option value="all">
                All Bookings
              </option>
              <option value="confirmed">
                Confirmed
              </option>
              <option value="pending">
                Pending
              </option>
              <option value="cancelled">
                Cancelled
              </option>
            </select>

            <button
              type="button"
              onClick={resetFilters}
              className="h-11 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080D18]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px]">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Customer
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Movie
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Showtime
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Seats
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Amount
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Payment
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Date
                  </th>

                  <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-white/30">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-5 py-16 text-center text-sm text-white/40"
                    >
                      Loading payments...
                    </td>
                  </tr>
                ) : payments.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-5 py-16 text-center"
                    >
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white/20">
                        <FiCreditCard size={22} />
                      </div>

                      <p className="mt-4 text-sm font-medium text-white/60">
                        No payments found
                      </p>

                      <p className="mt-1 text-xs text-white/30">
                        Try changing your filters or
                        search.
                      </p>
                    </td>
                  </tr>
                ) : (
                  payments.map((payment) => {
                    const movie = payment.movieId;
                    const showtime =
                      payment.showtimeId;

                    return (
                      <tr
                        key={payment._id}
                        className="border-b border-white/5 transition hover:bg-white/[0.02]"
                      >
                        {/* Customer */}
                        <td className="px-5 py-4">
                          <div className="max-w-[190px]">
                            <p className="truncate text-sm font-semibold text-white">
                              {payment.customer?.name ||
                                "—"}
                            </p>

                            <p className="mt-1 truncate text-xs text-white/35">
                              {payment.customer?.email ||
                                "—"}
                            </p>

                            <p className="mt-1 text-xs text-white/35">
                              {payment.customer?.phone ||
                                "—"}
                            </p>
                          </div>
                        </td>

                        {/* Movie */}
                        <td className="px-5 py-4">
                          <div className="flex max-w-[220px] items-center gap-3">
                            {movie?.poster ? (
                              <img
                                src={movie.poster}
                                alt={
                                  movie.title ||
                                  "Movie"
                                }
                                className="h-12 w-8 shrink-0 rounded-md object-cover"
                              />
                            ) : (
                              <div className="h-12 w-8 shrink-0 rounded-md bg-white/5" />
                            )}

                            <p className="truncate text-sm font-medium text-white">
                              {movie?.title ||
                                "Unknown movie"}
                            </p>
                          </div>
                        </td>

                        {/* Showtime */}
                        <td className="px-5 py-4">
                          <div className="text-sm text-white/70">
                            <p>
                              {showtime?.date || "—"}
                            </p>

                            <p className="mt-1 text-xs text-white/35">
                              {showtime?.startTime ||
                                "—"}
                            </p>
                          </div>
                        </td>

                        {/* Seats */}
                        <td className="px-5 py-4">
                          <div className="flex max-w-[100px] flex-wrap gap-1">
                            {payment.seats?.map(
                              (seat) => (
                                <span
                                  key={seat}
                                  className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/60"
                                >
                                  {seat}
                                </span>
                              )
                            )}
                          </div>
                        </td>

                        {/* Amount */}
                        <td className="px-5 py-4">
                          <p className="text-sm font-bold text-white">
                            {formatMoney(
                              payment.totalAmount
                            )}
                          </p>
                        </td>

                        {/* Payment */}
                        <td className="px-5 py-4">
                          <StatusBadge
                            status={
                              payment.paymentStatus
                            }
                          />

                          <div className="mt-2">
                            <p className="max-w-[150px] truncate text-xs text-white/30">
                              {payment.payment
                                ?.tranId || "No transaction"}
                            </p>
                          </div>
                        </td>

                        {/* Date */}
                        <td className="px-5 py-4">
                          <p className="whitespace-nowrap text-xs text-white/40">
                            {formatDate(
                              payment.createdAt
                            )}
                          </p>
                        </td>

                        {/* Action */}
                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedPayment(
                                payment
                              )
                            }
                            className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/70 transition hover:bg-blue-500/10 hover:text-blue-400"
                          >
                            <FiEye size={15} />
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {!loading && payments.length > 0 && (
            <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/35">
                Page {page} of {totalPages}
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() =>
                    setPage((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  className="flex h-9 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/60 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <FiChevronLeft size={15} />
                  Previous
                </button>

                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() =>
                    setPage((current) =>
                      Math.min(
                        totalPages,
                        current + 1
                      )
                    )
                  }
                  className="flex h-9 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/60 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Next
                  <FiChevronRight size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Details Modal */}
      {selectedPayment && (
        <PaymentDetails
          payment={selectedPayment}
          onClose={() => {
            setSelectedPayment(null);
            setCopied(false);
          }}
          onCopy={copyTransaction}
          copied={copied}
        />
      )}
    </div>
  );
}

