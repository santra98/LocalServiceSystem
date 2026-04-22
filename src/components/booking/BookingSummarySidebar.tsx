import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { BookingData } from "../../types/booking";
import type { Provider } from "../../types/provider";
import type { BookingErrors } from "../../utils/bookingValidation";
import { validateBooking } from "../../utils/bookingValidation";

interface BookingSummarySidebarProps {
  provider: Provider;
  bookingData: BookingData;
  errors: BookingErrors;
  setErrors: React.Dispatch<React.SetStateAction<BookingErrors>>;
}

const BookingSummarySidebar = ({
  provider,
  bookingData,
  errors,
  setErrors,
}: BookingSummarySidebarProps) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasErrors = Object.keys(errors).length > 0;

  const handleConfirmBooking = () => {
    const validationErrors = validateBooking(bookingData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0 || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      navigate("/booking/confirmation", {
        state: bookingData,
      });
    }, 800);
  };

  return (
    <aside className="sticky top-24 rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Booking summary</h2>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Provider
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            {provider.name}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Selected Service
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            {bookingData.service || "Not selected"}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Date & Time
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            {bookingData.date && bookingData.time
              ? `${bookingData.date} • ${bookingData.time}`
              : "Not selected"}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Payment
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            {bookingData.paymentMethod}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Starting Price
          </p>
          <p className="mt-1 font-semibold text-text-primary">
            ₹{provider.startingPrice}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <button
          type="button"
          onClick={handleConfirmBooking}
          disabled={isSubmitting}
          className={`w-full rounded-xl px-5 py-3 text-sm font-semibold text-white transition ${
            isSubmitting
              ? "cursor-not-allowed bg-gray-400"
              : "bg-primary hover:bg-primary-hover"
          }`}
        >
          {isSubmitting ? "Processing..." : "Confirm Booking"}
        </button>

        <Link
          to={`/providers/${provider.id}`}
          className="inline-flex w-full items-center justify-center rounded-xl border border-border-soft px-5 py-3 text-sm font-semibold text-text-primary transition hover:bg-soft"
        >
          Back to Provider
        </Link>
      </div>

      {hasErrors && (
        <p className="mt-4 text-xs leading-5 text-red-600">
          Please fix the highlighted fields before confirming.
        </p>
      )}

      {!hasErrors && (
        <p className="mt-4 text-xs leading-5 text-text-secondary">
          Review your details and confirm the booking.
        </p>
      )}
    </aside>
  );
};

export default BookingSummarySidebar;
