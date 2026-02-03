import { Server, Shield, Cpu } from "lucide-react";

const technologies = [
  {
    icon: Server,
    title: "Distributed Architecture",
    description: "Our microservices-based architecture ensures high availability and fault tolerance. Built on Kubernetes with automatic failover and self-healing capabilities that keep your services running 24/7."
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    description: "Every request is authenticated and authorized using our zero-trust security model. End-to-end encryption, multi-factor authentication, and real-time threat detection protect your assets."
  },
  {
    icon: Cpu,
    title: "AI-Powered Operations",
    description: "Leverage machine learning for intelligent automation, predictive maintenance, and anomaly detection. Our AI engine continuously optimizes performance and reduces operational overhead."
  }
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Technology Stack
          </h2>
          <p className="text-muted-foreground">
            Built on cutting-edge technologies for maximum performance and reliability.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <tech.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-light mb-4">{tech.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
