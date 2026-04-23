import type { PlatformBooking } from "../types/platformBooking";
import type { ProviderBookingRequest } from "../types/providerDashboard";

export const mapPlatformBookingToProviderRequest = (
  booking: PlatformBooking,
): ProviderBookingRequest => {
  return {
    id: booking.id,
    customerName: booking.customerName,
    service: booking.service,
    date: booking.date,
    time: booking.time,
    address: booking.address,
    paymentMethod: booking.paymentMethod,
    status: booking.status,
    price: booking.price,
    phone: booking.phone,
  };
};
