import { Users, Calendar, Heart, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const metrics = [
  { icon: Award, value: "45+", label: "Projects Completed", testId: "metric-projects" },
  { icon: Users, value: "2,500+", label: "Families Helped", testId: "metric-families" },
  { icon: Calendar, value: "120+", label: "Events Organized", testId: "metric-events" },
  { icon: Heart, value: "500+", label: "Active Volunteers", testId: "metric-volunteers" },
];

export default function ImpactMetrics() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <Card key={metric.label} className="p-6 text-center" data-testid={metric.testId}>
              <metric.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold text-foreground mb-2" data-testid={`${metric.testId}-value`}>
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground" data-testid={`${metric.testId}-label`}>
                {metric.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
