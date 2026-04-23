import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import FormInput from "../components/ui/FormInput";
import FormSelect from "../components/ui/FormSelect";
import { useAuth } from "../context/AuthContext";
import type { UserRole } from "../types/auth";

const LoginPage = () => {
  const { login, isAuthenticated, user, getDashboardRouteByRole } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("customer");

  const redirectPath =
    (location.state as { from?: string } | undefined)?.from ||
    getDashboardRouteByRole(role);

  if (isAuthenticated && user) {
    return <Navigate to={getDashboardRouteByRole(user.role)} replace />;
  }

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) return;

    login({
      name: email.split("@")[0] || "User",
      email,
      role,
    });

    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Welcome back
      </p>
      <h1 className="mt-3 text-3xl font-bold text-text-primary">Login</h1>
      <p className="mt-2 text-sm leading-6 text-text-secondary">
        Sign in to continue managing bookings and dashboard activity.
      </p>

      <div className="mt-8 space-y-5">
        <FormInput
          id="loginEmail"
          label="Email address"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={setEmail}
        />

        <FormInput
          id="loginPassword"
          label="Password"
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={setPassword}
        />

        <FormSelect
          id="loginRole"
          label="Login as"
          value={role}
          onChange={(value) => setRole(value as UserRole)}
          options={[
            { label: "Customer", value: "customer" },
            { label: "Provider", value: "provider" },
            { label: "Admin", value: "admin" },
          ]}
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-sm text-text-secondary">
          <input type="checkbox" className="rounded" />
          Remember me
        </label>

        <Link
          to="/forgot-password"
          className="text-sm font-medium text-primary transition hover:text-primary-hover"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="button"
        onClick={handleLogin}
        className="mt-8 w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
      >
        Login
      </button>

      <p className="mt-6 text-center text-sm text-text-secondary">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="font-semibold text-primary transition hover:text-primary-hover"
        >
          Create one
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
