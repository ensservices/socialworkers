import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import testimonialWoman from "@assets/generated_images/resident_testimonial_woman.png";
import testimonialElderly from "@assets/generated_images/resident_testimonial_elderly.png";

const testimonials = [
  {
    name: "Priya Mehta",
    role: "Resident since 2015",
    image: testimonialWoman,
    quote: "The transformation in our community has been remarkable. From better facilities to inclusive programs, the RWA leadership truly cares about every resident's well-being.",
    testId: "testimonial-priya",
  },
  {
    name: "Mr. Ashok Verma",
    role: "Senior Resident",
    image: testimonialElderly,
    quote: "The cultural programs organized for senior citizens have brought so much joy to our lives. It's wonderful to see young and old coming together as one big family.",
    testId: "testimonial-ashok",
  },
  {
    name: "Neha Singh",
    role: "Parent & Volunteer",
    image: null,
    quote: "The children's library initiative has been a game-changer for young families. My kids spend hours reading and learning, and the sports programs keep them active and engaged.",
    testId: "testimonial-neha",
  },
  {
    name: "Dr. Suresh Patel",
    role: "Health Camp Coordinator",
    image: null,
    quote: "The free health checkup camps have helped identify early health issues for many residents. This proactive approach to community health is commendable.",
    testId: "testimonial-suresh",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-testimonials-title">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Hear from residents about their experiences and the positive impact of our initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.testId} className="p-6" data-testid={testimonial.testId}>
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    {testimonial.image && <AvatarImage src={testimonial.image} alt={testimonial.name} />}
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold" data-testid={`${testimonial.testId}-name`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`${testimonial.testId}-role`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic" data-testid={`${testimonial.testId}-quote`}>
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
