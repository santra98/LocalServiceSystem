import type { NotificationItem } from "../../types/notification";

interface NotificationCardProps {
  notification: NotificationItem;
  onClick?: (id: string) => void;
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

const NotificationCard = ({ notification, onClick }: NotificationCardProps) => {
  return (
    <article
      onClick={() => onClick?.(notification.id)}
      className={`cursor-pointer rounded-3xl border p-4 shadow-sm transition hover:shadow-md sm:p-5 ${
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
      </div>
    </article>
  );
};

export default NotificationCard;
