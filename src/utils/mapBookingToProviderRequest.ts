import { providers } from "../data/providers";
import type { BookingData } from "../types/booking";
import type { ProviderBookingRequest } from "../types/providerDashboard";

export const mapBookingToProviderRequest = (
  bookingData: BookingData,
): ProviderBookingRequest => {
  const requestId = `PR-${Date.now()}`;

  const provider = providers.find((item) => item.id === bookingData.providerId);

  return {
    id: requestId,
    customerName: "New Customer",
    service: bookingData.service,
    date: bookingData.date,
    time: bookingData.time,
    address: bookingData.address,
    paymentMethod: bookingData.paymentMethod,
    status: "pending",
    price: provider?.startingPrice || 0,
    phone: bookingData.phone,
  };
};
