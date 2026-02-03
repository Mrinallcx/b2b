import { useState, useEffect } from "react";
import DisclaimerModal from "@/components/DisclaimerModal";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ValueProposition from "@/components/ValueProposition";
import CurrentOfferings from "@/components/CurrentOfferings";
import TechnologySection from "@/components/TechnologySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const DISCLAIMER_KEY = "disclaimer_accepted";

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasAccepted = localStorage.getItem(DISCLAIMER_KEY);
    if (!hasAccepted) {
      setShowDisclaimer(true);
    }
    setIsLoading(false);
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem(DISCLAIMER_KEY, "true");
    setShowDisclaimer(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (showDisclaimer) {
    return <DisclaimerModal onAccept={handleAcceptDisclaimer} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <ValueProposition />
        <CurrentOfferings />
        <TechnologySection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
