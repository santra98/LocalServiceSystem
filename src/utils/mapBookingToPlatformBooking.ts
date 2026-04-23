import { providers } from "../data/providers";
import type { BookingData } from "../types/booking";
import type { PlatformBooking } from "../types/platformBooking";

export const mapBookingToPlatformBooking = (
  bookingData: BookingData,
): PlatformBooking => {
  const provider = providers.find((item) => item.id === bookingData.providerId);

  return {
    id: `PB-${Date.now()}`,
    providerId: bookingData.providerId,
    providerName: bookingData.providerName,
    providerCategory: provider?.category || "Service",
    customerName: "New Customer",
    customerEmail: "",
    service: bookingData.service,
    date: bookingData.date,
    time: bookingData.time,
    address: bookingData.address,
    phone: bookingData.phone,
    paymentMethod: bookingData.paymentMethod,
    notes: bookingData.notes,
    status: "pending",
    price: provider?.startingPrice || 0,
    createdAt: new Date().toISOString(),
  };
};
