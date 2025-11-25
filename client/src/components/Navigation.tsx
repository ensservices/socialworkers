import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/image - 2025-11-24T184802.399_1763990304820.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <button 
              className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-home"
            >
              <img src={logoImage} alt="Deepak Kumar" className="h-8" />
            </button>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              data-testid="button-about"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("initiatives")}
              data-testid="button-initiatives"
            >
              Initiatives
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("events")}
              data-testid="button-events"
            >
              Events
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("testimonials")}
              data-testid="button-testimonials"
            >
              Testimonials
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-contact-nav"
            >
              Contact
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("about")}
              data-testid="button-about-mobile"
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("initiatives")}
              data-testid="button-initiatives-mobile"
            >
              Initiatives
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("events")}
              data-testid="button-events-mobile"
            >
              Events
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("testimonials")}
              data-testid="button-testimonials-mobile"
            >
              Testimonials
            </Button>
            <Button
              className="w-full justify-start"
              onClick={() => scrollToSection("contact")}
              data-testid="button-contact-mobile"
            >
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
