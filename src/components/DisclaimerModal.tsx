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
              Welcome
            </h2>
            <p className="text-muted-foreground text-sm">
              Please review and accept our terms before continuing
            </p>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-8">
            <div className="bg-secondary/50 rounded-md p-4 text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">
                By accessing this website, you acknowledge and agree to the following:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>The information provided is for general purposes only</li>
                <li>We collect cookies and analytics data to improve your experience</li>
                <li>You agree to our Privacy Policy and Terms of Service</li>
                <li>All content is protected under applicable copyright laws</li>
              </ul>
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
              Accept & Continue
            </Button>
          </div>

          {/* Footer note */}
          <p className="text-xs text-muted-foreground mt-4 text-center">
            By clicking "Accept & Continue", you agree to our terms
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
