import { Coins, Percent, Building2, FileCheck, Gauge, Package, Flame, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Coins,
    title: "Tokenized Copper Backing",
    description: "Each COPTT token represents 1 lb of future LME Grade A copper."
  },
  {
    icon: Percent,
    title: "Built-In Pricing Advantage",
    description: "Tokens are offered at a 30% discount to copper futures pricing."
  },
  {
    icon: Building2,
    title: "Institutional Mining Partnership",
    description: "Partnered with a leading NYSE-listed mining company."
  },
  {
    icon: FileCheck,
    title: "Verified Resource & Output",
    description: "Backed by geological certification and ongoing production reporting."
  },
  {
    icon: Gauge,
    title: "Real-Time Oracle Pricing",
    description: "Oracle-driven pricing ensures live transparency and market alignment."
  },
  {
    icon: Package,
    title: "Physical Settlement Option",
    description: "Eligible investors can opt for physical settlement via warehouse warrants."
  },
  {
    icon: Flame,
    title: "Deflationary Supply Mechanism",
    description: "Tokens are burned upon redemption, reducing supply and increasing scarcity."
  },
  {
    icon: ShieldCheck,
    title: "Regulatory-First Compliance",
    description: "Full KYC/AML compliance with accredited investor verification."
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
