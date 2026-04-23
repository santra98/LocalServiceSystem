interface InfoChipProps {
  label: string;
}

const InfoChip = ({ label }: InfoChipProps) => {
  return (
    <span className="inline-flex rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-primary">
      {label}
    </span>
  );
};

export default InfoChip;
