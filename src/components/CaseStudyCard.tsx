import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight, Building2, Target, TrendingUp } from "lucide-react";

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
      className={`group relative rounded-lg bg-gradient-card border border-border/30 overflow-hidden hover-lift transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary to-accent" />
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full mb-2">
              <Building2 className="h-3 w-3" />
              {industry}
            </span>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <ArrowUpRight className="h-5 w-5 text-silver-dark group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>

        {/* Details */}
        <div className="space-y-4 text-sm">
          <div>
            <div className="flex items-center gap-2 text-silver-metallic mb-1">
              <Target className="h-4 w-4 text-primary/70" />
              <span className="font-medium">Challenge</span>
            </div>
            <p className="text-silver-dark pl-6">{challenge}</p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 text-silver-metallic mb-1">
              <span className="font-medium pl-6">Solution</span>
            </div>
            <p className="text-silver-dark pl-6">{solution}</p>
          </div>
          
          <div className="pt-2 border-t border-border/30">
            <div className="flex items-center gap-2 text-primary mb-2">
              <TrendingUp className="h-4 w-4" />
              <span className="font-semibold">Results</span>
            </div>
            <ul className="space-y-1 pl-6">
              {results.map((result, i) => (
                <li key={i} className="text-foreground text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
