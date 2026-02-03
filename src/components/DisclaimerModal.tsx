import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface DisclaimerModalProps {
  onAccept: () => void;
}

const DisclaimerModal = ({ onAccept }: DisclaimerModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-background/95 backdrop-blur-sm transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      
      {/* Modal */}
      <div 
        className={`relative z-10 w-full max-w-lg mx-4 transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="bg-card border border-border rounded-lg p-8 shadow-[0_4px_24px_-8px_hsl(0,0%,0%,0.5)]">
          {/* Header */}
          <div className="mb-6">
            <div className="w-12 h-1 bg-primary rounded-full mb-6" />
            <h2 className="text-2xl font-light tracking-tight mb-2">
              Important Legal Information
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-8">
            <div className="bg-secondary/50 rounded-md p-4 text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                The products and services described on this platform are intended exclusively for accredited and institutional investors. They may not be eligible or suitable for sale in all jurisdictions.
              </p>
              <p>
                This platform does not constitute an offer or solicitation to purchase securities in any jurisdiction where such offers are prohibited.
              </p>
              <p>
                Investment in tokenized assets involves significant risks, including the potential loss of the entire invested capital. Past performance does not guarantee future results.
              </p>
              <p>
                By proceeding, you confirm that you are an accredited investor and agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="hero" 
              size="lg" 
              className="flex-1"
              onClick={onAccept}
            >
              I Accept & Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
