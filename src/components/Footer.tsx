import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-12 sm:mt-20 safe-bottom">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* CTA Section */}
        <div className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text px-4">See DataController in Action</h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
            Join leading finance teams who trust AxionX to transform their data quality and governance
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-8 w-full sm:w-auto min-h-[48px]">
              Schedule Investor Demo
              <ArrowRight className="ml-2" size={16} />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto min-h-[48px]">
              Download Investment Deck
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 py-6 sm:py-8">
          <div className="text-center px-2">
            <div className="text-xl sm:text-2xl font-bold gradient-text mb-1">£3M Pre-Seed</div>
            <div className="text-xs sm:text-sm text-white/70">Funding Raised</div>
          </div>
          <div className="text-center px-2">
            <div className="text-xl sm:text-2xl font-bold gradient-text mb-1">£9M Valuation</div>
            <div className="text-xs sm:text-sm text-white/70">Current Value</div>
          </div>
          <div className="text-center px-2">
            <div className="text-xl sm:text-2xl font-bold gradient-text mb-1">95%</div>
            <div className="text-xs sm:text-sm text-white/70">Customer Retention</div>
          </div>
          <div className="text-center px-2">
            <div className="text-xl sm:text-2xl font-bold gradient-text mb-1">£572K</div>
            <div className="text-xs sm:text-sm text-white/70">Customer LTV</div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center pt-6 sm:pt-8 px-4">
          <div className="text-sm text-white/70">
            Contact: <a href="mailto:hello@axionx.uk" className="text-primary hover:underline break-all">hello@axionx.uk</a>
          </div>
          <div className="text-xs text-white/50 mt-2">
            © 2024 AxionX. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
