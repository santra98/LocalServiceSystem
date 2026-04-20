import React from "react";
import ServicesToolbar from "../components/services/ServicesToolbar";
import { providers } from "../data/providers";
import FiltersSidebar from "../components/services/FiltersSidebar";
import ProvidersGrid from "../components/services/ProvidersGrid";

const ServicesPage = () => {
  return (
    <div className="space-y-8 py-6">
      <ServicesToolbar totalCount={providers.length} />

      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <FiltersSidebar />
        <ProvidersGrid providers={providers} />
      </div>
    </div>
  );
};

export default ServicesPage;
