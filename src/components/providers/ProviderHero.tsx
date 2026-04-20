import type { Provider } from "../../types/provider";

interface ProviderHeroProps {
  provider: Provider;
}

const ProviderHero = ({ provider }: ProviderHeroProps) => {
  return (
    <section className="overflow-hidden rounded-xl border border-border-soft bg-surface shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="h-full min-h-[280px]">
          <img
            src={provider.image}
            alt={provider.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
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

          <h1 className="mt-4 text-3xl font-bold text-text-primary md:text-4xl">
            {provider.name}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary">
            {provider.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="rounded-2xl bg-soft px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-text-secondary/70">
                Rating
              </p>
              <p className="mt-1 font-semibold text-text-primary">
                ⭐ {provider.rating} ({provider.reviewsCount} reviews)
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
                Experience
              </p>
              <p className="mt-1 font-semibold text-text-primary">
                {provider.experience} years
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderHero;
