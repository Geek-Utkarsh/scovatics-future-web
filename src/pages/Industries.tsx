import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Heart, ShoppingCart, Factory, Landmark, Rocket } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Risk management, fraud detection, and algorithmic trading solutions for banks and fintech."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient analytics, drug discovery acceleration, and operational efficiency improvements."
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Customer behavior analytics, inventory optimization, and personalized recommendations."
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Predictive maintenance, supply chain optimization, and quality control automation."
    },
    {
      icon: Building2,
      title: "Enterprise",
      description: "Business intelligence, workforce analytics, and strategic decision support systems."
    },
    {
      icon: Rocket,
      title: "Technology",
      description: "Product analytics, user behavior insights, and growth optimization strategies."
    }
  ];

  return (
    <>
      <Hero
        title="Industries We Serve"
        subtitle="Delivering specialized analytics solutions across diverse sectors."
        showImage={false}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="bg-gradient-card border-border hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default Industries;
