import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ArticleCardProps {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  delay?: number;
}

const ArticleCard = ({ title, category, date, excerpt, delay = 0 }: ArticleCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className="bg-gradient-card border-border hover-lift cursor-pointer h-full">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary">{category}</Badge>
          </div>
          <CardTitle className="text-xl hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-muted-foreground">
            {excerpt}
          </CardDescription>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(date)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleCard;
