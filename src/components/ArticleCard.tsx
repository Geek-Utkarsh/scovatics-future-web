import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Calendar, Tag } from "lucide-react";

interface ArticleCardProps {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  delay?: number;
}

const ArticleCard = ({ title, category, date, excerpt, delay = 0 }: ArticleCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <article
      ref={ref}
      className={`group relative rounded-lg bg-gradient-card border border-border/30 overflow-hidden hover-lift transition-all duration-500 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover accent */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
      
      <div className="p-6">
        {/* Meta info */}
        <div className="flex items-center gap-4 mb-4 text-xs">
          <span className="inline-flex items-center gap-1.5 text-primary bg-primary/10 px-2.5 py-1 rounded-full font-medium">
            <Tag className="h-3 w-3" />
            {category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-silver-dark">
            <Calendar className="h-3 w-3" />
            {formatDate(date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-silver-dark text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Read more */}
        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          <span>Read More</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
