import type { NotificationItem } from "../types/notification";

const STORAGE_KEY = "localserve-notifications";

export const getStoredNotifications = (): NotificationItem[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const saveNotifications = (items: NotificationItem[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const markNotificationAsRead = (id: string) => {
  const items = getStoredNotifications();

  const updated = items.map((item) =>
    item.id === id ? { ...item, isRead: true } : item,
  );

  saveNotifications(updated);
  return updated;
};

export const markAllNotificationsAsRead = () => {
  const items = getStoredNotifications();

  const updated = items.map((item) => ({
    ...item,
    isRead: true,
  }));

  saveNotifications(updated);
  return updated;
};
