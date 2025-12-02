import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

const Section = ({ children, title, subtitle, className = "", dark = false }: SectionProps) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className={`py-20 md:py-28 ${dark ? 'bg-card' : 'bg-background'} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div
            ref={titleRef}
            className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient-teal">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-silver-metallic text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div
          ref={contentRef}
          className={`transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
