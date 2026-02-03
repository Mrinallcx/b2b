const subsections = [
  {
    title: "Minting",
    points: [
      "Token Standard: ERC-20 on Ethereum",
      "Total Supply: 300,000,000 tokens (capped)",
      "Initial Allocation: 100% held by mine owner for supply control and compliance",
      "Pricing Mechanism: Oracle-based futures pricing",
    ],
  },
  {
    title: "Pricing Model",
    points: [
      "Tokens offered at 30% discount to copper futures",
      "Example: If futures trade at $5.80/lb → COPTT price is $4.06",
      "Full sale potential: ~$1.06 Billion USD",
      "Real-time oracle integration maintains market transparency",
    ],
  },
  {
    title: "Redemption",
    points: [
      "48-month amortized redemption aligned with mine production schedules",
      "Buyback at spot price provides liquidity and downside protection",
      "Optional physical settlement via warehouse warrants",
      "Tokens burned upon redemption — deflationary mechanism",
    ],
  },
  {
    title: "Compliance & Operations",
    points: [
      "KYC/AML onboarding with accredited investor verification",
      "Mining company provides geological certification",
      "Ongoing production reporting and transparency",
      "Partnership merges established mining standards with secure digital asset issuance",
    ],
  },
];

const TokenStructure = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Token Structure <span className="text-gradient-gold">& Mechanics</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line - runs through center of nodes */}
          <div className="absolute left-[1.875rem] md:left-7 top-8 bottom-8 w-px bg-primary/30" />

          <div className="space-y-0">
            {subsections.map((subsection, index) => (
              <div
                key={index}
                className="relative flex gap-6 md:gap-8 pb-14 last:pb-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline node - sits on the line */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm md:text-base ring-4 ring-card">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
                    <h3 className="text-lg font-medium mb-4 text-primary">
                      {subsection.title}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {subsection.points.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenStructure;
