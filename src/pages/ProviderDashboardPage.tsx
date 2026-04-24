import { useCallback, useEffect, useMemo, useState } from "react";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import ProviderRequestDetailsModal from "../components/dashboard/ProviderRequestDetailsModal";
import ProviderEarningsSummary from "../components/dashboard/ProviderEarningsSummary";
import ProviderProfileCard from "../components/dashboard/ProviderProfileCard";
import ProviderRequestsSection from "../components/dashboard/ProviderRequestsSection";
import ProviderStats from "../components/dashboard/ProviderStats";
import DashboardToolbar from "../components/dashboard/DashboardToolbar";
import type { ProviderBookingRequest } from "../types/providerDashboard";
import { useNotifications } from "../context/NotificationsContext";
import { useProviderRequests } from "../hooks/useProviderRequests";
import { useDashboardFilters } from "../hooks/useDashboardFilters";
import ProviderDashboardSkeleton from "../components/dashboard/ProviderDashboardSkeleton";
import { useDebounce } from "../hooks/useDebounce";

const ProviderDashboardPage = () => {
  const { notify } = useNotifications();
  const { allProviderRequests, updateRequestStatus } = useProviderRequests();

  const [requestToAccept, setRequestToAccept] =
    useState<ProviderBookingRequest | null>(null);

  const [requestToReject, setRequestToReject] =
    useState<ProviderBookingRequest | null>(null);

  const [selectedRequest, setSelectedRequest] =
    useState<ProviderBookingRequest | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [isLoading, setIsLoading] = useState(true);
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const [requestToComplete, setRequestToComplete] =
    useState<ProviderBookingRequest | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredRequests = useDashboardFilters({
    data: allProviderRequests,
    searchTerm: debouncedSearchTerm,
    statusFilter,
    sortOrder,
    getSearchText: (r) =>
      `${r.customerName} ${r.service} ${r.address} ${r.phone}`,
    getStatus: (r) => r.status,
    getDate: (r) => r.date,
  });

  const confirmAcceptRequest = useCallback(() => {
    if (!requestToAccept) return;

    updateRequestStatus(requestToAccept, "confirmed");

    notify({
      title: "Request accepted",
      message: `${requestToAccept.service} request has been accepted.`,
      type: "request",
      toastType: "success",
    });

    setRequestToAccept(null);
  }, [requestToAccept, updateRequestStatus, notify]);

  const confirmRejectRequest = useCallback(() => {
    if (!requestToReject) return;

    updateRequestStatus(requestToReject, "cancelled");

    notify({
      title: "Request rejected",
      message: `${requestToReject.service} request has been rejected.`,
      type: "alert",
      toastType: "error",
    });

    setRequestToReject(null);
  }, [requestToReject, updateRequestStatus, notify]);

  const confirmCompleteRequest = useCallback(() => {
    if (!requestToComplete) return;

    updateRequestStatus(requestToComplete, "completed");

    notify({
      title: "Job completed",
      message: `${requestToComplete.service} job has been marked as completed.`,
      type: "request",
      toastType: "success",
    });

    setRequestToComplete(null);
  }, [requestToComplete, updateRequestStatus, notify]);

  const pendingRequests = filteredRequests.filter(
    (request) => request.status === "pending",
  );

  const todaySchedule = filteredRequests.filter(
    (request) => request.status === "confirmed",
  );

  const completedJobs = filteredRequests.filter(
    (request) => request.status === "completed",
  );

  if (isLoading) {
    return (
      <div className="px-4 py-6">
        <ProviderDashboardSkeleton />
      </div>
    );
  }

  const handleOpenAcceptDialog = useCallback(
    (request: ProviderBookingRequest) => {
      setRequestToAccept(request);
    },
    [],
  );

  const handleOpenRejectDialog = useCallback(
    (request: ProviderBookingRequest) => {
      setRequestToReject(request);
    },
    [],
  );

  const handleOpenCompleteDialog = useCallback(
    (request: ProviderBookingRequest) => {
      setRequestToComplete(request);
    },
    [],
  );

  const handleViewDetails = useCallback((request: ProviderBookingRequest) => {
    setSelectedRequest(request);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedRequest(null);
  }, []);

  return (
    <>
      <div className="space-y-8 py-6">
        <ProviderProfileCard />

        <ProviderStats requests={allProviderRequests} />

        <DashboardToolbar
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          statusValue={statusFilter}
          onStatusChange={setStatusFilter}
          sortValue={sortOrder}
          onSortChange={setSortOrder}
          resultCount={filteredRequests.length}
          totalCount={allProviderRequests.length}
          onReset={() => {
            setSearchTerm("");
            setStatusFilter("all");
            setSortOrder("newest");
          }}
          searchPlaceholder="Search by customer, service, address, phone..."
          statusOptions={[
            { label: "All statuses", value: "all" },
            { label: "Pending", value: "pending" },
            { label: "Confirmed", value: "confirmed" },
            { label: "Completed", value: "completed" },
            { label: "Cancelled", value: "cancelled" },
          ]}
        />

        <ProviderRequestsSection
          title="Incoming requests"
          description="Review new service requests that are waiting for action."
          requests={pendingRequests}
          emptyMessage="No incoming requests match your current search or filter."
          onAccept={(request) => setRequestToAccept(request)}
          onReject={(request) => setRequestToReject(request)}
          onViewDetails={(request) => setSelectedRequest(request)}
        />

        <ProviderRequestsSection
          title="Today’s schedule"
          description="Track confirmed jobs that are scheduled for the upcoming work cycle."
          requests={todaySchedule}
          emptyMessage="No confirmed jobs match your current search or filter."
          onComplete={(request) => setRequestToComplete(request)}
          onViewDetails={(request) => setSelectedRequest(request)}
        />

        <ProviderRequestsSection
          title="Completed jobs"
          description="Review jobs that have been successfully finished."
          requests={completedJobs}
          emptyMessage="No completed jobs match your current search or filter."
          onViewDetails={(request) => setSelectedRequest(request)}
        />

        <ProviderEarningsSummary requests={allProviderRequests} />
      </div>

      <ConfirmDialog
        isOpen={!!requestToAccept}
        title="Accept request?"
        message="This will confirm the booking and move it into the confirmed schedule."
        confirmLabel="Yes, accept request"
        cancelLabel="Not now"
        confirmVariant="primary"
        onConfirm={confirmAcceptRequest}
        onCancel={() => setRequestToAccept(null)}
      />

      <ConfirmDialog
        isOpen={!!requestToReject}
        title="Reject request?"
        message="This will mark the request as cancelled for both provider and customer views."
        confirmLabel="Yes, reject request"
        cancelLabel="Go back"
        confirmVariant="danger"
        onConfirm={confirmRejectRequest}
        onCancel={() => setRequestToReject(null)}
      />

      <ConfirmDialog
        isOpen={!!requestToComplete}
        title="Mark job as completed?"
        message="This will move the job into completed history and include it in your completed earnings."
        confirmLabel="Yes, mark completed"
        cancelLabel="Not now"
        confirmVariant="primary"
        onConfirm={confirmCompleteRequest}
        onCancel={() => setRequestToComplete(null)}
      />

      <ProviderRequestDetailsModal
        request={selectedRequest}
        isOpen={!!selectedRequest}
        onClose={() => setSelectedRequest(null)}
      />
    </>
  );
};

export default ProviderDashboardPage;
