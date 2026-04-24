import type { PendingProviderApproval } from "../../types/adminDashboard";
import InfoChip from "../ui/InfoChip";

interface PendingApprovalCardProps {
  approval: PendingProviderApproval;
  onApprove?: (approval: PendingProviderApproval) => void;
  onReject?: (approval: PendingProviderApproval) => void;
}

const formatLabel = (value: string) => value.replace("_", " ");

const PendingApprovalCard = ({
  approval,
  onApprove,
  onReject,
}: PendingApprovalCardProps) => {
  return (
    <article className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-text-primary">
              {approval.providerName}
            </h3>
            <InfoChip label={approval.category} />
          </div>

          <div className="mt-3 space-y-1 text-sm text-text-secondary">
            <p>
              <span className="font-medium text-text-primary">Experience:</span>{" "}
              {approval.experience} years
            </p>
            <p>
              <span className="font-medium text-text-primary">Location:</span>{" "}
              {approval.location}
            </p>
            <p>
              <span className="font-medium text-text-primary">
                Verification:
              </span>{" "}
              {formatLabel(approval.verificationStatus)}
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3 text-left lg:text-right">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Submitted
          </p>
          <p className="mt-1 text-sm font-medium text-text-primary">
            {approval.submittedAt}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onApprove?.(approval)}
          className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
        >
          Approve
        </button>

        <button
          type="button"
          onClick={() => onReject?.(approval)}
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-100"
        >
          Reject
        </button>
      </div>
    </article>
  );
};

export default PendingApprovalCard;
