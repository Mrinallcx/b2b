const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "$2.5B", label: "Transactions Processed" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "50+", label: "Countries Served" },
];

const StatsBar = () => {
  return (
    <section className="bg-card border-y border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-light text-gradient-gold mb-2">
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

export default StatsBar;
