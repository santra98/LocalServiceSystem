import { homeHighlights } from "../../data/home";

const HighlightsSection = () => {
  return (
    <section className="rounded-xl border border-border-soft bg-surface px-6 py-10 shadow-sm md:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Why choose us
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text-primary">
          A smoother way to book local services
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {homeHighlights.map((item) => (
          <article key={item.id} className="rounded-2xl bg-soft p-6">
            <div className="mb-4 h-3 w-12 rounded-full bg-highlight" />
            <h3 className="text-lg font-semibold text-text-primary">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
