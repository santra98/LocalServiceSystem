import type { CustomerBooking } from "../types/customerBooking";
import type { PlatformBooking } from "../types/platformBooking";

export const mapPlatformBookingToCustomerBooking = (
  booking: PlatformBooking,
): CustomerBooking => {
  return {
    id: booking.id,
    providerId: booking.providerId,
    providerName: booking.providerName,
    category: booking.providerCategory,
    service: booking.service,
    date: booking.date,
    time: booking.time,
    address: booking.address,
    paymentMethod: booking.paymentMethod,
    status: booking.status,
    price: booking.price,
  };
};
