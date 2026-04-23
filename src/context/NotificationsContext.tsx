import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getStoredPlatformBookings } from "../utils/platformBookingStorage";
import {
  getStoredNotifications,
  saveNotifications,
} from "../utils/notificationStorage";
import { useAuth } from "./AuthContext";
import type { NotificationItem, NotificationType } from "../types/notification";

interface NotificationsContextValue {
  notifications: NotificationItem[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  refreshNotifications: () => void;
}

const NotificationsContext = createContext<
  NotificationsContextValue | undefined
>(undefined);

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsProvider = ({
  children,
}: NotificationsProviderProps) => {
  const { user, isAuthenticated } = useAuth();
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const generateNotifications = (): NotificationItem[] => {
    if (!user) return [];

    const platformBookings = getStoredPlatformBookings();

    const bookingNotifications: NotificationItem[] = platformBookings.map(
      (booking) => {
        const notificationType: NotificationType =
          user.role === "admin"
            ? "alert"
            : user.role === "provider"
              ? "request"
              : "booking";

        return {
          id: `booking-${booking.id}`,
          title:
            booking.status === "pending"
              ? "New booking created"
              : booking.status === "confirmed"
                ? "Booking confirmed"
                : booking.status === "cancelled"
                  ? "Booking cancelled"
                  : "Booking updated",
          message:
            user.role === "provider"
              ? `${booking.customerName || "A customer"} activity for ${booking.service} on ${booking.date} at ${booking.time}.`
              : user.role === "admin"
                ? `${booking.service} booking with ${booking.providerName} is currently marked as ${booking.status}.`
                : `Your ${booking.service} booking with ${booking.providerName} is currently marked as ${booking.status}.`,
          createdAt: booking.createdAt,
          type: notificationType,
          isRead:
            booking.status === "completed" || booking.status === "cancelled",
        };
      },
    );

    const roleSpecificMocks: NotificationItem[] =
      user.role === "admin"
        ? [
            {
              id: "admin-1",
              title: "Provider approval pending",
              message:
                "A newly submitted provider profile is waiting for admin review.",
              createdAt: "2026-04-23T10:15:00",
              type: "alert",
              isRead: false,
            },
            {
              id: "admin-2",
              title: "Reported issue received",
              message:
                "A new service-quality issue was reported and requires attention.",
              createdAt: "2026-04-22T17:40:00",
              type: "alert",
              isRead: true,
            },
          ]
        : user.role === "provider"
          ? [
              {
                id: "provider-1",
                title: "Schedule reminder",
                message:
                  "You have upcoming confirmed work scheduled in your dashboard.",
                createdAt: "2026-04-23T09:00:00",
                type: "system",
                isRead: false,
              },
            ]
          : [
              {
                id: "customer-1",
                title: "Welcome to LocalServe",
                message:
                  "You can now manage bookings, provider activity, and account settings from one place.",
                createdAt: "2026-04-23T08:30:00",
                type: "system",
                isRead: true,
              },
            ];

    return [...roleSpecificMocks, ...bookingNotifications].sort((a, b) => {
      const first = new Date(a.createdAt).getTime();
      const second = new Date(b.createdAt).getTime();
      return second - first;
    });
  };

  const refreshNotifications = () => {
    if (!isAuthenticated || !user) {
      setNotifications([]);
      return;
    }

    const stored = getStoredNotifications();

    if (stored.length > 0) {
      setNotifications(stored);
      return;
    }

    const generated = generateNotifications();
    setNotifications(generated);
    saveNotifications(generated);
  };

  useEffect(() => {
    refreshNotifications();
  }, [isAuthenticated, user?.role]);

  const markAsRead = (id: string) => {
    const updated = notifications.map((item) =>
      item.id === id ? { ...item, isRead: true } : item,
    );

    setNotifications(updated);
    saveNotifications(updated);
  };

  const markAllAsRead = () => {
    const updated = notifications.map((item) => ({
      ...item,
      isRead: true,
    }));

    setNotifications(updated);
    saveNotifications(updated);
  };

  const unreadCount = useMemo(
    () => notifications.filter((item) => !item.isRead).length,
    [notifications],
  );

  const value = useMemo(
    () => ({
      notifications,
      unreadCount,
      markAsRead,
      markAllAsRead,
      refreshNotifications,
    }),
    [notifications, unreadCount],
  );

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider",
    );
  }

  return context;
};
