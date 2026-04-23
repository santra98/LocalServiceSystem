import { useMemo } from "react";
import InfoChip from "../components/ui/InfoChip";
import NotificationsSection from "../components/notifications/NotificationsSection";
import { useAuth } from "../context/AuthContext";
import { useNotifications } from "../context/NotificationsContext";

const NotificationsPage = () => {
  const { user, isAuthenticated } = useAuth();
  const { notifications, markAsRead, markAllAsRead } = useNotifications();

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
                onClick={markAllAsRead}
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
          onItemClick={markAsRead}
        />

        <NotificationsSection
          title="Earlier activity"
          description="Previously viewed or lower-priority activity."
          items={readNotifications}
          emptyMessage="No earlier activity is available."
          onItemClick={markAsRead}
        />
      </div>
    </div>
  );
};

export default NotificationsPage;
