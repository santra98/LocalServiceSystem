interface DetailsRowProps {
  label: string;
  value: string;
}

const DetailsRow = ({ label, value }: DetailsRowProps) => {
  return (
    <div className="grid gap-1 rounded-2xl bg-soft px-4 py-3 sm:grid-cols-[140px_minmax(0,1fr)] sm:items-start">
      <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary/70">
        {label}
      </p>
      <p className="text-sm leading-6 text-text-primary break-words">{value}</p>
    </div>
  );
};

export default DetailsRow;
