type SortOrder = "newest" | "oldest";

interface DashboardToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  statusValue: string;
  onStatusChange: (value: string) => void;
  sortValue: SortOrder;
  onSortChange: (value: SortOrder) => void;
  statusOptions: { label: string; value: string }[];
  searchPlaceholder?: string;
  resultCount?: number;
  totalCount?: number;
  onReset?: () => void;
}

const DashboardToolbar = ({
  searchValue,
  onSearchChange,
  statusValue,
  onStatusChange,
  sortValue,
  onSortChange,
  statusOptions,
  searchPlaceholder = "Search...",
  resultCount,
  totalCount,
  onReset,
}: DashboardToolbarProps) => {
  return (
    <section className="rounded-3xl border border-border-soft bg-surface p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-text-primary">
            Search and filters
          </h2>
          {typeof resultCount === "number" &&
            typeof totalCount === "number" && (
              <p className="mt-1 text-sm text-text-secondary">
                Showing {resultCount} of {totalCount} results
              </p>
            )}
        </div>

        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="w-full rounded-xl border border-border-soft px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-soft sm:w-auto"
          >
            Reset filters
          </button>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_220px_220px]">
        <div>
          <label
            htmlFor="dashboardSearch"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Search
          </label>
          <input
            id="dashboardSearch"
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="dashboardStatus"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Status
          </label>
          <select
            id="dashboardStatus"
            value={statusValue}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="dashboardSort"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Sort by
          </label>
          <select
            id="dashboardSort"
            value={sortValue}
            onChange={(e) => onSortChange(e.target.value as SortOrder)}
            className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default DashboardToolbar;
