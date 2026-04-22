const AdminOverviewCard = () => {
  return (
    <section className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-light text-2xl font-bold text-primary">
          A
        </div>

        <div>
          <h1 className="text-2xl font-bold text-text-primary">
            Admin Dashboard
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Monitor provider approvals, booking activity, and reported issues
            across the platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminOverviewCard;
