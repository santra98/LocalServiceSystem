import React from "react";
import HeroSection from "../components/home/HeroSection";
import SearchSection from "../components/home/SearchSection";
import CategoriesSection from "../components/home/CategoriesSection";
import HighlightsSection from "../components/home/HighlightsSection";
import CtaSection from "../components/home/CtaSection";

const HomePage = () => {
  return (
    <div className="space-y-8 py-6">
      <HeroSection />
      <SearchSection />
      <CategoriesSection />
      <HighlightsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
