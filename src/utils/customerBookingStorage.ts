import type { BookingStatus, CustomerBooking } from "../types/customerBooking";

const CUSTOMER_BOOKINGS_STORAGE_KEY = "localserve-customer-bookings";

export const getStoredCustomerBookings = (): CustomerBooking[] => {
  const savedBookings = localStorage.getItem(CUSTOMER_BOOKINGS_STORAGE_KEY);

  if (!savedBookings) return [];

  try {
    return JSON.parse(savedBookings) as CustomerBooking[];
  } catch {
    localStorage.removeItem(CUSTOMER_BOOKINGS_STORAGE_KEY);
    return [];
  }
};

export const saveStoredCustomerBookings = (
  bookings: CustomerBooking[],
): void => {
  localStorage.setItem(CUSTOMER_BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
};

export const addCustomerBooking = (booking: CustomerBooking): void => {
  const existingBookings = getStoredCustomerBookings();
  const updatedBookings = [booking, ...existingBookings];
  saveStoredCustomerBookings(updatedBookings);
};

export const updateStoredCustomerBookingStatus = ({
  providerName,
  service,
  date,
  time,
  address,
  status,
}: {
  providerName: string;
  service: string;
  date: string;
  time: string;
  address: string;
  status: BookingStatus;
}): void => {
  const existingBookings = getStoredCustomerBookings();

  const updatedBookings = existingBookings.map((booking) => {
    const isMatch =
      booking.providerName === providerName &&
      booking.service === service &&
      booking.date === date &&
      booking.time === time &&
      booking.address === address;

    if (!isMatch) return booking;

    return {
      ...booking,
      status,
    };
  });

  saveStoredCustomerBookings(updatedBookings);
};

export const clearStoredCustomerBookings = (): void => {
  localStorage.removeItem(CUSTOMER_BOOKINGS_STORAGE_KEY);
};
