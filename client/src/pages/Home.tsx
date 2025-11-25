import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import SocialInitiatives from "@/components/SocialInitiatives";
import PresidentMessage from "@/components/PresidentMessage";
import EventsTimeline from "@/components/EventsTimeline";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ImpactMetrics />
        <SocialInitiatives />
        <PresidentMessage />
        <EventsTimeline />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
