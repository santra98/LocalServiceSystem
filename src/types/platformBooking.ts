export type PlatformBookingStatus =
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled";

export interface PlatformBooking {
  id: string;
  providerId: number;
  providerName: string;
  providerCategory: string;
  customerName: string;
  customerEmail?: string;
  service: string;
  date: string;
  time: string;
  address: string;
  phone: string;
  paymentMethod: string;
  notes: string;
  status: PlatformBookingStatus;
  price: number;
  createdAt: string;
}
