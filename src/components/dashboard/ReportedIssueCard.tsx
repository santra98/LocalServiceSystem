import type { AdminReportedIssue } from "../../types/adminDashboard";

interface ReportedIssueCardProps {
  issue: AdminReportedIssue;
}

const priorityClasses = {
  low: "bg-blue-100 text-blue-700",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-700",
};

const statusClasses = {
  open: "bg-red-100 text-red-700",
  in_review: "bg-yellow-100 text-yellow-800",
  resolved: "bg-green-100 text-green-800",
};

const ReportedIssueCard = ({ issue }: ReportedIssueCardProps) => {
  return (
    <article className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-text-primary">
              {issue.title}
            </h3>

            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${priorityClasses[issue.priority]}`}
            >
              {issue.priority}
            </span>

            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusClasses[issue.status]}`}
            >
              {issue.status.replace("_", " ")}
            </span>
          </div>

          <p className="mt-3 text-sm text-text-secondary">
            Reported by:{" "}
            <span className="font-medium text-text-primary">
              {issue.reportedBy}
            </span>
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Category:{" "}
            <span className="font-medium text-text-primary">
              {issue.category}
            </span>
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3 text-left lg:text-right">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Created
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            {issue.createdAt}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
        >
          View Issue
        </button>

        <button
          type="button"
          className="rounded-xl border border-border-soft px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-soft"
        >
          Update Status
        </button>
      </div>
    </article>
  );
};

export default ReportedIssueCard;
