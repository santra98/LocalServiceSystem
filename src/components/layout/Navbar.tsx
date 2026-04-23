import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, isAuthenticated, logout, getDashboardRouteByRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header className="border-b border-border-soft bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-text-primary">
          LocalServe
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-text-secondary">
          <Link to="/" className="transition hover:text-primary">
            Home
          </Link>

          <Link to="/services" className="transition hover:text-primary">
            Services
          </Link>

          {isAuthenticated && user ? (
            <>
              <Link
                to={getDashboardRouteByRole(user.role)}
                className="transition hover:text-primary"
              >
                Dashboard
              </Link>

              <span className="hidden rounded-full bg-soft px-3 py-1 text-text-primary md:inline-flex">
                {user.name}
              </span>

              <span className="hidden rounded-full bg-accent-light px-3 py-1 text-primary sm:inline-flex">
                {user.role}
              </span>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl border border-border-soft px-4 py-2 text-text-primary transition hover:bg-soft"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-xl border border-border-soft px-4 py-2 text-text-primary transition hover:bg-soft"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-xl bg-primary px-4 py-2 text-white transition hover:bg-primary-hover"
              >
                Sign up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
