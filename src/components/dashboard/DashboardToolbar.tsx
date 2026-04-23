interface DashboardToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  statusValue: string;
  onStatusChange: (value: string) => void;
  sortValue: string;
  onSortChange: (value: string) => void;
  statusOptions: { label: string; value: string }[];
  searchPlaceholder?: string;
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
}: DashboardToolbarProps) => {
  return (
    <section className="rounded-3xl border border-border-soft bg-surface p-5 shadow-sm">
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
            onChange={(e) => onSortChange(e.target.value)}
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
