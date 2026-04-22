import type { ProviderBookingRequest } from "../../types/providerDashboard";

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
    },
    {
      label: "Confirmed jobs",
      value: confirmedCount,
    },
    {
      label: "Completed jobs",
      value: completedCount,
    },
    {
      label: "Total earnings",
      value: `₹${totalEarnings}`,
    },
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

export default ProviderStats;
