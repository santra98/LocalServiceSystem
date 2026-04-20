import type { Provider } from "../../types/provider";

interface ProviderOverviewProps {
  provider: Provider;
}

const ProviderOverview = ({ provider }: ProviderOverviewProps) => {
  return (
    <section className="space-y-8">
      <div className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-text-primary">
          About this provider
        </h2>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          {provider.name} offers dependable {provider.category.toLowerCase()}{" "}
          services with a focus on timely response, quality work and a smooth
          customer experience. Whether you need a quick fix or a scheduled
          service, this provider is equipped to handle common household and
          local service needs.
        </p>
      </div>

      <div className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-text-primary">
          Services offered
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {provider.services.map((service) => (
            <span
              key={service}
              className="rounded-full bg-accent-light px-4 py-2 text-sm font-medium text-primary"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-text-primary">Quick details</h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-soft px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-text-secondary/70">
              Availability
            </p>
            <p className="mt-1 font-semibold text-text-primary">
              {provider.availability}
            </p>
          </div>

          <div className="rounded-2xl bg-soft px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-text-secondary/70">
              Category
            </p>
            <p className="mt-1 font-semibold text-text-primary">
              {provider.category}
            </p>
          </div>

          <div className="rounded-2xl bg-soft px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-text-secondary/70">
              Reviews
            </p>
            <p className="mt-1 font-semibold text-text-primary">
              {provider.reviewsCount}+ customer reviews
            </p>
          </div>

          <div className="rounded-2xl bg-soft px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-text-secondary/70">
              Starting at
            </p>
            <p className="mt-1 font-semibold text-text-primary">
              ₹{provider.startingPrice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderOverview;
