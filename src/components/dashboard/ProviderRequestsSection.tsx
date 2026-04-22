import type { ProviderBookingRequest } from "../../types/providerDashboard";
import ProviderRequestCard from "./ProviderRequestCard";

interface ProviderRequestsSectionProps {
  title: string;
  description: string;
  requests: ProviderBookingRequest[];
  emptyMessage: string;
}

const ProviderRequestsSection = ({
  title,
  description,
  requests,
  emptyMessage,
}: ProviderRequestsSectionProps) => {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
        <p className="mt-2 text-sm text-text-secondary">{description}</p>
      </div>

      {requests.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border-soft bg-surface px-6 py-12 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-text-primary">
            Nothing here yet
          </h3>
          <p className="mt-2 text-sm text-text-secondary">{emptyMessage}</p>
        </div>
      ) : (
        <div className="space-y-5">
          {requests.map((request) => (
            <ProviderRequestCard key={request.id} request={request} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProviderRequestsSection;
