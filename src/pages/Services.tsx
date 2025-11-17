import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { Brain, BarChart3, Target, Cpu, Database, Cloud } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your specific business challenges and datasets."
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with advanced BI dashboards."
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes with state-of-the-art predictive models."
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows."
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data pipelines and architectures for scalable analytics."
    },
    {
      icon: Cloud,
      title: "Cloud Analytics",
      description: "Leverage cloud infrastructure for scalable, cost-effective analytics solutions."
    }
  ];

  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive analytics solutions designed to accelerate your digital transformation."
        ctaText="Contact Sales"
        ctaLink="/contact"
        showImage={false}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FeatureCard key={index} {...service} />
          ))}
        </div>
      </Section>

      <Section className="bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-2">Discovery & Assessment</h3>
                <p className="text-muted-foreground">
                  We begin by understanding your business goals, data landscape, and specific challenges.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-2">Solution Design</h3>
                <p className="text-muted-foreground">
                  Our experts design a customized solution architecture tailored to your needs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-2">Implementation</h3>
                <p className="text-muted-foreground">
                  We deploy and integrate the solution with minimal disruption to your operations.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-2">Optimization & Support</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring and optimization to ensure maximum value and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
