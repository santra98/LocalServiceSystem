import type {
  AdminRecentBooking,
  AdminReportedIssue,
  PendingProviderApproval,
} from "../../types/adminDashboard";
import StatCard from "../ui/StatCard";

interface AdminStatsProps {
  approvals: PendingProviderApproval[];
  recentBookings: AdminRecentBooking[];
  issues: AdminReportedIssue[];
}

const AdminStats = ({ approvals, recentBookings, issues }: AdminStatsProps) => {
  const pendingApprovals = approvals.length;
  const activeIssues = issues.filter(
    (issue) => issue.status !== "resolved",
  ).length;
  const completedBookings = recentBookings.filter(
    (booking) => booking.status === "completed",
  ).length;
  const bookingValue = recentBookings.reduce(
    (sum, booking) => sum + booking.amount,
    0,
  );

  const stats = [
    {
      label: "Pending approvals",
      value: pendingApprovals,
      hint: "Providers waiting for review",
    },
    {
      label: "Active issues",
      value: activeIssues,
      hint: "Open or in-review platform issues",
    },
    {
      label: "Completed bookings",
      value: completedBookings,
      hint: "Recently finished services",
    },
    {
      label: "Booking value",
      value: `₹${bookingValue}`,
      hint: "Recent booking volume",
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

export default AdminStats;
