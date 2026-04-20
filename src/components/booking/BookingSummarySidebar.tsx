import { Link } from "react-router-dom";
import type { Provider } from "../../types/provider";

interface BookingSummarySidebarProps {
  provider: Provider;
}

const BookingSummarySidebar = ({ provider }: BookingSummarySidebarProps) => {
  return (
    <aside className="sticky top-24 rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Booking summary</h2>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Provider
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            {provider.name}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Category
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            {provider.category}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Starting Price
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            ₹{provider.startingPrice}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Availability
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            {provider.availability}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Link
          to="/booking/confirmation"
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
        >
          Confirm Booking
        </Link>

        <Link
          to={`/providers/${provider.id}`}
          className="inline-flex w-full items-center justify-center rounded-xl border border-border-soft px-5 py-3 text-sm font-semibold text-text-primary transition hover:bg-soft"
        >
          Back to Provider
        </Link>
      </div>

      <p className="mt-4 text-xs leading-5 text-text-secondary">
        This is a UI-only booking flow for now. Real slot confirmation and
        payment logic can be added later.
      </p>
    </aside>
  );
};

export default BookingSummarySidebar;
