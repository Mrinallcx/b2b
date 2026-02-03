import { TrendingUp, Factory, Zap, Car } from "lucide-react";

const marketMetrics = [
  { value: "$250B", label: "Global Copper Market Size", growth: "+5.2% CAGR" },
  { value: "28M", label: "Tonnes Annual Demand", growth: "+3.8% YoY" },
  { value: "$9,500", label: "Current Price per Tonne", growth: "+12% YTD" },
  { value: "2030", label: "Supply Deficit Projected", growth: "10M Tonnes" },
];

const demandDrivers = [
  {
    icon: Zap,
    title: "Renewable Energy",
    stat: "40%",
    description: "Increase in copper demand from solar and wind installations by 2030."
  },
  {
    icon: Car,
    title: "Electric Vehicles",
    stat: "4x",
    description: "More copper used in EVs compared to traditional combustion vehicles."
  },
  {
    icon: Factory,
    title: "Infrastructure",
    stat: "$1.2T",
    description: "Global infrastructure spending driving industrial copper demand."
  },
  {
    icon: TrendingUp,
    title: "Supply Constraints",
    stat: "-15%",
    description: "Decline in new copper mine discoveries over the past decade."
  },
];

const MarketOpportunity = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Market <span className="text-gradient-gold">Opportunity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Copper is at the center of the global energy transition, creating unprecedented investment potential.
          </p>
        </div>

        {/* Key Market Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-medium text-center mb-8">Key Demand Drivers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demandDrivers.map((driver, index) => (
              <div 
                key={index}
                className="group text-center p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <driver.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-light text-gradient-gold mb-2">{driver.stat}</div>
                <h4 className="text-sm font-medium mb-2">{driver.title}</h4>
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
