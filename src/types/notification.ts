export type NotificationType = "booking" | "request" | "alert" | "system";

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  type: NotificationType;
  isRead: boolean;
}
