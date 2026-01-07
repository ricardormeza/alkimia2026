import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BrandManifesto from "@/components/sections/BrandManifesto";
import HeroAlkimia from "@/components/sections/HeroAlkimia";
import IntroSplit from "@/components/sections/IntroSplit";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import StatsStrip from "@/components/sections/StatsStrip";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f8f8f8]">
      <Header active="inicio" />
      <main>
        <HeroAlkimia />
        <IntroSplit />
        <StatsStrip />
        <PortfolioPreview />
        <BrandManifesto />
      </main>
      <Footer />
    </div>
  );
}
