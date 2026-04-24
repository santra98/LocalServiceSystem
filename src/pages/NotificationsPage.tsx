import { useEffect, useMemo, useState } from "react";
import InfoChip from "../components/ui/InfoChip";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import NotificationsSection from "../components/notifications/NotificationsSection";
import { useAuth } from "../context/AuthContext";
import { useNotifications } from "../context/NotificationsContext";
import Skeleton from "../components/ui/Skeleton";

const NotificationsPage = () => {
  const { user, isAuthenticated } = useAuth();

  const {
    notifications,
    markAsRead,
    markAsUnread,
    markAllAsRead,
    deleteNotification,
    clearAllNotifications,
  } = useNotifications();

  const [notificationToDelete, setNotificationToDelete] = useState<
    string | null
  >(null);
  const [isClearAllOpen, setIsClearAllOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

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

  const handleConfirmDelete = () => {
    if (!notificationToDelete) return;

    deleteNotification(notificationToDelete);
    setNotificationToDelete(null);
  };

  const handleConfirmClearAll = () => {
    clearAllNotifications();
    setIsClearAllOpen(false);
  };

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 py-6 space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  return (
    <>
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

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <InfoChip label={user.role} />

                <button
                  type="button"
                  onClick={markAllAsRead}
                  disabled={unreadNotifications.length === 0}
                  className="rounded-xl border border-border-soft px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-soft disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Mark all as read
                </button>

                <button
                  type="button"
                  onClick={() => setIsClearAllOpen(true)}
                  disabled={notifications.length === 0}
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Clear all
                </button>
              </div>
            </div>
          </section>

          <NotificationsSection
            title="Unread activity"
            description="Recent updates that may need your attention."
            items={unreadNotifications}
            emptyMessage="You do not have any unread activity right now."
            onMarkAsRead={markAsRead}
            onMarkAsUnread={markAsUnread}
            onDelete={setNotificationToDelete}
          />

          <NotificationsSection
            title="Earlier activity"
            description="Previously viewed or lower-priority activity."
            items={readNotifications}
            emptyMessage="No earlier activity is available."
            onMarkAsRead={markAsRead}
            onMarkAsUnread={markAsUnread}
            onDelete={setNotificationToDelete}
          />
        </div>
      </div>

      <ConfirmDialog
        isOpen={!!notificationToDelete}
        title="Delete notification?"
        message="This notification will be removed from your activity center. This action cannot be undone."
        confirmLabel="Yes, delete"
        cancelLabel="Keep notification"
        confirmVariant="danger"
        onConfirm={handleConfirmDelete}
        onCancel={() => setNotificationToDelete(null)}
      />

      <ConfirmDialog
        isOpen={isClearAllOpen}
        title="Clear all notifications?"
        message="This will remove all notifications from your activity center. This action cannot be undone."
        confirmLabel="Yes, clear all"
        cancelLabel="Cancel"
        confirmVariant="danger"
        onConfirm={handleConfirmClearAll}
        onCancel={() => setIsClearAllOpen(false)}
      />
    </>
  );
};

export default NotificationsPage;
