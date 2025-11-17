import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CaseStudyCardProps {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  delay?: number;
}

const CaseStudyCard = ({ title, industry, challenge, solution, results, delay = 0 }: CaseStudyCardProps) => {
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
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary">{industry}</Badge>
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-primary mb-2">Challenge</h4>
            <p className="text-muted-foreground text-sm">{challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-primary mb-2">Solution</h4>
            <p className="text-muted-foreground text-sm">{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-primary mb-2">Results</h4>
            <ul className="space-y-1">
              {results.map((result, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseStudyCard;
