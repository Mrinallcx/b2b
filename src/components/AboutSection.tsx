import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              About Toto Finance
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Toto Finance turns real-world assets into asset-backed, instantly transferable digital tokens.
              </p>
              <p>
                We tokenize gold, silver, copper, rare earth minerals, oil, and energy — with a focus on in-ground reserves. Our platform enables global markets to move at digital speed with transparent, verifiable ownership.
              </p>
              <p>
                We pioneered the world's first tokenized diamond marketplace. Today, as Toto Finance, we're expanding that infrastructure across global commodities and strategic materials essential for AI, energy transition, and national security.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="goldOutline" size="lg" asChild>
                <Link to="/product">
                  Our Story <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Element - About image */}
          <div className="relative">
            <div className="aspect-square rounded-lg border border-border overflow-hidden bg-secondary">
              <img
                src="/b2b.webp"
                alt="Toto Finance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
