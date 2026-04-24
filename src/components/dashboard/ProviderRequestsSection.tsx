import type { ProviderBookingRequest } from "../../types/providerDashboard";
import EmptyState from "../ui/EmptyState";
import SectionHeader from "../ui/SectionHeader";
import ProviderRequestCard from "./ProviderRequestCard";

interface ProviderRequestsSectionProps {
  title: string;
  description: string;
  requests: ProviderBookingRequest[];
  emptyMessage: string;
  onAccept?: (request: ProviderBookingRequest) => void;
  onReject?: (request: ProviderBookingRequest) => void;
  onViewDetails?: (request: ProviderBookingRequest) => void;
  onComplete?: (request: ProviderBookingRequest) => void;
}

const ProviderRequestsSection = ({
  title,
  description,
  requests,
  emptyMessage,
  onAccept,
  onReject,
  onComplete,
  onViewDetails,
}: ProviderRequestsSectionProps) => {
  return (
    <section className="space-y-5">
      <SectionHeader title={title} description={description} />

      {requests.length === 0 ? (
        <EmptyState
          title="Nothing here yet"
          description={emptyMessage}
          actionLabel="Go to Dashboard"
          actionTo="/provider/dashboard"
        />
      ) : (
        <div className="space-y-5">
          {requests.map((request) => (
            <ProviderRequestCard
              key={request.id}
              request={request}
              onAccept={onAccept}
              onReject={onReject}
              onComplete={onComplete}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProviderRequestsSection;
