import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="grid gap-10 rounded-xl border border-border-soft bg-surface px-6 py-12 shadow-sm md:grid-cols-2 md:px-10 md:py-16">
      <div className="flex flex-col justify-center">
        <span className="mb-4 inline-flex w-fit rounded-full bg-accent-light px-4 py-1 text-sm font-medium text-primary">
          Book trusted local services with ease
        </span>

        <h1 className="text-4xl font-bold leading-tight text-text-primary md:text-5xl">
          Find reliable service professionals near you
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-text-secondary md:text-lg">
          Discover electricians, plumbers, cleaners, beauticians and more.
          Compare services, explore provider profiles and book with confidence.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/services"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            Explore Services
          </Link>

          <button
            type="button"
            className="rounded-xl border border-border-soft bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition hover:bg-soft"
          >
            Become a Provider
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl bg-accent-light p-8 shadow-inner">
          <div className="rounded-2xl bg-surface p-6 shadow-sm">
            <p className="text-sm font-medium text-text-secondary">
              Today's service snapshot
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-soft px-4 py-3">
                <span className="text-sm font-medium text-text-secondary">
                  Available categories
                </span>
                <span className="text-lg font-bold text-text-primary">25+</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-soft px-4 py-3">
                <span className="text-sm font-medium text-text-secondary">
                  Trusted professionals
                </span>
                <span className="text-lg font-bold text-text-primary">
                  300+
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-soft px-4 py-3">
                <span className="text-sm font-medium text-text-secondary">
                  Average rating
                </span>
                <span className="text-lg font-bold text-text-primary">
                  4.8/5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
