import type {
  PlatformBooking,
  PlatformBookingStatus,
} from "../types/platformBooking";
import {
  addPlatformBooking,
  clearStoredPlatformBookings,
  getStoredPlatformBookings,
  saveStoredPlatformBookings,
  updatePlatformBookingStatus,
} from "../utils/platformBookingStorage";

export const bookingService = {
  getAll(): PlatformBooking[] {
    return getStoredPlatformBookings();
  },

  create(booking: PlatformBooking): PlatformBooking[] {
    addPlatformBooking(booking);
    return getStoredPlatformBookings();
  },

  updateStatus(id: string, status: PlatformBookingStatus): PlatformBooking[] {
    updatePlatformBookingStatus({ id, status });
    return getStoredPlatformBookings();
  },

  replaceAll(bookings: PlatformBooking[]): PlatformBooking[] {
    saveStoredPlatformBookings(bookings);
    return getStoredPlatformBookings();
  },

  clearAll(): void {
    clearStoredPlatformBookings();
  },
};
