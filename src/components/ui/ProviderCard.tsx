import { Link } from "react-router-dom";
import type { Provider } from "../../types/provider";

interface ProviderCardProps {
  provider: Provider;
}

const ProviderCard = ({ provider }: ProviderCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl border border-border-soft bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-52 overflow-hidden">
        <img
          src={provider.image}
          alt={provider.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-text-primary">
                {provider.name}
              </h3>

              {provider.verified && (
                <span className="rounded-full bg-accent-light px-2.5 py-1 text-xs font-semibold text-primary">
                  Verified
                </span>
              )}
            </div>

            <p className="mt-1 text-sm font-medium text-primary">
              {provider.category}
            </p>
          </div>

          <div className="rounded-xl bg-soft px-3 py-2 text-right">
            <p className="text-sm font-semibold text-text-primary">
              ⭐ {provider.rating}
            </p>
            <p className="text-xs text-text-secondary">
              {provider.reviewsCount} reviews
            </p>
          </div>
        </div>

        <p className="text-sm leading-6 text-text-secondary">
          {provider.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-text-secondary">
          <div className="rounded-2xl bg-soft px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-text-secondary/70">
              Location
            </p>
            <p className="mt-1 font-medium text-text-primary">
              {provider.location}
            </p>
          </div>

          <div className="rounded-2xl bg-soft px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-text-secondary/70">
              Experience
            </p>
            <p className="mt-1 font-medium text-text-primary">
              {provider.experience} years
            </p>
          </div>

          <div className="rounded-2xl bg-soft px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-text-secondary/70">
              Starting at
            </p>
            <p className="mt-1 font-medium text-text-primary">
              ₹{provider.startingPrice}
            </p>
          </div>

          <div className="rounded-2xl bg-soft px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-text-secondary/70">
              Availability
            </p>
            <p className="mt-1 font-medium text-text-primary">
              {provider.availability}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            className="rounded-xl border border-border-soft px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-soft"
          >
            Save
          </button>

          <Link
            to={`/providers/${provider.id}`}
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProviderCard;
