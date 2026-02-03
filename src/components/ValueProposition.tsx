import { Shield, Zap, Globe, Lock } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience unparalleled speed with our optimized infrastructure designed for enterprise-grade performance."
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your data is protected with military-grade encryption and compliance with global security standards."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy across multiple regions with our distributed network spanning over 50 countries worldwide."
  },
  {
    icon: Lock,
    title: "Full Compliance",
    description: "Stay compliant with SOC 2, GDPR, HIPAA, and other regulatory requirements out of the box."
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
            Built for Enterprise Excellence
          </h2>
          <p className="text-muted-foreground">
            Our platform combines cutting-edge technology with enterprise-grade reliability 
            to power your business operations.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
