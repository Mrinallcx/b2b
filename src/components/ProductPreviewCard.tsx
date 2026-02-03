import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "$2B+", label: "Launch Target" },
  { value: "300M", label: "Token Supply" },
  { value: "30%", label: "Discount to Futures" },
  { value: "48 Mo", label: "Redemption Term" },
];

const ProductPreviewCard = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="p-8 text-center">
              <div className="text-5xl md:text-6xl font-light text-gradient-gold mb-2">$COPTT</div>
              <div className="text-sm text-muted-foreground">Tokenized Copper Reserve</div>
            </div>

            {/* Stats Grid */}
            <div className="px-6 pb-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-secondary/50 rounded-lg border border-border"
                  >
                    <div className="text-2xl font-light text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 pt-0">
              <Button variant="hero" className="w-full" asChild>
                <Link to="/product">
                  View product
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreviewCard;
