import type { Provider } from "../../types/provider";

interface BookingProviderCardProps {
  provider: Provider;
}

const BookingProviderCard = ({ provider }: BookingProviderCardProps) => {
  return (
    <section className="overflow-hidden rounded-3xl border border-border-soft bg-surface shadow-sm">
      <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
        <div className="h-full min-h-[200px]">
          <img
            src={provider.image}
            alt={provider.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent-light px-3 py-1 text-sm font-semibold text-primary">
              {provider.category}
            </span>

            {provider.verified && (
              <span className="rounded-full bg-soft px-3 py-1 text-sm font-semibold text-text-primary">
                Verified Provider
              </span>
            )}
          </div>

          <h2 className="mt-4 text-2xl font-bold text-text-primary">
            {provider.name}
          </h2>

          <p className="mt-3 text-sm leading-6 text-text-secondary">
            {provider.description}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-soft px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-text-secondary/70">
                Rating
              </p>
              <p className="mt-1 font-semibold text-text-primary">
                ⭐ {provider.rating}
              </p>
            </div>

            <div className="rounded-2xl bg-soft px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-text-secondary/70">
                Location
              </p>
              <p className="mt-1 font-semibold text-text-primary">
                {provider.location}
              </p>
            </div>

            <div className="rounded-2xl bg-soft px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-text-secondary/70">
                Starting At
              </p>
              <p className="mt-1 font-semibold text-text-primary">
                ₹{provider.startingPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProviderCard;
