import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { Brain, TrendingUp, Shield, Zap, Database, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Leverage cutting-edge artificial intelligence to uncover hidden patterns in your data."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with advanced predictive modeling."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance ensuring your data remains protected."
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Process and analyze massive datasets in real-time for instant insights."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly integrate with existing systems and data sources."
    },
    {
      icon: LineChart,
      title: "Custom Dashboards",
      description: "Visualize your data with beautiful, customizable analytics dashboards."
    }
  ];

  return (
    <>
      <Hero
        title="Transform Data Into Intelligence"
        subtitle="Harness the power of AI and advanced analytics to drive your business forward in the digital age."
        ctaText="Explore Solutions"
        ctaLink="/services"
      />

      <Section
        title="Why Choose Scovatics"
        subtitle="We combine cutting-edge technology with deep industry expertise to deliver solutions that matter."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      <Section className="bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join industry leaders who trust Scovatics for their data analytics needs.
          </p>
          <Button size="lg" className="glow-teal" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;
