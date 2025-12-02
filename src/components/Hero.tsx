import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useParallax } from "@/hooks/useParallax";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  showImage?: boolean;
}

const Hero = ({ title, subtitle, ctaText, ctaLink, showImage = true }: HeroProps) => {
  const parallaxOffset = useParallax({ speed: 0.3, enabled: showImage });

  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {showImage && (
        <>
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
            style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-[80px]"
            style={{ transform: `translateY(${parallaxOffset * 0.7}px)` }}
          />
        </>
      )}
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient-teal">{title}</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-silver-metallic mb-10 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" 
            style={{ animationDelay: '0.2s' }}
          >
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="glow-teal group px-8" asChild>
                <Link to={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
