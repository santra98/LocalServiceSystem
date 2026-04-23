import { Link } from "react-router-dom";
import { useState } from "react";
import FormInput from "../components/ui/FormInput";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Account recovery
      </p>
      <h1 className="mt-3 text-3xl font-bold text-text-primary">
        Forgot password
      </h1>
      <p className="mt-2 text-sm leading-6 text-text-secondary">
        Enter your email and we’ll send password reset instructions.
      </p>

      <div className="mt-8">
        <FormInput
          id="forgotPasswordEmail"
          label="Email address"
          type="email"
          value={email}
          placeholder="Enter your registered email"
          onChange={setEmail}
        />
      </div>

      <button
        type="button"
        className="mt-8 w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
      >
        Send reset link
      </button>

      <p className="mt-6 text-center text-sm text-text-secondary">
        Remembered your password?{" "}
        <Link
          to="/login"
          className="font-semibold text-primary transition hover:text-primary-hover"
        >
          Back to login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
