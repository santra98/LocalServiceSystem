const FiltersSidebar = () => {
  return (
    <aside className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-text-primary">Filters</h2>
        <p className="mt-1 text-sm text-text-secondary">
          Refine providers by category, price and rating.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-text-primary">
            Category
          </h3>
          <div className="space-y-2 text-sm text-text-secondary">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Electrician
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Plumber
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Cleaner
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Beautician
            </label>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-text-primary">
            Price Range
          </h3>
          <div className="space-y-2 text-sm text-text-secondary">
            <label className="flex items-center gap-2">
              <input type="radio" name="priceRange" />
              Below ₹500
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="priceRange" />
              ₹500 - ₹800
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="priceRange" />
              Above ₹800
            </label>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-text-primary">
            Rating
          </h3>
          <div className="space-y-2 text-sm text-text-secondary">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              4.5 and above
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              4.0 and above
            </label>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-text-primary">
            Availability
          </h3>
          <div className="space-y-2 text-sm text-text-secondary">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Available Today
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Available Tomorrow
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            Apply
          </button>
          <button
            type="button"
            className="flex-1 rounded-xl border border-border-soft px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-soft"
          >
            Reset
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
