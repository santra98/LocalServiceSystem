import type { CustomerBooking } from "../../types/customerBooking";
import Modal from "../ui/Modal";
import DetailsRow from "../ui/DetailsRow";
import StatusBadge from "../ui/StatusBadge";

interface CustomerBookingDetailsModalProps {
  booking: CustomerBooking | null;
  isOpen: boolean;
  onClose: () => void;
}

const CustomerBookingDetailsModal = ({
  booking,
  isOpen,
  onClose,
}: CustomerBookingDetailsModalProps) => {
  if (!booking) return null;

  return (
    <Modal isOpen={isOpen} title="Booking Details" onClose={onClose}>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-text-primary">
            {booking.providerName}
          </h3>
          <StatusBadge status={booking.status} />
        </div>

        <DetailsRow label="Category" value={booking.category} />
        <DetailsRow label="Service" value={booking.service} />
        <DetailsRow label="Date" value={booking.date} />
        <DetailsRow label="Time" value={booking.time} />
        <DetailsRow label="Payment" value={booking.paymentMethod} />
        <DetailsRow label="Price" value={`₹${booking.price}`} />
        <DetailsRow label="Address" value={booking.address} />
        <DetailsRow label="Booking ID" value={booking.id} />
      </div>
    </Modal>
  );
};

export default CustomerBookingDetailsModal;
