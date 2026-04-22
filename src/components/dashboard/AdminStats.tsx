import type {
  AdminRecentBooking,
  AdminReportedIssue,
  PendingProviderApproval,
} from "../../types/adminDashboard";

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
    { label: "Pending approvals", value: pendingApprovals },
    { label: "Active issues", value: activeIssues },
    { label: "Completed bookings", value: completedBookings },
    { label: "Booking value", value: `₹${bookingValue}` },
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

export default AdminStats;
