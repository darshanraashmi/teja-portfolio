import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Settings, 
  GitBranch, 
  Server, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

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
      color: "accent-cyan"
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
      color: "accent-purple"
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
      color: "primary"
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
      color: "accent-blue"
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
      color: "accent-cyan"
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
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Services <span className="gradient-primary bg-clip-text text-transparent">Offered</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cloud and DevOps solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 gradient-card border-accent-cyan/20 hover:glow-effect transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-${service.color}/20 rounded-xl group-hover:animate-pulse`}>
                    <IconComponent className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-accent-cyan transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline" 
                          className={`text-xs border-${service.color}/30 text-${service.color}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`h-5 w-5 text-${service.color} flex-shrink-0`} />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className={`w-full border-${service.color}/30 text-${service.color} hover:bg-${service.color}/10 group`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
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
          <div className="text-center">
            <Card className="p-8 gradient-card border-accent-cyan/20 inline-block max-w-4xl">
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
                  className="gradient-primary hover:glow-effect"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;