import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import type { BookingData } from "../types/booking";
import {
  addCustomerBooking,
  getStoredCustomerBookings,
} from "../utils/customerBookingStorage";
import { mapBookingToCustomerBooking } from "../utils/mapBookingToCustomerBooking";
import {
  addProviderRequest,
  getStoredProviderRequests,
} from "../utils/providerRequestStorage";
import { mapBookingToProviderRequest } from "../utils/mapBookingToProviderRequest";

const BookingConfirmationPage = () => {
  const location = useLocation();
  const bookingData = location.state as BookingData | undefined;

  useEffect(() => {
    if (!bookingData) return;

    const existingCustomerBookings = getStoredCustomerBookings();

    const customerBookingExists = existingCustomerBookings.some(
      (booking) =>
        booking.providerId === bookingData.providerId &&
        booking.service === bookingData.service &&
        booking.date === bookingData.date &&
        booking.time === bookingData.time &&
        booking.address === bookingData.address,
    );

    if (!customerBookingExists) {
      const mappedCustomerBooking = mapBookingToCustomerBooking(bookingData);
      addCustomerBooking(mappedCustomerBooking);
    }

    const existingProviderRequests = getStoredProviderRequests();

    const providerRequestExists = existingProviderRequests.some(
      (request) =>
        request.service === bookingData.service &&
        request.date === bookingData.date &&
        request.time === bookingData.time &&
        request.address === bookingData.address &&
        request.phone === bookingData.phone,
    );

    if (!providerRequestExists) {
      const mappedProviderRequest = mapBookingToProviderRequest(bookingData);
      addProviderRequest(mappedProviderRequest);
    }

    if (bookingData.providerId) {
      localStorage.removeItem(`booking-${bookingData.providerId}`);
    }
  }, [bookingData]);

  if (!bookingData) {
    return (
      <div className="py-6">
        <section className="mx-auto max-w-3xl rounded-xl border border-border-soft bg-surface px-6 py-12 text-center shadow-sm md:px-10">
          <h1 className="text-3xl font-bold text-text-primary">
            No booking data found
          </h1>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            Please complete a booking first before viewing the confirmation
            page.
          </p>

          <div className="mt-8">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Browse Services
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-6">
      <section className="mx-auto max-w-3xl rounded-xl border border-border-soft bg-surface px-6 py-12 text-center shadow-sm md:px-10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-light text-3xl">
          ✅
        </div>

        <h1 className="mt-6 text-3xl font-bold text-text-primary">
          Booking confirmed
        </h1>

        <p className="mt-4 text-base leading-7 text-text-secondary">
          Your service request has been successfully placed. The provider will
          review the booking details and contact you if needed.
        </p>

        <div className="mt-8 rounded-2xl bg-soft px-5 py-4 text-left">
          <p className="text-sm font-semibold text-text-primary">
            Booking details
          </p>

          <ul className="mt-3 space-y-2 text-sm text-text-secondary">
            <li>• Provider: {bookingData.providerName}</li>
            <li>• Service: {bookingData.service}</li>
            <li>• Date: {bookingData.date}</li>
            <li>• Time: {bookingData.time}</li>
            <li>• Phone: {bookingData.phone}</li>
            <li>• Payment: {bookingData.paymentMethod}</li>
            <li>• Address: {bookingData.address}</li>
            {bookingData.notes && <li>• Notes: {bookingData.notes}</li>}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/customer/dashboard"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            View My Bookings
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-xl border border-border-soft px-6 py-3 text-sm font-semibold text-text-primary transition hover:bg-soft"
          >
            Browse More Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BookingConfirmationPage;
