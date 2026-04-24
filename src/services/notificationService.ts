import type { NotificationItem } from "../types/notification";
import {
  getStoredNotifications,
  saveNotifications,
} from "../utils/notificationStorage";

export const notificationService = {
  getAll(): NotificationItem[] {
    return getStoredNotifications();
  },

  saveAll(notifications: NotificationItem[]): NotificationItem[] {
    saveNotifications(notifications);
    return getStoredNotifications();
  },

  create(notification: NotificationItem): NotificationItem[] {
    const current = getStoredNotifications();
    const updated = [notification, ...current];

    saveNotifications(updated);
    return updated;
  },

  markAsRead(id: string): NotificationItem[] {
    const current = getStoredNotifications();

    const updated = current.map((item) =>
      item.id === id ? { ...item, isRead: true } : item,
    );

    saveNotifications(updated);
    return updated;
  },

  markAsUnread(id: string): NotificationItem[] {
    const current = getStoredNotifications();

    const updated = current.map((item) =>
      item.id === id ? { ...item, isRead: false } : item,
    );

    saveNotifications(updated);
    return updated;
  },

  markAllAsRead(): NotificationItem[] {
    const current = getStoredNotifications();

    const updated = current.map((item) => ({
      ...item,
      isRead: true,
    }));

    saveNotifications(updated);
    return updated;
  },

  delete(id: string): NotificationItem[] {
    const current = getStoredNotifications();
    const updated = current.filter((item) => item.id !== id);

    saveNotifications(updated);
    return updated;
  },

  clearAll(): NotificationItem[] {
    saveNotifications([]);
    return [];
  },
};
