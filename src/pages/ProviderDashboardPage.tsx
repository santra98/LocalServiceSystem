import ProviderEarningsSummary from "../components/dashboard/ProviderEarningsSummary";
import ProviderProfileCard from "../components/dashboard/ProviderProfileCard";
import ProviderRequestsSection from "../components/dashboard/ProviderRequestsSection";
import ProviderStats from "../components/dashboard/ProviderStats";
import { providerRequests } from "../data/providerDashboard";

const ProviderDashboardPage = () => {
  const pendingRequests = providerRequests.filter(
    (request) => request.status === "pending",
  );

  const todaySchedule = providerRequests.filter(
    (request) => request.status === "confirmed",
  );

  return (
    <div className="space-y-8 py-6">
      <ProviderProfileCard />

      <ProviderStats requests={providerRequests} />

      <ProviderRequestsSection
        title="Incoming requests"
        description="Review new service requests that are waiting for action."
        requests={pendingRequests}
        emptyMessage="You do not have any new incoming requests right now."
      />

      <ProviderRequestsSection
        title="Today’s schedule"
        description="Track confirmed jobs that are scheduled for the upcoming work cycle."
        requests={todaySchedule}
        emptyMessage="No confirmed jobs are scheduled right now."
      />

      <ProviderEarningsSummary requests={providerRequests} />
    </div>
  );
};

export default ProviderDashboardPage;
