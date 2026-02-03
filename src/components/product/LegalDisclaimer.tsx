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
              This offering is available exclusively to accredited and institutional investors. Investment in tokenized assets involves significant risks, including the potential total loss of invested capital.
            </p>

            <p>
              This material does not constitute an offer or solicitation in any jurisdiction where such offers are prohibited. Prospective investors should conduct their own due diligence and consult with qualified financial, legal, and tax advisors before making any investment decision.
            </p>

            <p>
              Details regarding the mining partner and specific project information are confidential and available upon request following investor verification.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-border text-xs text-muted-foreground space-y-2">
            <p>© 2026 Toto Finance Inc. Strictly Confidential.</p>
            <p>
              <a href="https://totofinance.co" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">TotoFinance.co</a>
              {" | "}
              <a href="https://twitter.com/TotoFinance" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">@TotoFinance</a>
              {" | "}
              Contact: <a href="mailto:investor@totofinance.co" className="text-primary hover:underline">investor@totofinance.co</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;
