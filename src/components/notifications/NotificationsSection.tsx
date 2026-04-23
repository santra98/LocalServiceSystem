import type { NotificationItem } from "../../types/notification";
import EmptyState from "../ui/EmptyState";
import SectionHeader from "../ui/SectionHeader";
import NotificationCard from "./NotificationCard";

interface NotificationsSectionProps {
  title: string;
  description: string;
  items: NotificationItem[];
  emptyMessage: string;
  onItemClick?: (id: string) => void;
}

const NotificationsSection = ({
  title,
  description,
  items,
  emptyMessage,
  onItemClick,
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
              onClick={onItemClick}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default NotificationsSection;
