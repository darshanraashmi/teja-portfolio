import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Cloud, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about cloud technologies and serverless architectures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio section */}
          <div>
            <Card className="p-8 gradient-card border-accent-cyan/20 card-shadow">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4 bg-accent-cyan/20 text-accent-cyan">
                  Professional Bio
                </Badge>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Purposeful Senior Cloud Platform Engineer, Cloud Operations & Serverless Engineer with over 
                <span className="text-accent-cyan font-semibold"> 9+ years of experience</span> in designing, 
                deploying, and supporting highly available, secure, and cost-optimized cloud infrastructures on 
                <span className="text-accent-cyan font-semibold"> AWS and Azure</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Proven ability in serverless computing with <span className="text-accent-cyan font-semibold">4+ years</span> of 
                hands-on development using <span className="text-accent-cyan font-semibold">Node.js</span> to build scalable, 
                event-driven APIs and applications on AWS Lambda and Azure Functions.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I specialize in <span className="text-accent-cyan font-semibold">cost optimization</span>, 
                <span className="text-accent-cyan font-semibold"> security implementation</span>, and 
                <span className="text-accent-cyan font-semibold"> DevOps automation</span> to help organizations 
                achieve their digital transformation goals while maintaining operational excellence.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent-cyan" />
                  <span className="text-lg font-medium">B.Tech Graduate</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-accent-cyan/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent-cyan">50+</div>
                    <div className="text-sm text-muted-foreground">Cloud Deployments</div>
                  </div>
                  <div className="text-center p-4 bg-accent-purple/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent-purple">15+</div>
                    <div className="text-sm text-muted-foreground">CI/CD Pipelines</div>
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
          </div>

          {/* Skills highlights */}
          <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;