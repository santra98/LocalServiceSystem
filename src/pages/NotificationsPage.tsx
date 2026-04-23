import { useEffect, useMemo, useState } from "react";
import InfoChip from "../components/ui/InfoChip";
import NotificationsSection from "../components/notifications/NotificationsSection";
import { useAuth } from "../context/AuthContext";
import { getStoredPlatformBookings } from "../utils/platformBookingStorage";
import {
  getStoredNotifications,
  saveNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from "../utils/notificationStorage";
import type { NotificationItem, NotificationType } from "../types/notification";

const NotificationsPage = () => {
  const { user, isAuthenticated } = useAuth();
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const generateNotifications = (): NotificationItem[] => {
    const platformBookings = getStoredPlatformBookings();

    const bookingNotifications: NotificationItem[] = platformBookings.map(
      (booking) => {
        const notificationType: NotificationType =
          user?.role === "admin"
            ? "alert"
            : user?.role === "provider"
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
            user?.role === "provider"
              ? `${booking.customerName || "A customer"} activity for ${booking.service} on ${booking.date} at ${booking.time}.`
              : user?.role === "admin"
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
      user?.role === "admin"
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
        : user?.role === "provider"
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

  useEffect(() => {
    if (!isAuthenticated || !user) return;

    const stored = getStoredNotifications();

    if (stored.length > 0) {
      setNotifications(stored);
      return;
    }

    const generated = generateNotifications();
    setNotifications(generated);
    saveNotifications(generated);
  }, [isAuthenticated, user?.role]);

  const handleMarkAsRead = (id: string) => {
    const updated = markNotificationAsRead(id);
    setNotifications(updated);
  };

  const handleMarkAllAsRead = () => {
    const updated = markAllNotificationsAsRead();
    setNotifications(updated);
  };

  const unreadNotifications = useMemo(
    () => notifications.filter((item) => !item.isRead),
    [notifications],
  );

  const readNotifications = useMemo(
    () => notifications.filter((item) => item.isRead),
    [notifications],
  );

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
      <div className="space-y-6 sm:space-y-8">
        <section className="rounded-3xl border border-border-soft bg-surface p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
                Notifications
              </h1>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Stay updated with recent account and platform activity.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <InfoChip label={user.role} />

              <button
                type="button"
                onClick={handleMarkAllAsRead}
                className="rounded-xl border border-border-soft px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-soft"
              >
                Mark all as read
              </button>
            </div>
          </div>
        </section>

        <NotificationsSection
          title="Unread activity"
          description="Recent updates that may need your attention."
          items={unreadNotifications}
          emptyMessage="You do not have any unread activity right now."
          onItemClick={handleMarkAsRead}
        />

        <NotificationsSection
          title="Earlier activity"
          description="Previously viewed or lower-priority activity."
          items={readNotifications}
          emptyMessage="No earlier activity is available."
          onItemClick={handleMarkAsRead}
        />
      </div>
    </div>
  );
};

export default NotificationsPage;
