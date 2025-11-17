import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ArticleCard from "@/components/ArticleCard";

const Resources = () => {
  const articles = [
    {
      title: "The Future of AI in Business Analytics",
      category: "AI & ML",
      date: "2024-11-10",
      excerpt: "Explore how artificial intelligence is reshaping the landscape of business analytics and decision-making."
    },
    {
      title: "Building Scalable Data Pipelines",
      category: "Data Engineering",
      date: "2024-11-05",
      excerpt: "Best practices for designing and implementing data pipelines that scale with your business needs."
    },
    {
      title: "Predictive Analytics: A Beginner's Guide",
      category: "Analytics",
      date: "2024-10-28",
      excerpt: "Learn the fundamentals of predictive analytics and how to start implementing it in your organization."
    },
    {
      title: "Data Security in the Cloud Era",
      category: "Security",
      date: "2024-10-20",
      excerpt: "Understanding best practices for maintaining data security when migrating analytics to the cloud."
    },
    {
      title: "ROI of Business Intelligence Platforms",
      category: "Business Strategy",
      date: "2024-10-15",
      excerpt: "Quantifying the business value and return on investment of modern BI implementations."
    },
    {
      title: "Real-Time Analytics at Scale",
      category: "Technology",
      date: "2024-10-08",
      excerpt: "Technical approaches and architecture patterns for implementing real-time analytics systems."
    }
  ];

  return (
    <>
      <Hero
        title="Resources & Insights"
        subtitle="Stay informed with the latest trends, best practices, and thought leadership in data analytics."
        showImage={false}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} delay={index * 100} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Resources;
