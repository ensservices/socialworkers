import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    toast({
      title: "Subscribed!",
      description: "You'll receive our monthly newsletter.",
    });
    setEmail("");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="text-footer-about">About RWA</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Dedicated to building a vibrant, inclusive community through meaningful initiatives and responsible leadership.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="text-footer-quick-links">Quick Links</h3>
            <nav className="flex flex-col items-start gap-2">
              <button
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => scrollToSection("about")}
                data-testid="link-footer-about"
              >
                About President
              </button>
              <button
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => scrollToSection("initiatives")}
                data-testid="link-footer-initiatives"
              >
                Our Initiatives
              </button>
              <button
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => scrollToSection("events")}
                data-testid="link-footer-events"
              >
                Events
              </button>
              <button
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => scrollToSection("contact")}
                data-testid="link-footer-contact"
              >
                Contact Us
              </button>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="text-footer-contact">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p data-testid="text-footer-phone">+91 98765 43210</p>
              <p data-testid="text-footer-email">president@greenvalleyrwa.com</p>
              <p data-testid="text-footer-address">
                Green Valley Residency<br />
                Sector 15, New Delhi
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="text-footer-newsletter">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest news and events
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter"
              />
              <Button type="submit" className="w-full" data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 Green Valley RWA. All rights reserved.
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" data-testid="button-facebook">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-instagram">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-linkedin">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
