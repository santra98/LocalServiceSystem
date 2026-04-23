import { providers } from "../data/providers";
import type { BookingData } from "../types/booking";
import type { CustomerBooking } from "../types/customerBooking";

export const mapBookingToCustomerBooking = (
  bookingData: BookingData,
): CustomerBooking => {
  const bookingId = `LS-${Date.now()}`;

  const provider = providers.find((item) => item.id === bookingData.providerId);

  return {
    id: bookingId,
    providerId: bookingData.providerId,
    providerName: bookingData.providerName,
    category: provider?.category || "Service Booking",
    service: bookingData.service,
    date: bookingData.date,
    time: bookingData.time,
    address: bookingData.address,
    paymentMethod: bookingData.paymentMethod,
    status: "pending",
    price: provider?.startingPrice || 0,
  };
};
