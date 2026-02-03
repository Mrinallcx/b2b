const tags = [
  "Base Metal",
  "In-Ground Reserves",
  "NYSE-Listed Partner",
  "Live Offering",
];

const KeyMetricsBar = () => {
  return (
    <section className="bg-card border-y border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tags.map((tag, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-xl md:text-2xl font-light text-gradient-gold">
                {tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsBar;
