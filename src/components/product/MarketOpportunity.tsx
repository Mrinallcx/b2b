import { TrendingUp } from "lucide-react";

const marketMetrics = [
  { value: "$5B", label: "Current Tokenized Commodity Market", growth: "Market cap" },
  { value: "$2B+", label: "COPTT Launch Target", growth: "Target raise" },
  { value: "$25T+", label: "Global Commodity TAM", growth: "Total addressable" },
];

const demandDrivers = [
  { title: "AI", description: "Data centers and AI infrastructure driving copper demand." },
  { title: "Energy", description: "Energy transition and renewables scaling copper use." },
  { title: "EVs", description: "Electric vehicles and charging networks boosting copper demand." },
];

const MarketOpportunity = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-left">
            Market <span className="text-gradient-gold">Opportunity</span>
          </h2>
          <div className="text-muted-foreground max-w-2xl space-y-4 text-left">
            <p>
              The global tokenized commodities market currently has a total market cap of approximately $5 billion — dominated by tokenized gold products. Copper and base metals remain largely untapped.
            </p>
            <p>
              At a $1 billion launch, COPTT would instantly rank as the #3 tokenized commodity globally. At $2 billion, COPTT becomes #1 on day one.
            </p>
            <p>
              With copper demand surging due to AI infrastructure, data centers, EVs, and the global energy transition, COPTT offers institutional investors early access to a strategic asset class at a significant discount.
            </p>
          </div>
        </div>

        {/* Key Market Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {marketMetrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-light text-gradient-gold mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground mb-2">{metric.label}</div>
              <div className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" />
                {metric.growth}
              </div>
            </div>
          ))}
        </div>

        {/* Demand Drivers */}
        <div className="max-w-5xl">
          <h3 className="text-xl font-medium text-left mb-8">Key Demand Drivers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demandDrivers.map((driver, index) => (
              <div 
                key={index}
                className="group text-center p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="text-xl font-medium text-primary mb-2">{driver.title}</h4>
                <p className="text-xs text-muted-foreground">{driver.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
