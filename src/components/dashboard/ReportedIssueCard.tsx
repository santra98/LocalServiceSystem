import type { AdminReportedIssue } from "../../types/adminDashboard";
import InfoChip from "../ui/InfoChip";

interface ReportedIssueCardProps {
  issue: AdminReportedIssue;
  onResolve?: (issue: AdminReportedIssue) => void;
}

const statusClasses: Record<AdminReportedIssue["status"], string> = {
  open: "bg-red-50 text-red-700 ring-1 ring-red-200",
  in_review: "bg-yellow-50 text-yellow-800 ring-1 ring-yellow-200",
  resolved: "bg-green-50 text-green-700 ring-1 ring-green-200",
};

const priorityClasses: Record<AdminReportedIssue["priority"], string> = {
  low: "bg-soft text-text-primary ring-1 ring-border-soft",
  medium: "bg-yellow-50 text-yellow-800 ring-1 ring-yellow-200",
  high: "bg-red-50 text-red-700 ring-1 ring-red-200",
};

const formatLabel = (value: string) => value.replace("_", " ");

const ReportedIssueCard = ({ issue, onResolve }: ReportedIssueCardProps) => {
  const canResolve = issue.status !== "resolved";

  return (
    <article className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-text-primary">
              {issue.title}
            </h3>

            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusClasses[issue.status]}`}
            >
              {formatLabel(issue.status)}
            </span>

            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${priorityClasses[issue.priority]}`}
            >
              {issue.priority} priority
            </span>
          </div>

          <div className="mt-3 space-y-1 text-sm text-text-secondary">
            <p>
              <span className="font-medium text-text-primary">Category:</span>{" "}
              {issue.category}
            </p>
            <p>
              <span className="font-medium text-text-primary">Created:</span>{" "}
              {issue.createdAt}
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3 text-left lg:text-right">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Reported by
          </p>
          <p className="mt-1 text-sm font-medium text-text-primary">
            {issue.reportedBy}
          </p>
        </div>
      </div>

      {canResolve && (
        <div className="mt-6">
          <button
            type="button"
            onClick={() => onResolve?.(issue)}
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            Mark Resolved
          </button>
        </div>
      )}
    </article>
  );
};

export default ReportedIssueCard;
