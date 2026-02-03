const stats = [
  { value: "$2B+ USD", label: "Total Offering Size" },
  { value: "300M COPTT", label: "Token Supply" },
  { value: "30%", label: "Discount to Futures" },
  { value: "48 Months", label: "Redemption Period" },
];

const OfferingStatsBar = () => {
  return (
    <section className="bg-background border-b border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-light text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingStatsBar;
