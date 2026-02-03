import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Pioneering Digital Transformation Since 2015
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to revolutionize enterprise technology, Nexus has grown 
                into a global leader in digital infrastructure solutions. We partner with 
                Fortune 500 companies and innovative startups alike.
              </p>
              <p>
                Our team of 200+ engineers and industry experts brings decades of combined 
                experience in cloud computing, data engineering, and enterprise architecture. 
                We don't just build solutions—we build lasting partnerships.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="goldOutline" size="lg">
                Our Story <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-secondary rounded-lg border border-border overflow-hidden">
              {/* Abstract geometric pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 border border-primary/30 rounded-lg rotate-45 animate-pulse" />
                  <div className="absolute inset-4 border border-primary/50 rounded-lg rotate-45" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute inset-8 bg-primary/10 rounded-lg rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground text-2xl font-light">N</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-primary rounded-full opacity-60" />
              <div className="absolute bottom-12 right-12 w-2 h-2 bg-primary rounded-full opacity-40" />
              <div className="absolute top-1/3 right-8 w-4 h-4 border border-primary rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
