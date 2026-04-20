import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="rounded-xl bg-primary px-6 py-10 text-white md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold leading-tight">
            Ready to book your next service?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
            Explore trusted professionals, compare options and make your booking
            in just a few clicks.
          </p>
        </div>

        <Link
          to="/services"
          className="inline-flex w-fit items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:opacity-90"
        >
          Browse Services
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
