import { Shield, TrendingUp, Lock, Globe, Coins, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Asset-Backed Security",
    description: "Each token is backed by physical copper stored in certified warehouses with full insurance coverage."
  },
  {
    icon: TrendingUp,
    title: "Attractive Yield",
    description: "Projected annual returns of 8.5% through strategic copper trading and storage optimization."
  },
  {
    icon: Lock,
    title: "Regulatory Compliant",
    description: "Fully compliant with SEC regulations and structured under established securities law."
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Invest from anywhere in the world with 24/7 liquidity through our trading platform."
  },
  {
    icon: Coins,
    title: "Low Minimum Investment",
    description: "Start with as little as $1,000, making institutional-grade investments accessible to all."
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Real-time portfolio tracking and quarterly audited reports for complete transparency."
  }
];

const InvestmentHighlights = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Investment <span className="text-gradient-gold">Highlights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the key benefits that make this investment opportunity stand out in the market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentHighlights;
