import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookingExtrasSection from "../components/booking/BookingExtrasSection";
import BookingFormSection from "../components/booking/BookingFormSection";
import BookingProviderCard from "../components/booking/BookingProviderCard";
import BookingSummarySidebar from "../components/booking/BookingSummarySidebar";
import { providers } from "../data/providers";
import type { BookingData } from "../types/booking";

const BookingPage = () => {
  const { id } = useParams();
  const provider = providers.find((item) => item.id === Number(id));

  if (!provider) {
    return (
      <div className="rounded-3xl border border-dashed border-border-soft bg-surface px-6 py-12 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-text-primary">
          Provider not found
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          The booking page could not be loaded because the provider does not
          exist.
        </p>
      </div>
    );
  }

  const [bookingData, setBookingData] = useState<BookingData>({
    providerId: provider.id,
    providerName: provider.name,
    service: provider.services[0] || "",
    date: "",
    time: "",
    phone: "",
    address: "",
    paymentMethod: "Cash after service",
    notes: "",
  });

  return (
    <div className="space-y-8 py-6">
      <Link
        to={`/providers/${provider.id}`}
        className="inline-flex text-sm font-medium text-primary transition hover:text-primary-hover"
      >
        ← Back to Provider Details
      </Link>

      <div className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-text-primary">
          Complete your booking
        </h1>
        <p className="mt-2 text-text-secondary">
          Review the provider, fill in your appointment details and confirm the
          booking.
        </p>
      </div>

      <BookingProviderCard provider={provider} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-8">
          <BookingFormSection
            serviceOptions={provider.services}
            bookingData={bookingData}
            setBookingData={setBookingData}
          />

          <BookingExtrasSection
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        </div>

        <BookingSummarySidebar provider={provider} bookingData={bookingData} />
      </div>
    </div>
  );
};

export default BookingPage;
