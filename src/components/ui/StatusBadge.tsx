import type { BookingStatus } from "../../types/customerBooking";

interface StatusBadgeProps {
  status: BookingStatus;
}

const statusClasses: Record<BookingStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  completed: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-700",
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusClasses[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
