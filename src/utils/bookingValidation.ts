import type { BookingData } from "../types/booking";

export interface BookingErrors {
  service?: string;
  date?: string;
  time?: string;
  phone?: string;
  address?: string;
  paymentMethod?: string;
}

export const validateBookingForm = (
  bookingData: BookingData,
): BookingErrors => {
  const errors: BookingErrors = {};

  if (!bookingData.service.trim()) {
    errors.service = "Please select a service.";
  }

  if (!bookingData.date.trim()) {
    errors.date = "Please select a booking date.";
  }

  if (!bookingData.time.trim()) {
    errors.time = "Please select a booking time.";
  }

  if (!bookingData.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (bookingData.phone.trim().length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!bookingData.address.trim()) {
    errors.address = "Please enter your address.";
  }

  if (!bookingData.paymentMethod.trim()) {
    errors.paymentMethod = "Please select a payment method.";
  }

  return errors;
};
