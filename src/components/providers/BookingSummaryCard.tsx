import type { Provider } from "../../types/provider";

interface BookingSummaryCardProps {
  provider: Provider;
}

const BookingSummaryCard = ({ provider }: BookingSummaryCardProps) => {
  return (
    <aside className="sticky top-24 rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">
        Book this service
      </h2>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Starting price
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

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Service area
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            {provider.location}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <button
          type="button"
          className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
        >
          Continue to Booking
        </button>

        <button
          type="button"
          className="w-full rounded-xl border border-border-soft px-5 py-3 text-sm font-semibold text-text-primary transition hover:bg-soft"
        >
          Contact Provider
        </button>
      </div>

      <p className="mt-4 text-xs leading-5 text-text-secondary">
        Final pricing may vary depending on service scope, timing and location.
      </p>
    </aside>
  );
};

export default BookingSummaryCard;
