import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

const Careers = () => {
  const openings = [
    {
      title: "Senior Data Scientist",
      department: "Data Science",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our data science team to build cutting-edge ML models and analytics solutions."
    },
    {
      title: "Machine Learning Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and deploy scalable ML systems that power our analytics platform."
    },
    {
      title: "Analytics Consultant",
      department: "Consulting",
      location: "New York, NY",
      type: "Full-time",
      description: "Work directly with clients to deliver data-driven insights and solutions."
    },
    {
      title: "Data Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      description: "Build and maintain robust data pipelines and infrastructure at scale."
    },
    {
      title: "Product Manager - Analytics",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Define product strategy and roadmap for our analytics platform."
    },
    {
      title: "Business Intelligence Analyst",
      department: "Analytics",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Create insightful dashboards and reports that drive business decisions."
    }
  ];

  return (
    <>
      <Hero
        title="Join Our Team"
        subtitle="Help us shape the future of data analytics and AI. We're looking for talented individuals who are passionate about innovation."
        showImage={false}
      />

      <Section>
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Work at Scovatics?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Innovative</div>
              <p className="text-muted-foreground text-sm">Work on cutting-edge AI and analytics projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Growth</div>
              <p className="text-muted-foreground text-sm">Continuous learning and career development</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Impact</div>
              <p className="text-muted-foreground text-sm">Make a real difference for clients worldwide</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
        <div className="grid gap-6">
          {openings.map((job, index) => (
            <Card key={index} className="bg-gradient-card border-border hover-lift">
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                  </div>
                  <Button size="sm">Apply Now</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Careers;
