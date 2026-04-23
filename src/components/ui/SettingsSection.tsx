import type { ReactNode } from "react";

interface SettingsSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

const SettingsSection = ({
  title,
  description,
  children,
}: SettingsSectionProps) => {
  return (
    <section className="rounded-3xl border border-border-soft bg-surface p-4 shadow-sm sm:p-6">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-text-secondary">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
};

export default SettingsSection;
