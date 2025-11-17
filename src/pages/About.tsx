import Hero from "@/components/Hero";
import Section from "@/components/Section";

const About = () => {
  return (
    <>
      <Hero
        title="About Scovatics"
        subtitle="Pioneering the future of data analytics and artificial intelligence."
        showImage={false}
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Scovatics, we believe in the transformative power of data. Our mission is to help organizations unlock the full potential of their data through innovative AI-powered analytics solutions that drive real business value.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded by data scientists and industry veterans, Scovatics emerged from a shared vision: to make advanced analytics accessible and actionable for businesses of all sizes. What started as a small team has grown into a leading analytics platform trusted by enterprises worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve clients across multiple industries, from healthcare to finance, helping them navigate the complexities of big data and AI with confidence.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2 text-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly pushing boundaries to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="p-6 bg-gradient-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2 text-primary">Integrity</h3>
                <p className="text-muted-foreground">
                  Building trust through transparency and ethical practices.
                </p>
              </div>
              <div className="p-6 bg-gradient-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2 text-primary">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to delivering exceptional quality in everything we do.
                </p>
              </div>
              <div className="p-6 bg-gradient-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2 text-primary">Partnership</h3>
                <p className="text-muted-foreground">
                  Working collaboratively with clients to achieve shared success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
