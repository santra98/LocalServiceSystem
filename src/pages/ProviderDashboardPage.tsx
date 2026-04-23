import { useMemo, useState } from "react";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import ProviderRequestDetailsModal from "../components/dashboard/ProviderRequestDetailsModal";
import ProviderEarningsSummary from "../components/dashboard/ProviderEarningsSummary";
import ProviderProfileCard from "../components/dashboard/ProviderProfileCard";
import ProviderRequestsSection from "../components/dashboard/ProviderRequestsSection";
import ProviderStats from "../components/dashboard/ProviderStats";
import DashboardToolbar from "../components/dashboard/DashboardToolbar";
import { providerRequests as mockProviderRequests } from "../data/providerDashboard";
import type { ProviderBookingRequest } from "../types/providerDashboard";
import { useToast } from "../context/ToastContext";
import { mapPlatformBookingToProviderRequest } from "../utils/mapPlatformBookingToProviderRequest";
import {
  getStoredPlatformBookings,
  updatePlatformBookingStatus,
} from "../utils/platformBookingStorage";

const ProviderDashboardPage = () => {
  const { showToast } = useToast();
  const [platformBookings, setPlatformBookings] = useState(
    getStoredPlatformBookings(),
  );
  const [requestToAccept, setRequestToAccept] =
    useState<ProviderBookingRequest | null>(null);
  const [requestToReject, setRequestToReject] =
    useState<ProviderBookingRequest | null>(null);
  const [selectedRequest, setSelectedRequest] =
    useState<ProviderBookingRequest | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  const derivedStoredRequests = useMemo(() => {
    return platformBookings.map(mapPlatformBookingToProviderRequest);
  }, [platformBookings]);

  const allProviderRequests = useMemo(() => {
    return [...derivedStoredRequests, ...mockProviderRequests];
  }, [derivedStoredRequests]);

  const filteredRequests = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filtered = allProviderRequests.filter((request) => {
      const matchesSearch =
        !normalizedSearch ||
        request.customerName.toLowerCase().includes(normalizedSearch) ||
        request.service.toLowerCase().includes(normalizedSearch) ||
        request.address.toLowerCase().includes(normalizedSearch) ||
        request.phone.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "all" || request.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    return filtered.sort((a, b) => {
      const firstDate = new Date(a.date).getTime();
      const secondDate = new Date(b.date).getTime();

      return sortOrder === "newest"
        ? secondDate - firstDate
        : firstDate - secondDate;
    });
  }, [allProviderRequests, searchTerm, statusFilter, sortOrder]);

  const updateRequestStatus = (
    request: ProviderBookingRequest,
    status: "confirmed" | "cancelled",
  ) => {
    updatePlatformBookingStatus({
      id: request.id,
      status,
    });

    setPlatformBookings((prev) =>
      prev.map((item) =>
        item.id === request.id
          ? {
              ...item,
              status,
            }
          : item,
      ),
    );

    showToast(
      status === "confirmed"
        ? "Request accepted successfully."
        : "Request rejected successfully.",
      status === "confirmed" ? "success" : "info",
    );
  };

  const confirmAcceptRequest = () => {
    if (!requestToAccept) return;
    updateRequestStatus(requestToAccept, "confirmed");
    setRequestToAccept(null);
  };

  const confirmRejectRequest = () => {
    if (!requestToReject) return;
    updateRequestStatus(requestToReject, "cancelled");
    setRequestToReject(null);
  };

  const pendingRequests = filteredRequests.filter(
    (request) => request.status === "pending",
  );

  const todaySchedule = filteredRequests.filter(
    (request) => request.status === "confirmed",
  );

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

      <ProviderRequestDetailsModal
        request={selectedRequest}
        isOpen={!!selectedRequest}
        onClose={() => setSelectedRequest(null)}
      />
    </>
  );
};

export default ProviderDashboardPage;
