import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FormInput from "../components/ui/FormInput";
import FormSelect from "../components/ui/FormSelect";
import { useAuth } from "../context/AuthContext";
import type { UserRole } from "../types/auth";

const SignupPage = () => {
  const { signup, isAuthenticated, user, getDashboardRouteByRole } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<UserRole>("customer");
  const [password, setPassword] = useState("");

  if (isAuthenticated && user) {
    return <Navigate to={getDashboardRouteByRole(user.role)} replace />;
  }

  const handleSignup = () => {
    if (!fullName.trim() || !email.trim() || !password.trim()) return;

    signup({
      name: fullName,
      email,
      role,
    });

    navigate(getDashboardRouteByRole(role), { replace: true });
  };

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Create account
      </p>
      <h1 className="mt-3 text-3xl font-bold text-text-primary">Sign up</h1>
      <p className="mt-2 text-sm leading-6 text-text-secondary">
        Join as a customer, provider, or platform admin to access role-specific
        features.
      </p>

      <div className="mt-8 space-y-5">
        <FormInput
          id="signupName"
          label="Full name"
          value={fullName}
          placeholder="Enter your full name"
          onChange={setFullName}
        />

        <FormInput
          id="signupEmail"
          label="Email address"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={setEmail}
        />

        <FormSelect
          id="signupRole"
          label="Role"
          value={role}
          onChange={(value) => setRole(value as UserRole)}
          options={[
            { label: "Customer", value: "customer" },
            { label: "Provider", value: "provider" },
            { label: "Admin", value: "admin" },
          ]}
        />

        <FormInput
          id="signupPassword"
          label="Password"
          type="password"
          value={password}
          placeholder="Create a password"
          onChange={setPassword}
        />
      </div>

      <button
        type="button"
        onClick={handleSignup}
        className="mt-8 w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
      >
        Create account
      </button>

      <p className="mt-6 text-center text-sm text-text-secondary">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-primary transition hover:text-primary-hover"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
