import StatusBadge from "../ui/StatusBadge";
import type { AdminRecentBooking } from "../../types/adminDashboard";

interface AdminRecentBookingCardProps {
  booking: AdminRecentBooking;
}

const AdminRecentBookingCard = ({ booking }: AdminRecentBookingCardProps) => {
  return (
    <article className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-text-primary">
              {booking.service}
            </h3>
            <StatusBadge status={booking.status} />
          </div>

          <p className="mt-2 text-sm text-text-secondary">
            Customer:{" "}
            <span className="font-medium text-text-primary">
              {booking.customerName}
            </span>
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Provider:{" "}
            <span className="font-medium text-text-primary">
              {booking.providerName}
            </span>
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3 text-left lg:text-right">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Booking ID
          </p>
          <p className="mt-1 font-semibold text-text-primary">{booking.id}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Date
          </p>
          <p className="mt-1 font-medium text-text-primary">{booking.date}</p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Amount
          </p>
          <p className="mt-1 font-medium text-text-primary">
            ₹{booking.amount}
          </p>
        </div>
      </div>
    </article>
  );
};

export default AdminRecentBookingCard;
