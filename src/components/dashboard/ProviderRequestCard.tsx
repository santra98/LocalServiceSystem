import StatusBadge from "../ui/StatusBadge";
import type { ProviderBookingRequest } from "../../types/providerDashboard";

interface ProviderRequestCardProps {
  request: ProviderBookingRequest;
}

const ProviderRequestCard = ({ request }: ProviderRequestCardProps) => {
  return (
    <article className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-text-primary">
              {request.customerName}
            </h3>
            <StatusBadge status={request.status} />
          </div>

          <p className="mt-2 text-sm font-medium text-primary">
            {request.service}
          </p>

          <p className="mt-3 text-sm leading-6 text-text-secondary">
            Booking request from customer for scheduled service.
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3 text-left lg:text-right">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Request ID
          </p>
          <p className="mt-1 font-semibold text-text-primary">{request.id}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Date
          </p>
          <p className="mt-1 font-medium text-text-primary">{request.date}</p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Time
          </p>
          <p className="mt-1 font-medium text-text-primary">{request.time}</p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Phone
          </p>
          <p className="mt-1 font-medium text-text-primary">{request.phone}</p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Price
          </p>
          <p className="mt-1 font-medium text-text-primary">₹{request.price}</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-soft px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-text-secondary/70">
          Address
        </p>
        <p className="mt-1 text-sm text-text-primary">{request.address}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
        >
          View Request
        </button>

        <button
          type="button"
          className="rounded-xl border border-border-soft px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-soft"
        >
          Contact Customer
        </button>
      </div>
    </article>
  );
};

export default ProviderRequestCard;
