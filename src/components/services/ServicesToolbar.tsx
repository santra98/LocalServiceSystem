interface ServicesToolbarProps {
  totalCount: number;
}

const ServicesToolbar = ({ totalCount }: ServicesToolbarProps) => {
  return (
    <div className="rounded-xl border border-border-soft bg-surface p-5 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Service Providers
          </p>
          <h1 className="mt-1 text-3xl font-bold text-text-primary">
            Explore available professionals
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Showing{" "}
            <span className="font-semibold text-text-primary">
              {totalCount}
            </span>{" "}
            providers across popular local service categories.
          </p>
        </div>

        <div className="w-full md:w-60">
          <label
            htmlFor="sort"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Sort by
          </label>
          <select
            id="sort"
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
          >
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Price: Low to High</option>
            <option>Experience</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ServicesToolbar;
