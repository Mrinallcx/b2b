import { ArrowRight } from "lucide-react";

const structureItems = [
  {
    step: "01",
    title: "Asset Acquisition",
    description: "Physical copper is purchased from certified suppliers and stored in LME-approved warehouses."
  },
  {
    step: "02",
    title: "Token Issuance",
    description: "Digital security tokens are minted on the blockchain, each representing fractional ownership."
  },
  {
    step: "03",
    title: "Smart Contract",
    description: "Automated distribution of yields and transparent tracking of underlying assets."
  },
  {
    step: "04",
    title: "Secondary Trading",
    description: "Tokens can be traded on regulated exchanges, providing liquidity to investors."
  }
];

const TokenStructure = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Token <span className="text-gradient-gold">Structure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding how our tokenized copper investment works from acquisition to trading.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line connector */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-8">
              {structureItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex gap-6 md:gap-8 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-light text-lg md:text-xl relative z-10">
                    {item.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    
                    {index < structureItems.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-primary mt-4 hidden md:block rotate-90" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenStructure;
