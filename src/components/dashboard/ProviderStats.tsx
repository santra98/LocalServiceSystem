import type { ProviderBookingRequest } from "../../types/providerDashboard";
import StatCard from "../ui/StatCard";

interface ProviderStatsProps {
  requests: ProviderBookingRequest[];
}

const ProviderStats = ({ requests }: ProviderStatsProps) => {
  const pendingCount = requests.filter(
    (request) => request.status === "pending",
  ).length;

  const confirmedCount = requests.filter(
    (request) => request.status === "confirmed",
  ).length;

  const completedCount = requests.filter(
    (request) => request.status === "completed",
  ).length;

  const totalEarnings = requests
    .filter((request) => request.status === "completed")
    .reduce((sum, request) => sum + request.price, 0);

  const stats = [
    {
      label: "Pending requests",
      value: pendingCount,
      hint: "Waiting for provider action",
    },
    {
      label: "Confirmed jobs",
      value: confirmedCount,
      hint: "Accepted upcoming services",
    },
    {
      label: "Completed jobs",
      value: completedCount,
      hint: "Finished provider work",
    },
    {
      label: "Total earnings",
      value: `₹${totalEarnings}`,
      hint: "From completed jobs",
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

export default ProviderStats;
