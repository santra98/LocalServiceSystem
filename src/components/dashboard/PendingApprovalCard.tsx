import type { PendingProviderApproval } from "../../types/adminDashboard";

interface PendingApprovalCardProps {
  approval: PendingProviderApproval;
}

const verificationClasses = {
  under_review: "bg-yellow-100 text-yellow-800",
  documents_pending: "bg-orange-100 text-orange-700",
};

const PendingApprovalCard = ({ approval }: PendingApprovalCardProps) => {
  return (
    <article className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-text-primary">
              {approval.providerName}
            </h3>
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${verificationClasses[approval.verificationStatus]}`}
            >
              {approval.verificationStatus.replace("_", " ")}
            </span>
          </div>

          <p className="mt-2 text-sm font-medium text-primary">
            {approval.category}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3 text-left lg:text-right">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Approval ID
          </p>
          <p className="mt-1 font-semibold text-text-primary">{approval.id}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Location
          </p>
          <p className="mt-1 font-medium text-text-primary">
            {approval.location}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Experience
          </p>
          <p className="mt-1 font-medium text-text-primary">
            {approval.experience} years
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Submitted
          </p>
          <p className="mt-1 font-medium text-text-primary">
            {approval.submittedAt}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
        >
          Review Profile
        </button>

        <button
          type="button"
          className="rounded-xl border border-border-soft px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-soft"
        >
          Request Documents
        </button>
      </div>
    </article>
  );
};

export default PendingApprovalCard;
