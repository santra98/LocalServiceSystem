import { memo } from "react";
import type { NotificationItem } from "../../types/notification";

interface NotificationCardProps {
  notification: NotificationItem;
  onMarkAsRead?: (id: string) => void;
  onMarkAsUnread?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const typeStyles: Record<NotificationItem["type"], string> = {
  booking: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  request: "bg-green-50 text-green-700 ring-1 ring-green-200",
  alert: "bg-red-50 text-red-700 ring-1 ring-red-200",
  system: "bg-soft text-text-primary ring-1 ring-border-soft",
};

const formatNotificationTime = (value: string) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const NotificationCard = ({
  notification,
  onMarkAsRead,
  onMarkAsUnread,
  onDelete,
}: NotificationCardProps) => {
  return (
    <article
      className={`rounded-3xl border p-4 shadow-sm transition hover:shadow-md sm:p-5 ${
        notification.isRead
          ? "border-border-soft bg-surface"
          : "border-primary/20 bg-primary/5"
      }`}
    >
      <div className="space-y-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-text-primary sm:text-lg">
              {notification.title}
            </h3>

            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${typeStyles[notification.type]}`}
            >
              {notification.type}
            </span>

            {!notification.isRead && (
              <span className="inline-flex rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                New
              </span>
            )}
          </div>

          <p className="mt-3 text-sm leading-6 text-text-secondary">
            {notification.message}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Activity time
          </p>
          <p className="mt-1 text-sm font-medium text-text-primary">
            {formatNotificationTime(notification.createdAt)}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {notification.isRead ? (
            <button
              type="button"
              onClick={() => onMarkAsUnread?.(notification.id)}
              className="rounded-xl border border-border-soft px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-soft"
            >
              Mark as unread
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onMarkAsRead?.(notification.id)}
              className="rounded-xl border border-border-soft px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-soft"
            >
              Mark as read
            </button>
          )}

          <button
            type="button"
            onClick={() => onDelete?.(notification.id)}
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default memo(NotificationCard);
