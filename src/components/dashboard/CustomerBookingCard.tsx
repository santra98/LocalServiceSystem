import { Link } from "react-router-dom";
import type { CustomerBooking } from "../../types/customerBooking";
import StatusBadge from "../ui/StatusBadge";

interface CustomerBookingCardProps {
  booking: CustomerBooking;
}

const CustomerBookingCard = ({ booking }: CustomerBookingCardProps) => {
  return (
    <article className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-text-primary">
              {booking.providerName}
            </h3>
            <StatusBadge status={booking.status} />
          </div>

          <p className="mt-2 text-sm font-medium text-primary">
            {booking.category}
          </p>

          <p className="mt-3 text-sm leading-6 text-text-secondary">
            {booking.service}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3 text-left lg:text-right">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Booking ID
          </p>
          <p className="mt-1 font-semibold text-text-primary">{booking.id}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Date
          </p>
          <p className="mt-1 font-medium text-text-primary">{booking.date}</p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Time
          </p>
          <p className="mt-1 font-medium text-text-primary">{booking.time}</p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Payment
          </p>
          <p className="mt-1 font-medium text-text-primary">
            {booking.paymentMethod}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Price
          </p>
          <p className="mt-1 font-medium text-text-primary">₹{booking.price}</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-soft px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-text-secondary/70">
          Address
        </p>
        <p className="mt-1 text-sm text-text-primary">{booking.address}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to={`/providers/${booking.providerId}`}
          className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
        >
          View Provider
        </Link>

        <button
          type="button"
          className="rounded-xl border border-border-soft px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-soft"
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default CustomerBookingCard;
