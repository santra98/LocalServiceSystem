import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UnauthorizedPage = () => {
  const { user, getDashboardRouteByRole } = useAuth();

  return (
    <div className="py-6">
      <section className="mx-auto max-w-3xl rounded-3xl border border-border-soft bg-surface px-6 py-12 text-center shadow-sm md:px-10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-soft text-3xl">
          🚫
        </div>

        <h1 className="mt-6 text-3xl font-bold text-text-primary">
          Access denied
        </h1>

        <p className="mt-4 text-base leading-7 text-text-secondary">
          You do not have permission to view this page with your current account
          role.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-border-soft px-6 py-3 text-sm font-semibold text-text-primary transition hover:bg-soft"
          >
            Go to Home
          </Link>

          {user && (
            <Link
              to={getDashboardRouteByRole(user.role)}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Go to My Dashboard
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default UnauthorizedPage;
