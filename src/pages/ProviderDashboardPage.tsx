import { useMemo, useState } from "react";
import ProviderEarningsSummary from "../components/dashboard/ProviderEarningsSummary";
import ProviderProfileCard from "../components/dashboard/ProviderProfileCard";
import ProviderRequestsSection from "../components/dashboard/ProviderRequestsSection";
import ProviderStats from "../components/dashboard/ProviderStats";
import { providerRequests as mockProviderRequests } from "../data/providerDashboard";
import type { ProviderBookingRequest } from "../types/providerDashboard";
import { updateStoredCustomerBookingStatus } from "../utils/customerBookingStorage";
import {
  getStoredProviderRequests,
  updateStoredProviderRequestStatus,
} from "../utils/providerRequestStorage";
import { useAuth } from "../context/AuthContext";

const ProviderDashboardPage = () => {
  const { user } = useAuth();

  const [storedProviderRequests, setStoredProviderRequests] = useState(
    getStoredProviderRequests(),
  );

  const allProviderRequests = useMemo(() => {
    const providerName = user?.name?.trim();

    const merged = [...storedProviderRequests, ...mockProviderRequests];

    const filtered = providerName ? merged : merged;

    return filtered.sort((a, b) => {
      const firstDate = new Date(a.date).getTime();
      const secondDate = new Date(b.date).getTime();
      return secondDate - firstDate;
    });
  }, [storedProviderRequests, user?.name]);

  const handleUpdateRequestStatus = (
    request: ProviderBookingRequest,
    status: "confirmed" | "cancelled",
  ) => {
    updateStoredProviderRequestStatus({
      id: request.id,
      status,
    });

    setStoredProviderRequests((prev) =>
      prev.map((item) =>
        item.id === request.id
          ? {
              ...item,
              status,
            }
          : item,
      ),
    );

    updateStoredCustomerBookingStatus({
      providerName: user?.name || "Provider",
      service: request.service,
      date: request.date,
      time: request.time,
      address: request.address,
      status,
    });
  };

  const pendingRequests = allProviderRequests.filter(
    (request) => request.status === "pending",
  );

  const todaySchedule = allProviderRequests.filter(
    (request) => request.status === "confirmed",
  );

  return (
    <div className="space-y-8 py-6">
      <ProviderProfileCard />

      <ProviderStats requests={allProviderRequests} />

      <ProviderRequestsSection
        title="Incoming requests"
        description="Review new service requests that are waiting for action."
        requests={pendingRequests}
        emptyMessage="You do not have any new incoming requests right now."
        onAccept={(request) => handleUpdateRequestStatus(request, "confirmed")}
        onReject={(request) => handleUpdateRequestStatus(request, "cancelled")}
      />

      <ProviderRequestsSection
        title="Today’s schedule"
        description="Track confirmed jobs that are scheduled for the upcoming work cycle."
        requests={todaySchedule}
        emptyMessage="No confirmed jobs are scheduled right now."
      />

      <ProviderEarningsSummary requests={allProviderRequests} />
    </div>
  );
};

export default ProviderDashboardPage;
