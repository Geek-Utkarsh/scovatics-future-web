import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wireframe.jpg";
import { useParallax } from "@/hooks/useParallax";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  showImage?: boolean;
}

const Hero = ({ title, subtitle, ctaText, ctaLink, showImage = true }: HeroProps) => {
  const parallaxOffset = useParallax({ speed: 0.5, enabled: showImage });

  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {showImage && (
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroImage}
            alt="AI Wireframe"
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          />
        </div>
      )}
      
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow animate-fade-in-up">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="glow-teal" asChild>
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
