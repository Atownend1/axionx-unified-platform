import heroBackground from "@/assets/hero-background.png";
import dayToDayLogo from "@/assets/day-to-day-logo.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const MarketplacePage = () => {
  const toolCategories = [
    {
      id: 1,
      title: "Finance & Accounting",
      description: "Professional-grade financial tools",
      featured: "CPM Chatbot Widget",
      toolCount: 12,
      isNew: false,
      isPopular: true,
    },
    {
      id: 2,
      title: "Healthcare & Wellness",
      description: "Clinical and therapeutic solutions",
      featured: "Assessment Creator for Therapists",
      toolCount: 8,
      isNew: true,
      isPopular: false,
    },
    {
      id: 3,
      title: "Sales & Marketing",
      description: "Revenue acceleration tools",
      featured: "Proposal Generator",
      toolCount: 15,
      isNew: false,
      isPopular: true,
    },
    {
      id: 4,
      title: "Legal & Compliance",
      description: "Risk and regulatory tools",
      featured: "Contract Analyzer",
      toolCount: 9,
      isNew: false,
      isPopular: false,
    },
    {
      id: 5,
      title: "HR & Recruitment",
      description: "Talent management solutions",
      featured: "Interview Question Builder",
      toolCount: 11,
      isNew: true,
      isPopular: false,
    },
    {
      id: 6,
      title: "Education & Training",
      description: "Learning enablement tools",
      featured: "Course Content Generator",
      toolCount: 14,
      isNew: false,
      isPopular: true,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with wave lines */}
      <div className="fixed inset-0 z-0">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover opacity-100"
        />
      </div>


      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 pt-32 pb-20">
          <div className="text-center space-y-8 max-w-7xl mx-auto animate-fade-in">
            {/* Logo */}
            <div className="flex justify-center mb-12">
              <img
                src={dayToDayLogo}
                alt="Day to Day AI"
                className="h-auto drop-shadow-2xl animate-fade-in"
                style={{ width: "1600px", maxWidth: "90vw" }}
              />
            </div>

            {/* Tagline */}
            <p className="text-2xl md:text-4xl font-sans text-white/90 drop-shadow-lg mb-12">
              Your days could be easier. Try our solutions.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-10 py-7 text-lg font-bold rounded-full shadow-[0_10px_40px_0_rgba(199,125,255,0.5)] backdrop-blur-sm border-2 border-white/30 transition-all duration-500 hover:shadow-[0_15px_60px_0_rgba(199,125,255,0.7)] hover:scale-105"
            >
              Discover Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </section>

        {/* Tool Categories Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolCategories.map((category) => (
                <Card
                  key={category.id}
                  className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] hover:shadow-[0_12px_48px_0_rgba(199,125,255,0.35)] transition-all duration-500 cursor-pointer transform hover:scale-[1.03] hover:-translate-y-2 rounded-2xl"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/15 group-hover:via-accent/10 group-hover:to-primary/15 transition-all duration-500 pointer-events-none" />
                  
                  <CardHeader className="relative z-10 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex gap-2">
                        {category.isNew && (
                          <Badge className="bg-badge/90 text-white text-xs font-semibold backdrop-blur-sm border border-white/30 shadow-lg px-2 py-1">
                            New
                          </Badge>
                        )}
                        {category.isPopular && (
                          <Badge className="bg-primary/80 text-white text-xs font-semibold backdrop-blur-sm border border-white/30 shadow-lg px-2 py-1">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-sans font-bold text-white group-hover:text-primary transition-colors duration-300 mb-2">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-accent text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 px-6 pb-6">
                    <div className="space-y-3">
                      <div className="text-xs text-accent/80 font-medium">
                        Featured: {category.featured}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-white">
                            {category.toolCount}
                          </span>
                          <span className="text-xs text-white/60">
                            tools
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-white hover:bg-primary/20 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 text-xs font-semibold"
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarketplacePage;
