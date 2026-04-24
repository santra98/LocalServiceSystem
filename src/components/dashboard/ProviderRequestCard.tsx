import StatusBadge from "../ui/StatusBadge";
import type { ProviderBookingRequest } from "../../types/providerDashboard";
import InfoChip from "../ui/InfoChip";
import { memo } from "react";

interface ProviderRequestCardProps {
  request: ProviderBookingRequest;
  onAccept?: (request: ProviderBookingRequest) => void;
  onReject?: (request: ProviderBookingRequest) => void;
  onViewDetails?: (request: ProviderBookingRequest) => void;
  onComplete?: (request: ProviderBookingRequest) => void;
}

const ProviderRequestCard = ({
  request,
  onAccept,
  onReject,
  onComplete,
  onViewDetails,
}: ProviderRequestCardProps) => {
  const canTakeAction = request.status === "pending";
  const canComplete = request.status === "confirmed";

  return (
    <article className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-text-primary">
              {request.customerName}
            </h3>
            <StatusBadge status={request.status} />
          </div>

          <div className="mt-2">
            <InfoChip label={request.service} />
          </div>

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
          onClick={() => onViewDetails?.(request)}
          className="rounded-xl border border-border-soft px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-soft"
        >
          View Details
        </button>

        <button
          type="button"
          className="rounded-xl border border-border-soft px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-soft"
        >
          Contact Customer
        </button>

        {canTakeAction && (
          <>
            <button
              type="button"
              onClick={() => onAccept?.(request)}
              className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Accept
            </button>

            <button
              type="button"
              onClick={() => onReject?.(request)}
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-100"
            >
              Reject
            </button>
          </>
        )}

        {canComplete && (
          <button
            type="button"
            onClick={() => onComplete?.(request)}
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            Mark Completed
          </button>
        )}
      </div>
    </article>
  );
};

export default memo(ProviderRequestCard);
