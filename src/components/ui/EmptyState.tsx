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
    <div className="rounded-3xl border border-dashed border-border-soft bg-surface px-5 py-8 text-center shadow-sm sm:px-6 sm:py-10">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-soft text-xl sm:h-16 sm:w-16 sm:text-2xl">
        📭
      </div>

      <h3 className="mt-4 text-xl font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-text-secondary">
        {description}
      </p>

      {actionLabel && actionTo && (
        <div className="mt-5 sm:mt-6">
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
