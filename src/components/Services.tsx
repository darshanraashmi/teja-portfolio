import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Settings,
  GitBranch,
  Server,
  CheckCircle,
  Smartphone
} from "lucide-react";
import Reveal from "@/components/Reveal";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Consulting",
      description: "Strategic cloud transformation and architecture design for scalable, secure, and cost-effective solutions.",
      features: [
        "Cloud migration strategy",
        "Architecture design & review",
        "Cost optimization analysis",
        "Security assessment",
        "Multi-cloud solutions"
      ],
      technologies: ["AWS", "Azure", "Multi-cloud"],
    },
    {
      icon: Settings,
      title: "DevOps Implementation",
      description: "End-to-end DevOps practices implementation to streamline development and deployment workflows.",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure automation",
        "Monitoring & alerting",
        "Release management",
        "Quality assurance"
      ],
      technologies: ["Jenkins", "CircleCI", "Azure DevOps"],
    },
    {
      icon: GitBranch,
      title: "CircleCI Integration",
      description: "Specialized CircleCI pipeline design and implementation for automated testing and deployment.",
      features: [
        "Pipeline configuration",
        "Automated testing setup",
        "Deployment automation",
        "Performance optimization",
        "Security integration"
      ],
      technologies: ["CircleCI", "Docker", "Kubernetes"],
    },
    {
      icon: Server,
      title: "Serverless Engineering",
      description: "Design and development of serverless applications using modern cloud-native technologies.",
      features: [
        "Serverless architecture design",
        "API development",
        "Event-driven solutions",
        "Performance optimization",
        "Cost-effective scaling"
      ],
      technologies: ["AWS Lambda", "Azure Functions", "Node.js"],
    },
    {
      icon: Cloud,
      title: "AWS SysOps",
      description: "Comprehensive AWS system operations and infrastructure management services.",
      features: [
        "System monitoring & alerting",
        "Performance optimization",
        "Backup & recovery strategies",
        "Security compliance",
        "Operational troubleshooting"
      ],
      technologies: ["AWS", "CloudWatch", "Systems Manager"],
    },
    {
      icon: Settings,
      title: "FinOps",
      description: "Financial operations and cloud cost optimization to maximize ROI and reduce expenses.",
      features: [
        "Cost analysis & reporting",
        "Budget planning & forecasting",
        "Resource optimization",
        "Cost allocation strategies",
        "Financial governance"
      ],
      technologies: ["Cost Explorer", "CloudHealth", "Terraform"],
    },
    {
      icon: Smartphone,
      title: "UI, Mobile & Backend Development",
      description: "End-to-end mobile app and backend development, from cross-platform UI to Python-powered APIs.",
      features: [
        "Cross-platform UI design & development",
        "Mobile app development with Expo",
        "Python backend & REST API development",
        "App store build & deployment (EAS)",
        "Backend integration & data modeling"
      ],
      technologies: ["Expo", "React Native", "Python", "FastAPI"],
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16">
          <span className="section-eyebrow">What I Do</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Services Offered
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive cloud and DevOps solutions tailored to your business needs
          </p>
        </Reveal>

        {/* Tighter list layout instead of a uniform 3-col card grid */}
        <div className="mb-16 border-t border-border">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Reveal key={index} delay={(index % 3) * 60}>
                <div className="py-8 border-b border-border grid sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_16rem_1fr] gap-x-6 gap-y-4">
                  <div className="w-11 h-11 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-accent-cyan" />
                  </div>

                  <div className="lg:pr-6">
                    <h3 className="text-xl font-bold mb-1.5">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-accent-cyan/30 text-accent-cyan font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <ul className="space-y-1.5">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-accent-cyan/70 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Available For Section */}
        <div className="mt-20">
          {/* <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Available <span className="gradient-primary bg-clip-text text-transparent">For</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Open to exciting opportunities and collaborations
            </p>
          </div> */}
          
          {/* <div className="flex justify-center mb-12">
            <Card className="p-6 gradient-card border-primary/20 max-w-md">
              <h3 className="text-xl font-bold mb-4">Available For</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-start border-accent-cyan/30 text-accent-cyan p-2">
                  Cloud Consulting Projects
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-purple/30 text-accent-purple p-2">
                  DevOps Implementation
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-blue/30 text-accent-blue p-2">
                  Serverless Architecture
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-green/30 text-accent-purple p-2">
                  AWS SysOps
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-yellow/30 text-accent-cyan p-2">
                  FinOps
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-pink/30 text-accent-blue p-2">
                  Full-time Opportunities
                </Badge>
              </div>
            </Card>
          </div> */}

          {/* CTA Section */}
          <Reveal className="text-center">
            <Card className="p-8 border-border/80 card-shadow inline-block max-w-4xl">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Infrastructure?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how we can optimize your cloud infrastructure, implement robust DevOps practices,
                and accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent-cyan text-background hover:bg-accent-cyan/90"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Portfolio
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Services;