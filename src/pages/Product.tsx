import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import OfferingStatsBar from "@/components/product/OfferingStatsBar";
import InvestmentHighlights from "@/components/product/InvestmentHighlights";
import TokenStructure from "@/components/product/TokenStructure";
import MarketOpportunity from "@/components/product/MarketOpportunity";
import WhyCopper from "@/components/product/WhyCopper";
import InvestmentTermsCard from "@/components/product/InvestmentTermsCard";
import LegalDisclaimer from "@/components/product/LegalDisclaimer";

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductHero />
        <OfferingStatsBar />
        
        {/* Main content with sticky sidebar */}
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="flex-1 order-2 lg:order-1">
              <InvestmentHighlights />
              <TokenStructure />
              <MarketOpportunity />
              <WhyCopper />
            </div>

            {/* Sticky Sidebar - Desktop / Collapsible on Mobile */}
            <div className="w-full lg:w-[380px] order-1 lg:order-2">
              <div className="lg:sticky lg:top-24">
                {/* Mobile: Always visible but scrollable */}
                <div className="lg:hidden mb-8">
                  <InvestmentTermsCard />
                </div>
                
                {/* Desktop: Sticky */}
                <div className="hidden lg:block">
                  <InvestmentTermsCard />
                </div>
              </div>
            </div>
          </div>
        </div>

        <LegalDisclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Product;
