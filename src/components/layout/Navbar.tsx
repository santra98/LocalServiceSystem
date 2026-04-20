import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b border-border-soft bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-text-primary">
          LocalServe
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-text-secondary">
          <Link to="/" className="transition hover:text-primary">
            Home
          </Link>
          <Link to="/services" className="transition hover:text-primary">
            Services
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
