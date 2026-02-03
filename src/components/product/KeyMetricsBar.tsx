const metrics = [
  { value: "$50M", label: "Target Raise" },
  { value: "8.5%", label: "Projected Yield" },
  { value: "24 Mo", label: "Investment Term" },
  { value: "AAA", label: "Security Rating" },
];

const KeyMetricsBar = () => {
  return (
    <section className="bg-card border-y border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-light text-gradient-gold mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsBar;
