import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, CircleDollarSign, Package } from "lucide-react";

const offerings = [
  {
    icon: Layers,
    title: "Toto Rails",
    description: "Smart-contract engine for secure, programmable tokenization with built-in compliance and automated workflows.",
    features: [] as string[]
  },
  {
    icon: CircleDollarSign,
    title: "Toto Clear",
    description: "Instant stablecoin settlement layer enabling seamless fiat-to-crypto conversion and real-time transaction finality.",
    features: [] as string[]
  },
  {
    icon: Package,
    title: "Toto Logistics",
    description: "Custody and redemption infrastructure linking digital tokens to physical assets — including warehouse warrants and delivery coordination.",
    features: [] as string[]
  }
];

const CurrentOfferings = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Proprietary Tokenization Infrastructure
          </h2>
          <p className="text-muted-foreground">
            Toto Finance operates a vertically integrated technology stack purpose-built for real-world asset tokenization — combining compliance, settlement, custody, and redemption into a unified blockchain-powered system.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="group p-8 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <offering.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light mb-2">{offering.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {offering.description}
                  </p>
                  {offering.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {offering.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-gold-light">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentOfferings;
