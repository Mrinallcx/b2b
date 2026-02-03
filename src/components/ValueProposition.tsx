import { Shield, Zap, Globe } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Replace 5–30 day settlement cycles with real-time, blockchain-powered transactions. Free up capital and eliminate counterparty delays."
  },
  {
    icon: Globe,
    title: "24/7 Global Liquidity",
    description: "Trade tokenized commodities around the clock on digital markets. No exchange hours, no borders, no waiting."
  },
  {
    icon: Shield,
    title: "Compliant & Transparent",
    description: "Full KYC/AML verification, geological certification, regulatory compliance, and real-time oracle-driven pricing. Institutional-grade from day one."
  }
];

const ValueProposition = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Why Tokenized Commodities?
          </h2>
          <p className="text-muted-foreground">
            Traditional commodity infrastructure is outdated paper based, slow settlements, locked capital, fragmented markets. Tokenization changes everything.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_4px_24px_-8px_hsl(43,74%,52%,0.2)]"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-light mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
