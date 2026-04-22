import type { CustomerBooking } from "../../types/customerBooking";
import CustomerBookingCard from "./CustomerBookingCard";

interface CustomerBookingsSectionProps {
  title: string;
  description: string;
  bookings: CustomerBooking[];
  emptyMessage: string;
}

const CustomerBookingsSection = ({
  title,
  description,
  bookings,
  emptyMessage,
}: CustomerBookingsSectionProps) => {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
        <p className="mt-2 text-sm text-text-secondary">{description}</p>
      </div>

      {bookings.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border-soft bg-surface px-6 py-12 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-text-primary">
            Nothing here yet
          </h3>
          <p className="mt-2 text-sm text-text-secondary">{emptyMessage}</p>
        </div>
      ) : (
        <div className="space-y-5">
          {bookings.map((booking) => (
            <CustomerBookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CustomerBookingsSection;
