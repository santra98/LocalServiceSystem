export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

export interface CustomerBooking {
  id: string;
  providerId: number;
  providerName: string;
  category: string;
  service: string;
  date: string;
  time: string;
  address: string;
  paymentMethod: string;
  status: BookingStatus;
  price: number;
}
