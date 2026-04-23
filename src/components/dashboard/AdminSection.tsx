import React from "react";
import EmptyState from "../ui/EmptyState";
import SectionHeader from "../ui/SectionHeader";

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
      <SectionHeader title={title} description={description} />

      {itemsCount === 0 ? (
        <EmptyState
          title="Nothing here yet"
          description={emptyMessage}
          actionLabel="Go Home"
          actionTo="/"
        />
      ) : (
        <div className="space-y-5">{children}</div>
      )}
    </section>
  );
};

export default AdminSection;
