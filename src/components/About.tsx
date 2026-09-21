import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Code, Cloud, Shield, Smartphone, Award, LinkedinIcon, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about cloud technologies and serverless architectures
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio section */}
          <Reveal>
            <Card className="p-8 gradient-card border-accent-cyan/20 card-shadow">
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
                spanning trade finance, M&amp;A platform integration, ESG analytics, and blockchain systems. Based in
                Ottawa, ON, Canada, and authorized to work on a valid work permit.
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

                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <MapPin className="h-6 w-6 text-accent-cyan flex-shrink-0" />
                  <span className="text-lg font-medium">Ottawa, ON, Canada — Authorized to work (Work Permit)</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent-cyan flex-shrink-0" />
                  <span className="text-lg font-medium">B.Tech Graduate</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-accent-purple/30 text-accent-purple hover:bg-accent-purple/10"
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
                  <div className="text-center p-4 bg-accent-purple/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent-purple">40%</div>
                    <div className="text-sm text-muted-foreground">RTO/RPO Reduction</div>
                  </div>
                </div>
              </div>

              {/* Key Highlights Section */}
              <div className="mt-8 p-6 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 rounded-lg border border-accent-cyan/20">
                <h4 className="text-lg font-semibold mb-4 text-accent-cyan">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Reduced AWS cloud spends by 45% through architecture optimization, Reserved Instance strategy, and cost-awareness training across teams</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Architecture & Best Practices: Serverless Architecture, High Availability Design, Disaster Recovery Implementation, Cost Optimization, Multi-region Deployments</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Financial Management & FinOps implementation for enterprise-level cost optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Monitoring & Observability: Comprehensive monitoring solutions using CloudWatch, Datadog, and Sumo Logic</span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Skills highlights */}
          <div className="space-y-6">
            <Reveal delay={0}>
              <Card className="p-6 gradient-card border-accent-purple/20 hover:glow-effect transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent-cyan/20 rounded-lg">
                    <Cloud className="h-6 w-6 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold">Cloud Expertise</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Deep expertise in AWS and Azure cloud platforms, designing scalable infrastructures
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-accent-cyan/30 text-accent-cyan">AWS Lambda</Badge>
                  <Badge variant="outline" className="border-accent-cyan/30 text-accent-cyan">Azure Functions</Badge>
                  <Badge variant="outline" className="border-accent-cyan/30 text-accent-cyan">API Gateway</Badge>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={100}>
              <Card className="p-6 gradient-card border-accent-blue/20 hover:glow-effect transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent-purple/20 rounded-lg">
                    <Code className="h-6 w-6 text-accent-purple" />
                  </div>
                  <h3 className="text-xl font-semibold">Development Skills</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Full-stack development with focus on serverless architectures and modern frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-accent-purple/30 text-accent-purple">Node.js</Badge>
                  <Badge variant="outline" className="border-accent-purple/30 text-accent-purple">Python</Badge>
                  <Badge variant="outline" className="border-accent-purple/30 text-accent-purple">React</Badge>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card className="p-6 gradient-card border-primary/20 hover:glow-effect transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Security & DevOps</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Implementation of security best practices and CI/CD pipelines for robust deployments
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">CircleCI</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Terraform</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Security</Badge>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card className="p-6 gradient-card border-accent-blue/20 hover:glow-effect transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent-blue/20 rounded-lg">
                    <Smartphone className="h-6 w-6 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">Mobile & Backend</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Cross-platform mobile app development paired with Python backend APIs
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-accent-blue/30 text-accent-blue">Expo</Badge>
                  <Badge variant="outline" className="border-accent-blue/30 text-accent-blue">React Native</Badge>
                  <Badge variant="outline" className="border-accent-blue/30 text-accent-blue">Python</Badge>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;