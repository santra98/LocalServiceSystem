import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, isAuthenticated, logout, getDashboardRouteByRole } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate("/", { replace: true });
  };

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const dashboardLink =
    isAuthenticated && user ? getDashboardRouteByRole(user.role) : "/login";

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-surface/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-xl font-bold text-text-primary">
            LocalServe
          </Link>

          <nav className="hidden items-center gap-4 md:flex">
            <Link
              to="/"
              className={`text-sm font-medium transition ${
                isActive("/")
                  ? "text-primary"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              Home
            </Link>

            <Link
              to="/services"
              className={`text-sm font-medium transition ${
                isActive("/services")
                  ? "text-primary"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              Services
            </Link>

            {isAuthenticated && user ? (
              <>
                <Link
                  to={dashboardLink}
                  className={`text-sm font-medium transition ${
                    isActive(dashboardLink)
                      ? "text-primary"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  Dashboard
                </Link>

                <span className="inline-flex rounded-full bg-soft px-3 py-1 text-sm font-medium text-text-primary">
                  {user.name}
                </span>

                <span className="inline-flex rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-primary capitalize">
                  {user.role}
                </span>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-xl border border-border-soft px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-soft"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-xl border border-border-soft px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-soft"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover"
                >
                  Sign up
                </Link>
              </>
            )}
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl border border-border-soft px-3 py-2 text-sm font-semibold text-text-primary transition hover:bg-soft md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-border-soft py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={handleMobileNavClick}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                  isActive("/")
                    ? "bg-accent-light text-primary"
                    : "text-text-primary hover:bg-soft"
                }`}
              >
                Home
              </Link>

              <Link
                to="/services"
                onClick={handleMobileNavClick}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                  isActive("/services")
                    ? "bg-accent-light text-primary"
                    : "text-text-primary hover:bg-soft"
                }`}
              >
                Services
              </Link>

              {isAuthenticated && user ? (
                <>
                  <Link
                    to={dashboardLink}
                    onClick={handleMobileNavClick}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                      isActive(dashboardLink)
                        ? "bg-accent-light text-primary"
                        : "text-text-primary hover:bg-soft"
                    }`}
                  >
                    Dashboard
                  </Link>

                  <div className="rounded-2xl bg-soft px-4 py-3">
                    <p className="text-sm font-semibold text-text-primary">
                      {user.name}
                    </p>
                    <p className="mt-1 text-xs capitalize text-text-secondary">
                      {user.role}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-xl border border-border-soft px-4 py-2 text-left text-sm font-semibold text-text-primary transition hover:bg-soft"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={handleMobileNavClick}
                    className="rounded-xl border border-border-soft px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-soft"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={handleMobileNavClick}
                    className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
