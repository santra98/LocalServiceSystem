import type { CustomerBooking } from "../../types/customerBooking";

interface CustomerStatsProps {
  bookings: CustomerBooking[];
}

const CustomerStats = ({ bookings }: CustomerStatsProps) => {
  const upcomingCount = bookings.filter(
    (booking) => booking.status === "pending" || booking.status === "confirmed",
  ).length;

  const completedCount = bookings.filter(
    (booking) => booking.status === "completed",
  ).length;

  const cancelledCount = bookings.filter(
    (booking) => booking.status === "cancelled",
  ).length;

  const totalSpent = bookings
    .filter((booking) => booking.status === "completed")
    .reduce((sum, booking) => sum + booking.price, 0);

  const stats = [
    {
      label: "Upcoming bookings",
      value: upcomingCount,
    },
    {
      label: "Completed services",
      value: completedCount,
    },
    {
      label: "Cancelled bookings",
      value: cancelledCount,
    },
    {
      label: "Total spent",
      value: `₹${totalSpent}`,
    },
  ];

  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="rounded-xl border border-border-soft bg-surface p-5 shadow-sm"
        >
          <p className="text-sm text-text-secondary">{stat.label}</p>
          <h2 className="mt-3 text-3xl font-bold text-text-primary">
            {stat.value}
          </h2>
        </article>
      ))}
    </section>
  );
};

export default CustomerStats;
