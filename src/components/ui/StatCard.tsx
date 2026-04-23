interface StatCardProps {
  label: string;
  value: string | number;
  hint?: string;
}

const StatCard = ({ label, value, hint }: StatCardProps) => {
  return (
    <article className="rounded-3xl border border-border-soft bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-sm font-medium text-text-secondary">{label}</p>
      <h2 className="mt-3 text-3xl font-bold text-text-primary">{value}</h2>
      {hint && <p className="mt-2 text-xs text-text-secondary">{hint}</p>}
    </article>
  );
};

export default StatCard;
