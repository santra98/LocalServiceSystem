const SearchSection = () => {
  return (
    <section className="-mt-2 rounded-xl bg-primary px-6 py-6 text-white shadow-lg md:px-8">
      <div className="grid gap-4 md:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-white/80"
          >
            What service do you need?
          </label>
          <input
            id="service"
            type="text"
            placeholder="Search for plumbing, cleaning, salon..."
            className="w-full rounded-xl border border-accent bg-surface px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-highlight"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-white/80"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Enter your area"
            className="w-full rounded-xl border border-accent bg-surface px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-highlight"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="mb-2 block text-sm font-medium text-white/80"
          >
            Preferred date
          </label>
          <input
            id="date"
            type="date"
            className="w-full rounded-xl border border-accent bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-highlight"
          />
        </div>

        <div className="flex items-end">
          <button
            type="button"
            className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:opacity-90"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
