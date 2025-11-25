import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/rwa_president_with_community.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" data-testid="text-hero-title">
          Serving Our Community with Dedication
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
          Building a stronger, more connected community through meaningful social initiatives and inclusive leadership
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary/90 hover:bg-primary backdrop-blur-sm border border-primary-border"
            data-testid="button-get-involved"
          >
            Get Involved
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById("initiatives");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/30 text-white"
            data-testid="button-view-initiatives"
          >
            View Our Work
          </Button>
        </div>
        <p className="mt-8 text-white/80 text-sm" data-testid="text-serving-since">
          Serving Green Valley Residency since 2018
        </p>
      </div>
    </section>
  );
}
