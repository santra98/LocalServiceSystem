import type { Provider } from "../../types/provider";

interface ProviderReviewsPreviewProps {
  provider: Provider;
}

const ProviderReviewsPreview = ({ provider }: ProviderReviewsPreviewProps) => {
  return (
    <section className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">
            Customer reviews
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            A quick look at how customers rate {provider.name}.
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3 text-left md:text-right">
          <p className="text-sm text-text-secondary">Average rating</p>
          <p className="text-xl font-bold text-text-primary">
            ⭐ {provider.rating} / 5
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <article className="rounded-2xl bg-soft p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-text-primary">Aparna S.</h3>
            <span className="text-sm font-medium text-highlight">⭐ 5.0</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Very professional and on time. The work was completed neatly and the
            overall experience felt reliable from start to finish.
          </p>
        </article>

        <article className="rounded-2xl bg-soft p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-text-primary">Rahul M.</h3>
            <span className="text-sm font-medium text-highlight">⭐ 4.8</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Good communication and clear pricing. Would book again for future
            service needs.
          </p>
        </article>
      </div>
    </section>
  );
};

export default ProviderReviewsPreview;
