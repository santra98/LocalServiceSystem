interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-text-secondary">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
