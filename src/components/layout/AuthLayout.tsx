import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex text-sm font-medium text-primary transition hover:text-primary-hover"
        >
          ← Back to Home
        </Link>

        <div className="mt-8 grid overflow-hidden rounded-xl border border-border-soft bg-surface shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hidden bg-primary px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                LocalServe
              </p>
              <h1 className="mt-6 text-4xl font-bold leading-tight">
                Manage local services with a smoother experience
              </h1>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                Discover trusted providers, manage bookings, and track activity
                across customer, provider, and admin journeys.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-semibold">
                  Trusted provider discovery
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Browse verified professionals and compare services with ease.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-semibold">
                  Role-based dashboard flows
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Designed for customers, providers, and platform
                  administrators.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-5 py-8 sm:px-8 md:px-10 md:py-12">
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
