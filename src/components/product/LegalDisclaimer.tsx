import { AlertTriangle } from "lucide-react";

const LegalDisclaimer = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-medium">Legal Disclaimer</h3>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Important Notice:</strong> This website and its contents are provided for 
              informational purposes only and do not constitute an offer to sell, a solicitation of an offer to buy, or a 
              recommendation of any security or any other product or service by Nexus Technologies or any third party 
              regardless of whether such security, product or service is referenced herein.
            </p>

            <p>
              <strong className="text-foreground">Accredited Investors Only:</strong> Securities offered through this platform 
              are available exclusively to accredited investors as defined under Regulation D of the Securities Act of 1933. 
              Verification of accredited investor status is required before investment.
            </p>

            <p>
              <strong className="text-foreground">Risk Factors:</strong> All investments involve risk, including the loss of 
              principal. The value of copper and copper-backed securities can fluctuate significantly due to market conditions, 
              geopolitical events, and other factors. There is no guarantee that any investment objective will be achieved.
            </p>

            <p>
              <strong className="text-foreground">No Investment Advice:</strong> Nothing contained herein constitutes investment, 
              legal, tax, or other advice nor is to be relied upon in making an investment decision. Prospective investors should 
              consult their own legal, tax, and financial advisors before making any investment.
            </p>

            <p>
              <strong className="text-foreground">Forward-Looking Statements:</strong> Certain statements on this website may be 
              forward-looking statements that involve risks and uncertainties. Actual results may differ materially from those 
              projected. Past performance is not indicative of future results.
            </p>

            <p className="pt-4 border-t border-border text-xs">
              © 2024 Nexus Technologies. All rights reserved. Securities offered through registered broker-dealers. 
              Member FINRA/SIPC. Please review the offering circular and related risk factors before investing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;
