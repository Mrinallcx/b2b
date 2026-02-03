import { Button } from "@/components/ui/button";
import { Lock, Info } from "lucide-react";

const terms = [
  { label: "Issuer", value: "NYSE-Listed Mining Company (Confidential)" },
  { label: "Asset Type", value: "In-Ground Copper Reserves" },
  { label: "Token Name", value: "COPTT" },
  { label: "Token Standard", value: "ERC-20 (Ethereum)" },
  { label: "Total Supply", value: "300,000,000" },
  { label: "Unit Representation", value: "1 lb LME Grade A Copper" },
  { label: "Offering Price", value: "30% Discount to Futures" },
  { label: "Example Price", value: "$5.80/lb futures → $4.06/COPTT" },
  { label: "Redemption Term", value: "48 Months (Amortized)" },
  { label: "Physical Settlement", value: "Optional (Warehouse Warrants)" },
  { label: "Investor Eligibility", value: "Accredited / Institutional Only" },
  { label: "Compliance", value: "KYC/AML Required" },
  { label: "Jurisdiction", value: "Details Confidential" },
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
          <Lock className="w-4 h-4" />
          Request Access
        </Button>
        <Button variant="outline" className="w-full">
          Download Overview
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
