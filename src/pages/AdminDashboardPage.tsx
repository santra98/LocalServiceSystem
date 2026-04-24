import { useMemo, useState } from "react";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import AdminOverviewCard from "../components/dashboard/AdminOverviewCard";
import AdminRecentBookingCard from "../components/dashboard/AdminRecentBookingCard";
import AdminSection from "../components/dashboard/AdminSection";
import AdminStats from "../components/dashboard/AdminStats";
import PendingApprovalCard from "../components/dashboard/PendingApprovalCard";
import ReportedIssueCard from "../components/dashboard/ReportedIssueCard";
import {
  adminRecentBookings,
  adminReportedIssues,
  pendingProviderApprovals,
} from "../data/adminDashboard";
import type {
  AdminReportedIssue,
  PendingProviderApproval,
} from "../types/adminDashboard";
import { useNotifications } from "../context/NotificationsContext";
import { useDebounce } from "../hooks/useDebounce";
import { useDashboardFilters } from "../hooks/useDashboardFilters";
import DashboardToolbar from "../components/dashboard/DashboardToolbar";

const AdminDashboardPage = () => {
  const { notify } = useNotifications();

  const [approvals, setApprovals] = useState(pendingProviderApprovals);
  const [issues, setIssues] = useState(adminReportedIssues);

  const [approvalToApprove, setApprovalToApprove] =
    useState<PendingProviderApproval | null>(null);

  const [approvalToReject, setApprovalToReject] =
    useState<PendingProviderApproval | null>(null);

  const [issueToResolve, setIssueToResolve] =
    useState<AdminReportedIssue | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const debouncedSearch = useDebounce(searchTerm, 400);

  const filteredApprovals = useDashboardFilters({
    data: approvals,
    searchTerm: debouncedSearch,
    statusFilter: "all", // no status filter here
    sortOrder,
    getSearchText: (a) => `${a.providerName} ${a.category} ${a.location}`,
    getStatus: () => "all",
    getDate: (a) => a.submittedAt,
  });

  const filteredIssues = useDashboardFilters({
    data: issues,
    searchTerm: debouncedSearch,
    statusFilter,
    sortOrder,
    getSearchText: (i) => `${i.title} ${i.reportedBy} ${i.category}`,
    getStatus: (i) => i.status,
    getDate: (i) => i.createdAt,
  });

  const activeIssues = filteredIssues.filter((i) => i.status !== "resolved");

  const resolvedIssues = filteredIssues.filter((i) => i.status === "resolved");

  const confirmApproveProvider = () => {
    if (!approvalToApprove) return;

    setApprovals((prev) =>
      prev.filter((item) => item.id !== approvalToApprove.id),
    );

    notify({
      title: "Provider approved",
      message: `${approvalToApprove.providerName} has been approved successfully.`,
      type: "system",
      toastType: "success",
    });

    setApprovalToApprove(null);
  };

  const confirmRejectProvider = () => {
    if (!approvalToReject) return;

    setApprovals((prev) =>
      prev.filter((item) => item.id !== approvalToReject.id),
    );

    notify({
      title: "Provider rejected",
      message: `${approvalToReject.providerName} has been rejected.`,
      type: "alert",
      toastType: "error",
    });

    setApprovalToReject(null);
  };

  const confirmResolveIssue = () => {
    if (!issueToResolve) return;

    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === issueToResolve.id
          ? {
              ...issue,
              status: "resolved",
            }
          : issue,
      ),
    );

    notify({
      title: "Issue resolved",
      message: `${issueToResolve.title} has been marked as resolved.`,
      type: "system",
      toastType: "success",
    });

    setIssueToResolve(null);
  };

  return (
    <>
      <div className="space-y-8 py-6">
        <AdminOverviewCard />

        <AdminStats
          approvals={approvals}
          recentBookings={adminRecentBookings}
          issues={issues}
        />

        <DashboardToolbar
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          statusValue={statusFilter}
          onStatusChange={setStatusFilter}
          sortValue={sortOrder}
          onSortChange={setSortOrder}
          resultCount={filteredIssues.length}
          totalCount={issues.length}
          onReset={() => {
            setSearchTerm("");
            setStatusFilter("all");
            setSortOrder("newest");
          }}
          searchPlaceholder="Search providers, issues..."
          statusOptions={[
            { label: "All statuses", value: "all" },
            { label: "Open", value: "open" },
            { label: "In review", value: "in_review" },
            { label: "Resolved", value: "resolved" },
          ]}
        />

        <AdminSection
          title="Pending provider approvals"
          description="Review newly submitted providers before they are activated on the platform."
          emptyMessage="There are no pending provider approvals right now."
          itemsCount={filteredApprovals.length}
        >
          {filteredApprovals.map((approval) => (
            <PendingApprovalCard
              key={approval.id}
              approval={approval}
              onApprove={(item) => setApprovalToApprove(item)}
              onReject={(item) => setApprovalToReject(item)}
            />
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
          title="Active reported issues"
          description="Monitor open or in-review service, payment, and compliance-related issues."
          emptyMessage="No active reported issues are available right now."
          itemsCount={activeIssues.length}
        >
          {activeIssues.map((issue) => (
            <ReportedIssueCard
              key={issue.id}
              issue={issue}
              onResolve={(item) => setIssueToResolve(item)}
            />
          ))}
        </AdminSection>

        <AdminSection
          title="Resolved issues"
          description="Review issues that have already been handled by the admin team."
          emptyMessage="No resolved issues are available right now."
          itemsCount={resolvedIssues.length}
        >
          {resolvedIssues.map((issue) => (
            <ReportedIssueCard key={issue.id} issue={issue} />
          ))}
        </AdminSection>
      </div>

      <ConfirmDialog
        isOpen={!!approvalToApprove}
        title="Approve provider?"
        message="This will approve the provider and remove them from the pending approval list."
        confirmLabel="Yes, approve"
        cancelLabel="Not now"
        confirmVariant="primary"
        onConfirm={confirmApproveProvider}
        onCancel={() => setApprovalToApprove(null)}
      />

      <ConfirmDialog
        isOpen={!!approvalToReject}
        title="Reject provider?"
        message="This will reject the provider application and remove it from the pending approval list."
        confirmLabel="Yes, reject"
        cancelLabel="Go back"
        confirmVariant="danger"
        onConfirm={confirmRejectProvider}
        onCancel={() => setApprovalToReject(null)}
      />

      <ConfirmDialog
        isOpen={!!issueToResolve}
        title="Resolve issue?"
        message="This will mark the reported issue as resolved and move it into the resolved issues section."
        confirmLabel="Yes, resolve"
        cancelLabel="Not now"
        confirmVariant="primary"
        onConfirm={confirmResolveIssue}
        onCancel={() => setIssueToResolve(null)}
      />
    </>
  );
};

export default AdminDashboardPage;
