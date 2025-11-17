import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CaseStudyCard from "@/components/CaseStudyCard";

const CaseStudies = () => {
  const cases = [
    {
      title: "Global Bank Fraud Detection",
      industry: "Financial Services",
      challenge: "Reducing false positives in fraud detection while maintaining high accuracy.",
      solution: "Implemented ML-based anomaly detection with 40% reduction in false positives.",
      results: ["$2M annual savings", "99.7% accuracy", "Real-time detection"]
    },
    {
      title: "Healthcare Provider Analytics",
      industry: "Healthcare",
      challenge: "Optimizing patient flow and reducing wait times across 50+ facilities.",
      solution: "Deployed predictive analytics platform for resource allocation and scheduling.",
      results: ["30% wait time reduction", "20% capacity increase", "Higher patient satisfaction"]
    },
    {
      title: "E-commerce Personalization",
      industry: "Retail",
      challenge: "Increasing conversion rates through personalized product recommendations.",
      solution: "Built deep learning recommendation engine analyzing user behavior patterns.",
      results: ["45% conversion increase", "35% higher AOV", "2x engagement rate"]
    },
    {
      title: "Manufacturing Predictive Maintenance",
      industry: "Manufacturing",
      challenge: "Preventing equipment failures and reducing downtime costs.",
      solution: "IoT sensor integration with predictive maintenance algorithms.",
      results: ["60% downtime reduction", "$5M cost savings", "Extended equipment life"]
    }
  ];

  return (
    <>
      <Hero
        title="Case Studies"
        subtitle="Real results from organizations that transformed their business with data."
        showImage={false}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((study, index) => (
            <CaseStudyCard key={index} {...study} delay={(index % 2) * 150} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default CaseStudies;
