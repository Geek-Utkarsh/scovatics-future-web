import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const IndustryCard = ({ icon: Icon, title, description, delay = 0 }: IndustryCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className="bg-gradient-card border-border hover-lift h-full">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndustryCard;
