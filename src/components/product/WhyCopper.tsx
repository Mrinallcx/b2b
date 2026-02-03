import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Essential for renewable energy infrastructure and the global green transition",
  "Limited supply with declining ore grades and fewer new mine discoveries",
  "Critical component in electric vehicles, requiring 4x more copper than ICE vehicles",
  "Strong industrial demand from construction, electronics, and telecommunications",
  "Historical price stability with inflation-hedging characteristics",
  "Growing demand from emerging markets and urbanization trends",
];

const WhyCopper = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Why <span className="text-gradient-gold">Copper?</span>
          </h2>

          {/* Description - full width at top */}
          <div className="text-muted-foreground mb-12 space-y-4">
            <p>
              Copper is the backbone of modern infrastructure. AI data centers, electric vehicles, renewable energy systems, and grid expansion all require massive amounts of copper. Supply constraints and surging demand make copper one of the most strategic commodities of the decade.
            </p>
            <p>
              COPTT provides a unique opportunity to gain exposure to in-ground copper reserves at a discount — before extraction, before market pricing, and with the security of tokenized, transparent ownership.
            </p>
          </div>

          {/* Pointers & Cu card side by side */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pointers */}
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{reason}</span>
                </li>
              ))}
            </ul>

            {/* Cu Stats Card */}
            <div className="bg-background border border-border rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="text-5xl md:text-6xl font-light text-gradient-gold mb-2">Cu</div>
                <div className="text-sm text-muted-foreground">Atomic Number 29</div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-light text-primary mb-1">8,960</div>
                  <div className="text-xs text-muted-foreground">kg/m³ Density</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-light text-primary mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Recyclable</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-light text-primary mb-1">10,000+</div>
                  <div className="text-xs text-muted-foreground">Years in Use</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-light text-primary mb-1">#3</div>
                  <div className="text-xs text-muted-foreground">Most Used Metal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCopper;
