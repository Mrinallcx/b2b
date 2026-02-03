import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const ProductHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-50" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(0, 0%, 0%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(0, 0%, 0%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tags / Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-fade-in">
            {["Base Metal", "In-Ground Reserves", "NYSE-Listed Partner", "Live Offering"].map((tag) => (
              <div key={tag} className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">{tag}</span>
              </div>
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 animate-slide-up">
            <span className="text-gradient-gold">$COPTT</span>
            <span className="block mt-2">Tokenized Copper Reserve</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            A tokenized forward sale of in-ground copper reserves, giving institutional investors discounted, transparent, on-chain exposure to future copper production. Backed by geological certification, regulatory compliance, and optional physical redemption.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl">
              Request Access
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              <FileText className="w-5 h-5" />
              Download Investment Overview (PDF)
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  );
};

export default ProductHero;
