import { Card } from "@/components/ui/card";
import presidentImage from "@assets/generated_images/president_professional_portrait.png";

export default function PresidentMessage() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-president-title">
              President's Message
            </h2>
            
            <Card className="p-6 mb-6 border-l-4 border-l-primary">
              <p className="text-lg italic text-muted-foreground" data-testid="text-president-quote">
                "A community thrives when its members come together with a shared vision of progress and compassion. Our mission is to create an environment where every resident feels valued, heard, and empowered."
              </p>
            </Card>

            <div className="space-y-4 text-muted-foreground">
              <p data-testid="text-president-message-1">
                Since taking on the role of RWA President in 2018, it has been my privilege to serve this wonderful community. Together, we have achieved remarkable milestones - from establishing essential community facilities to organizing programs that bring us closer as neighbors.
              </p>
              <p data-testid="text-president-message-2">
                Our focus remains on creating inclusive opportunities for all age groups, maintaining our neighborhood's beauty, and ensuring the well-being of every resident. The success of our initiatives is a testament to the dedication of our volunteers and the active participation of community members.
              </p>
              <p data-testid="text-president-message-3">
                I invite you to join us in our ongoing efforts to make our community an even better place to call home.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="font-semibold text-lg" data-testid="text-president-name">
                Deepak Kumar
              </div>
              <div className="text-sm text-muted-foreground" data-testid="text-president-designation">
                President, Green Valley RWA
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={presidentImage}
                alt="President Deepak Kumar"
                className="w-full h-auto"
                data-testid="img-president"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
