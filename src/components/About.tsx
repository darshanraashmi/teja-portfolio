import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Code, Cloud, Shield, Smartphone, Award, LinkedinIcon, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

const skillHighlights = [
  {
    icon: Cloud,
    title: "Cloud Expertise",
    blurb: "AWS and Azure, designing scalable infrastructure",
    tags: ["AWS Lambda", "Azure Functions", "API Gateway"],
  },
  {
    icon: Code,
    title: "Development",
    blurb: "Full-stack, serverless-first, modern frameworks",
    tags: ["Node.js", "Python", "React"],
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    blurb: "Best practices and CI/CD for reliable delivery",
    tags: ["CircleCI", "Terraform", "Security"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Backend",
    blurb: "Cross-platform apps paired with Python APIs",
    tags: ["Expo", "React Native", "Python"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16">
          <span className="section-eyebrow">Who I Am</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Passionate about cloud technologies and serverless architectures
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio section */}
          <Reveal>
            <Card className="p-8 border-border/80 card-shadow">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4 bg-accent-cyan/20 text-accent-cyan">
                  Professional Bio
                </Badge>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                AWS Certified Solutions Architect with
                <span className="text-accent-cyan font-semibold"> 10+ years</span> designing, operating, and
                optimizing secure cloud infrastructure across
                <span className="text-accent-cyan font-semibold"> AWS and Azure</span> for U.S. enterprise clients
                spanning trade finance, M&amp;A platform integration, ESG analytics, and blockchain systems. 
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Track record includes a <span className="text-accent-cyan font-semibold">zero-downtime, 400TB+ PostgreSQL migration</span> to
                Amazon RDS, <span className="text-accent-cyan font-semibold">35–50% reductions</span> in incident resolution
                time and downtime, and <span className="text-accent-cyan font-semibold">30% cost savings</span> through
                FinOps practices.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Experienced collaborating daily with Canada-based engineering and product teams — comfortable
                working async across time zones and delivering to North American business requirements.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Beyond core infrastructure, I also ship <span className="text-accent-cyan font-semibold">cross-platform mobile apps</span> with
                <span className="text-accent-cyan font-semibold"> React Native/Expo and Flutter</span> — end-to-end, including
                signing and Google Play Store production releases — paired with
                <span className="text-accent-cyan font-semibold"> Python</span>-powered backend APIs.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-accent-cyan/10 rounded-lg border border-accent-cyan/30">
                  <Award className="h-6 w-6 text-accent-cyan flex-shrink-0" />
                  <span className="text-lg font-medium">AWS Certified Solutions Architect – Associate</span>
                </div>

                {/* <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <MapPin className="h-6 w-6 text-accent-cyan flex-shrink-0" />
                  <span className="text-lg font-medium">Ottawa, ON, Canada</span>
                </div> */}

                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent-cyan flex-shrink-0" />
                  <span className="text-lg font-medium">B.Tech Graduate</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10"
                  onClick={() => window.open('https://linkedin.com/in/teja-darshan', '_blank')}
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  View LinkedIn Profile
                </Button>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-accent-cyan/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent-cyan">400TB+</div>
                    <div className="text-sm text-muted-foreground">Data Migrated (Zero Loss)</div>
                  </div>
                  <div className="text-center p-4 bg-accent-cyan/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent-cyan">40%</div>
                    <div className="text-sm text-muted-foreground">RTO/RPO Reduction</div>
                  </div>
                </div>
              </div>

              {/* Key Highlights Section */}
              <div className="mt-8 p-6 bg-secondary/40 rounded-lg border border-border">
                <h4 className="text-lg font-semibold mb-4 text-accent-cyan">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Reduced AWS cloud spends by 45% through architecture optimization, Reserved Instance strategy, and cost-awareness training across teams</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Architecture & Best Practices: Serverless Architecture, High Availability Design, Disaster Recovery Implementation, Cost Optimization, Multi-region Deployments</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Financial Management & FinOps implementation for enterprise-level cost optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Monitoring & Observability: Comprehensive monitoring solutions using CloudWatch, Datadog, and Sumo Logic</span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Skills highlights — one integrated block instead of 4 identical cards */}
          <Reveal delay={100}>
            <Card className="p-6 lg:p-8 border-border/80 card-shadow divide-y divide-border">
              {skillHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 ${index === 0 ? "pb-5" : "py-5"} ${
                      index === skillHighlights.length - 1 ? "pb-0" : ""
                    }`}
                  >
                    <div className="p-2.5 rounded-md bg-accent-cyan/10 flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent-cyan" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.blurb}</p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground/80">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;