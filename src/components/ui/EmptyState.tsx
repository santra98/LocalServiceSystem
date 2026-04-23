import { Link } from "react-router-dom";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
}

const EmptyState = ({
  title,
  description,
  actionLabel,
  actionTo,
}: EmptyStateProps) => {
  return (
    <div className="rounded-3xl border border-dashed border-border-soft bg-surface px-6 py-12 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-soft text-2xl">
        📭
      </div>

      <h3 className="mt-5 text-xl font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-text-secondary">
        {description}
      </p>

      {actionLabel && actionTo && (
        <div className="mt-6">
          <Link
            to={actionTo}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            {actionLabel}
          </Link>
        </div>
      )}
    </div>
  );
};

export default EmptyState;
