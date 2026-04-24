import type { NotificationItem } from "../../types/notification";
import EmptyState from "../ui/EmptyState";
import SectionHeader from "../ui/SectionHeader";
import NotificationCard from "./NotificationCard";

interface NotificationsSectionProps {
  title: string;
  description: string;
  items: NotificationItem[];
  emptyMessage: string;
  onMarkAsRead?: (id: string) => void;
  onMarkAsUnread?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const NotificationsSection = ({
  title,
  description,
  items,
  emptyMessage,
  onMarkAsRead,
  onMarkAsUnread,
  onDelete,
}: NotificationsSectionProps) => {
  return (
    <section className="space-y-5">
      <SectionHeader title={title} description={description} />

      {items.length === 0 ? (
        <EmptyState title="Nothing here yet" description={emptyMessage} />
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <NotificationCard
              key={item.id}
              notification={item}
              onMarkAsRead={onMarkAsRead}
              onMarkAsUnread={onMarkAsUnread}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default NotificationsSection;
