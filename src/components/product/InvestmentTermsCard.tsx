import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";

const terms = [
  { label: "Security Type", value: "Digital Security Token" },
  { label: "Underlying Asset", value: "Physical Copper" },
  { label: "Minimum Investment", value: "$1,000" },
  { label: "Target Raise", value: "$50,000,000" },
  { label: "Token Price", value: "$100 per token" },
  { label: "Projected Yield", value: "8.5% p.a." },
  { label: "Investment Term", value: "24 months" },
  { label: "Distribution", value: "Quarterly" },
  { label: "Custody", value: "LME-Approved Warehouse" },
  { label: "Auditor", value: "Deloitte & Touche" },
  { label: "Legal Structure", value: "Reg D 506(c)" },
  { label: "Investor Type", value: "Accredited Only" },
];

const InvestmentTermsCard = () => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <h3 className="text-lg font-medium">Investment Terms</h3>
        <p className="text-sm opacity-90">Key offering details</p>
      </div>

      {/* Terms Table */}
      <div className="divide-y divide-border">
        {terms.map((term, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors duration-200"
          >
            <span className="text-sm text-muted-foreground">{term.label}</span>
            <span className="text-sm font-medium text-right">{term.value}</span>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="p-4 bg-secondary/30 border-t border-border">
        <Button variant="hero" className="w-full mb-3">
          Invest Now
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button variant="outline" className="w-full">
          Download Term Sheet
        </Button>
        
        <div className="flex items-start gap-2 mt-4 p-3 bg-background rounded-lg">
          <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            Investment involves risk. Past performance is not indicative of future results. 
            Please review all offering documents before investing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTermsCard;
