import type { CustomerBooking } from "../../types/customerBooking";
import StatCard from "../ui/StatCard";

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
      hint: "Pending and confirmed services",
    },
    {
      label: "Completed services",
      value: completedCount,
      hint: "Finished booking history",
    },
    {
      label: "Cancelled bookings",
      value: cancelledCount,
      hint: "Bookings that were cancelled",
    },
    {
      label: "Total spent",
      value: `₹${totalSpent}`,
      hint: "Across completed bookings",
    },
  ];

  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          hint={stat.hint}
        />
      ))}
    </section>
  );
};

export default CustomerStats;
