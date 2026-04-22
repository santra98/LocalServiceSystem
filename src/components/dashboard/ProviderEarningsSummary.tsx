import type { ProviderBookingRequest } from "../../types/providerDashboard";

interface ProviderEarningsSummaryProps {
  requests: ProviderBookingRequest[];
}

const ProviderEarningsSummary = ({
  requests,
}: ProviderEarningsSummaryProps) => {
  const completedJobs = requests.filter(
    (request) => request.status === "completed",
  );

  const totalEarnings = completedJobs.reduce(
    (sum, request) => sum + request.price,
    0,
  );

  const averagePerJob =
    completedJobs.length > 0
      ? Math.round(totalEarnings / completedJobs.length)
      : 0;

  return (
    <section className="rounded-xl border border-border-soft bg-surface p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Earnings summary</h2>
      <p className="mt-2 text-sm text-text-secondary">
        A quick overview of your completed job earnings.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-soft px-5 py-4">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Total earned
          </p>
          <p className="mt-2 text-2xl font-bold text-text-primary">
            ₹{totalEarnings}
          </p>
        </div>

        <div className="rounded-2xl bg-soft px-5 py-4">
          <p className="text-xs uppercase tracking-wide text-text-secondary/70">
            Avg per completed job
          </p>
          <p className="mt-2 text-2xl font-bold text-text-primary">
            ₹{averagePerJob}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProviderEarningsSummary;
