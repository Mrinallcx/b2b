import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Cloud, Code, BarChart } from "lucide-react";

const offerings = [
  {
    icon: Database,
    title: "Data Infrastructure",
    description: "Scalable data solutions that grow with your business. From data lakes to real-time analytics.",
    features: ["Real-time processing", "Auto-scaling", "99.99% availability"]
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Enterprise cloud infrastructure optimized for performance, security, and cost efficiency.",
    features: ["Multi-cloud support", "Hybrid deployment", "Edge computing"]
  },
  {
    icon: Code,
    title: "API Platform",
    description: "Build, deploy, and manage APIs at scale with our comprehensive API management platform.",
    features: ["Rate limiting", "Analytics", "Developer portal"]
  },
  {
    icon: BarChart,
    title: "Business Intelligence",
    description: "Transform data into actionable insights with our AI-powered analytics suite.",
    features: ["Predictive analytics", "Custom dashboards", "Automated reporting"]
  }
];

const CurrentOfferings = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Current Offerings
          </h2>
          <p className="text-muted-foreground">
            Comprehensive solutions designed to accelerate your digital transformation journey.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
