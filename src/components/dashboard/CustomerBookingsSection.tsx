import type { CustomerBooking } from "../../types/customerBooking";
import EmptyState from "../ui/EmptyState";
import SectionHeader from "../ui/SectionHeader";
import CustomerBookingCard from "./CustomerBookingCard";

interface CustomerBookingsSectionProps {
  title: string;
  description: string;
  bookings: CustomerBooking[];
  emptyMessage: string;
  onCancel?: (booking: CustomerBooking) => void;
  onViewDetails?: (booking: CustomerBooking) => void;
}

const CustomerBookingsSection = ({
  title,
  description,
  bookings,
  emptyMessage,
  onCancel,
  onViewDetails,
}: CustomerBookingsSectionProps) => {
  return (
    <section className="space-y-5">
      <SectionHeader title={title} description={description} />

      {bookings.length === 0 ? (
        <EmptyState
          title="Nothing here yet"
          description={emptyMessage}
          actionLabel="Browse Services"
          actionTo="/services"
        />
      ) : (
        <div className="space-y-5">
          {bookings.map((booking) => (
            <CustomerBookingCard
              key={booking.id}
              booking={booking}
              onCancel={onCancel}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CustomerBookingsSection;
