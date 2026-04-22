import React from "react";

interface AdminSectionProps {
  title: string;
  description: string;
  emptyMessage: string;
  itemsCount: number;
  children: React.ReactNode;
}

const AdminSection = ({
  title,
  description,
  emptyMessage,
  itemsCount,
  children,
}: AdminSectionProps) => {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
        <p className="mt-2 text-sm text-text-secondary">{description}</p>
      </div>

      {itemsCount === 0 ? (
        <div className="rounded-xl border border-dashed border-border-soft bg-surface px-6 py-12 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-text-primary">
            Nothing here yet
          </h3>
          <p className="mt-2 text-sm text-text-secondary">{emptyMessage}</p>
        </div>
      ) : (
        <div className="space-y-5">{children}</div>
      )}
    </section>
  );
};

export default AdminSection;
