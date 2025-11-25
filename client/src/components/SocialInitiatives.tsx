import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cleanlinessImage from "@assets/generated_images/community_cleanliness_initiative.png";
import culturalImage from "@assets/generated_images/senior_citizens_cultural_event.png";
import libraryImage from "@assets/generated_images/community_library_for_children.png";
import healthImage from "@assets/generated_images/free_health_checkup_camp.png";
import sportsImage from "@assets/generated_images/community_sports_event.png";
import bloodImage from "@assets/generated_images/blood_donation_drive.png";

const initiatives = [
  {
    title: "Community Cleanliness Drive",
    description: "Regular clean-up campaigns keeping our neighborhood pristine and green.",
    image: cleanlinessImage,
    testId: "initiative-cleanliness",
  },
  {
    title: "Senior Citizens Cultural Programs",
    description: "Monthly cultural events celebrating traditions and bringing joy to our elders.",
    image: culturalImage,
    testId: "initiative-cultural",
  },
  {
    title: "Children's Library Initiative",
    description: "A well-stocked library promoting reading and learning among young minds.",
    image: libraryImage,
    testId: "initiative-library",
  },
  {
    title: "Free Health Checkup Camps",
    description: "Quarterly health camps providing free medical checkups for all residents.",
    image: healthImage,
    testId: "initiative-health",
  },
  {
    title: "Sports & Fitness Programs",
    description: "Promoting active lifestyles through tournaments and fitness activities.",
    image: sportsImage,
    testId: "initiative-sports",
  },
  {
    title: "Blood Donation Drives",
    description: "Life-saving blood donation camps organized in partnership with local hospitals.",
    image: bloodImage,
    testId: "initiative-blood",
  },
];

export default function SocialInitiatives() {
  return (
    <section id="initiatives" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-initiatives-title">
            Our Social Initiatives
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-initiatives-subtitle">
            Making a difference through dedicated programs that enhance community life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative) => (
            <Card key={initiative.title} className="overflow-hidden hover-elevate" data-testid={initiative.testId}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl" data-testid={`${initiative.testId}-title`}>
                  {initiative.title}
                </CardTitle>
                <CardDescription data-testid={`${initiative.testId}-description`}>
                  {initiative.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" data-testid={`${initiative.testId}-button`}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
