import ProviderCard from "../ui/ProviderCard";
import type { Provider } from "../../types/provider";

interface ProvidersGridProps {
  providers: Provider[];
}

const ProvidersGrid = ({ providers }: ProvidersGridProps) => {
  if (providers.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border-soft bg-surface px-6 py-12 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-text-primary">
          No providers found
        </h2>
        <p className="mt-2 text-sm text-text-secondary">
          Try changing your filters or search for a different service.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {providers.map((provider) => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
};

export default ProvidersGrid;
