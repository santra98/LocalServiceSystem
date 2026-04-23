import type {
  PlatformBooking,
  PlatformBookingStatus,
} from "../types/platformBooking";

const PLATFORM_BOOKINGS_STORAGE_KEY = "localserve-platform-bookings";

export const getStoredPlatformBookings = (): PlatformBooking[] => {
  const savedBookings = localStorage.getItem(PLATFORM_BOOKINGS_STORAGE_KEY);

  if (!savedBookings) return [];

  try {
    return JSON.parse(savedBookings) as PlatformBooking[];
  } catch {
    localStorage.removeItem(PLATFORM_BOOKINGS_STORAGE_KEY);
    return [];
  }
};

export const saveStoredPlatformBookings = (
  bookings: PlatformBooking[],
): void => {
  localStorage.setItem(PLATFORM_BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
};

export const addPlatformBooking = (booking: PlatformBooking): void => {
  const existingBookings = getStoredPlatformBookings();
  const updatedBookings = [booking, ...existingBookings];
  saveStoredPlatformBookings(updatedBookings);
};

export const updatePlatformBookingStatus = ({
  id,
  status,
}: {
  id: string;
  status: PlatformBookingStatus;
}): void => {
  const existingBookings = getStoredPlatformBookings();

  const updatedBookings = existingBookings.map((booking) =>
    booking.id === id
      ? {
          ...booking,
          status,
        }
      : booking,
  );

  saveStoredPlatformBookings(updatedBookings);
};

export const clearStoredPlatformBookings = (): void => {
  localStorage.removeItem(PLATFORM_BOOKINGS_STORAGE_KEY);
};
