import { serviceCategories } from "../../data/home";

const CategoriesSection = () => {
  return (
    <section className="py-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Categories
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text-primary">
          Explore popular services
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">
          Browse a wide range of everyday services and find the right
          professional for your needs.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {serviceCategories.map((category) => (
          <article
            key={category.id}
            className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-light text-2xl">
              {category.icon}
            </div>

            <h3 className="text-xl font-semibold text-text-primary">
              {category.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-text-secondary">
              {category.description}
            </p>

            <button
              type="button"
              className="mt-5 text-sm font-semibold text-primary hover:text-primary-hover"
            >
              View providers →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
