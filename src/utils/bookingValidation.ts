import type { BookingData } from "../types/booking";

export interface BookingErrors {
  service?: string;
  date?: string;
  time?: string;
  phone?: string;
  address?: string;
}

export const validateBooking = (bookingData: BookingData): BookingErrors => {
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
    errors.phone = "Please enter your contact number.";
  } else if (!/^\d{10}$/.test(bookingData.phone.trim())) {
    errors.phone = "Phone number must be 10 digits.";
  }

  if (!bookingData.address.trim()) {
    errors.address = "Please enter the service address.";
  }

  return errors;
};
