import { Link, useParams } from "react-router-dom";
import BookingSummaryCard from "../components/providers/BookingSummaryCard";
import ProviderHero from "../components/providers/ProviderHero";
import ProviderOverview from "../components/providers/ProviderOverview";
import ProviderReviewsPreview from "../components/providers/ProviderReviewsPreview";
import { providers } from "../data/providers";

const ProviderDetailsPage = () => {
  const { id } = useParams();
  const provider = providers.find((item) => item.id === Number(id));

  if (!provider) {
    return (
      <div className="rounded-3xl border border-dashed border-border-soft bg-surface px-6 py-12 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-text-primary">
          Provider not found
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          The provider you are looking for does not exist or may have been
          removed.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-6">
      <Link
        to="/services"
        className="inline-flex text-sm font-medium text-primary transition hover:text-primary-hover"
      >
        ← Back to Services
      </Link>

      <ProviderHero provider={provider} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-8">
          <ProviderOverview provider={provider} />
          <ProviderReviewsPreview provider={provider} />
        </div>

        <BookingSummaryCard provider={provider} />
      </div>
    </div>
  );
};

export default ProviderDetailsPage;
