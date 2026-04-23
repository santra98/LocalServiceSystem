import type { ProviderBookingRequest } from "../../types/providerDashboard";
import Modal from "../ui/Modal";
import DetailsRow from "../ui/DetailsRow";
import StatusBadge from "../ui/StatusBadge";

interface ProviderRequestDetailsModalProps {
  request: ProviderBookingRequest | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProviderRequestDetailsModal = ({
  request,
  isOpen,
  onClose,
}: ProviderRequestDetailsModalProps) => {
  if (!request) return null;

  return (
    <Modal isOpen={isOpen} title="Request Details" onClose={onClose}>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-text-primary">
            {request.customerName}
          </h3>
          <StatusBadge status={request.status} />
        </div>

        <DetailsRow label="Service" value={request.service} />
        <DetailsRow label="Date" value={request.date} />
        <DetailsRow label="Time" value={request.time} />
        <DetailsRow label="Phone" value={request.phone} />
        <DetailsRow label="Payment" value={request.paymentMethod} />
        <DetailsRow label="Price" value={`₹${request.price}`} />
        <DetailsRow label="Address" value={request.address} />
        <DetailsRow label="Request ID" value={request.id} />
      </div>
    </Modal>
  );
};

export default ProviderRequestDetailsModal;
