import { useEffect, useState } from "react";
import AdminOverviewCard from "../components/dashboard/AdminOverviewCard";
import AdminRecentBookingCard from "../components/dashboard/AdminRecentBookingCard";
import AdminSection from "../components/dashboard/AdminSection";
import AdminStats from "../components/dashboard/AdminStats";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import PendingApprovalCard from "../components/dashboard/PendingApprovalCard";
import ReportedIssueCard from "../components/dashboard/ReportedIssueCard";
import {
  adminRecentBookings,
  adminReportedIssues,
  pendingProviderApprovals,
} from "../data/adminDashboard";

const AdminDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-8 py-6">
      <AdminOverviewCard />

      <AdminStats
        approvals={pendingProviderApprovals}
        recentBookings={adminRecentBookings}
        issues={adminReportedIssues}
      />

      <AdminSection
        title="Pending provider approvals"
        description="Review newly submitted providers before they are activated on the platform."
        emptyMessage="There are no pending provider approvals right now."
        itemsCount={pendingProviderApprovals.length}
      >
        {pendingProviderApprovals.map((approval) => (
          <PendingApprovalCard key={approval.id} approval={approval} />
        ))}
      </AdminSection>

      <AdminSection
        title="Recent bookings"
        description="Track the latest platform booking activity."
        emptyMessage="No recent bookings are available."
        itemsCount={adminRecentBookings.length}
      >
        {adminRecentBookings.map((booking) => (
          <AdminRecentBookingCard key={booking.id} booking={booking} />
        ))}
      </AdminSection>

      <AdminSection
        title="Reported issues"
        description="Monitor service, payment, and compliance-related issues raised on the platform."
        emptyMessage="No reported issues are available right now."
        itemsCount={adminReportedIssues.length}
      >
        {adminReportedIssues.map((issue) => (
          <ReportedIssueCard key={issue.id} issue={issue} />
        ))}
      </AdminSection>
    </div>
  );
};

export default AdminDashboardPage;
