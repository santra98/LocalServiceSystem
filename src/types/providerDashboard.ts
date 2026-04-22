export type ProviderRequestStatus =
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled";

export interface ProviderBookingRequest {
  id: string;
  customerName: string;
  service: string;
  date: string;
  time: string;
  address: string;
  paymentMethod: string;
  status: ProviderRequestStatus;
  price: number;
  phone: string;
}
