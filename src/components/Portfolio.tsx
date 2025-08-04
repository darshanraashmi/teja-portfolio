import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Cloud, Database, Code, Link } from "lucide-react";

// Import AI-generated project icons
import corilisEsgIcon from "@/assets/corilisesg-icon.png";
import tradeSunIcon from "@/assets/tradesun-icon.png";
import multilateralIcon from "@/assets/multilateral-icon.png";
import blockchainIcon from "@/assets/blockchain-icon.png";
import fingoShopIcon from "@/assets/fingoshop-icon.png";
import isThreeIcon from "@/assets/isthree-icon.png";

const Portfolio = () => {
  const projects = [
    {
      title: "TradeSun",
      description: "Comprehensive serverless trading platform built with AWS Lambda, API Gateway, and DynamoDB for real-time trade processing and management.",
      image: tradeSunIcon,
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Node.js", "Serverless"],
      category: "Serverless Platform",
      highlights: [
        "Real-time trade processing",
        "Scalable API architecture",
        "Cost-optimized serverless design",
        "High-performance database integration"
      ],
      color: "accent-cyan"
    },
    {
      title: "CoriolisESG",
      description: "Azure-based ESG compliance platform with resiliency features, App Services integration, and comprehensive backup & disaster recovery.",
      image: corilisEsgIcon,
      technologies: ["Azure App Services", "Logic Apps", "Azure Functions", "Disaster Recovery"],
      category: "Cloud Resiliency",
      highlights: [
        "ESG compliance automation",
        "Azure resiliency implementation",
        "Backup & disaster recovery",
        "Logic Apps integration"
      ],
      color: "accent-purple"
    },
    {
      title: "Multilateral",
      description: "Enterprise cloud infrastructure design with automated deployment pipelines, optimization strategies, and multi-cloud architecture.",
      image: multilateralIcon,
      technologies: ["Multi-cloud", "Terraform", "CloudFormation", "CI/CD"],
      category: "Infrastructure Design",
      highlights: [
        "Multi-cloud architecture",
        "Infrastructure automation",
        "Cost optimization",
        "Scalable deployment pipelines"
      ],
      color: "primary"
    },
    {
      title: "CRC Scrap Sales",
      description: "Blockchain-based scrap trading system using IBM Hyperledger Fabric with Node.js Loopback services for secure transactions.",
      image: blockchainIcon,
      technologies: ["Hyperledger Fabric", "Node.js", "Blockchain", "Smart Contracts"],
      category: "Blockchain Solution",
      highlights: [
        "Secure blockchain transactions",
        "Smart contract implementation",
        "Decentralized trading platform",
        "Node.js API services"
      ],
      color: "accent-blue"
    },
    {
      title: "FingoShop",
      description: "Cloud-native e-commerce platform deployed on AWS and Azure with scalable architecture and integrated payment systems.",
      image: fingoShopIcon,
      technologies: ["AWS", "Azure", "E-commerce", "Payment Integration"],
      category: "E-commerce Platform",
      highlights: [
        "Multi-cloud deployment",
        "Scalable e-commerce architecture",
        "Payment gateway integration",
        "High availability design"
      ],
      color: "accent-cyan"
    },
    {
      title: "IsThree",
      description: "Cloud migration and infrastructure optimization project with performance improvements and cost reduction strategies.",
      image: isThreeIcon,
      technologies: ["Cloud Migration", "Performance Optimization", "Cost Management"],
      category: "Cloud Migration",
      highlights: [
        "Successful cloud migration",
        "Performance optimization",
        "Cost reduction strategies",
        "Infrastructure modernization"
      ],
      color: "accent-purple"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of successful cloud transformations and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden gradient-card border-accent-cyan/20 hover:glow-effect transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-accent overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm"
                >
                  {project.category}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full`}></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className={`text-xs border-${project.color}/30 text-${project.color}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Commented out as requested */}
                {/* 
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`flex-1 border-${project.color}/30 text-${project.color} hover:bg-${project.color}/10`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`text-${project.color} hover:bg-${project.color}/10`}
                  >
                    <Link className="h-4 w-4" />
                  </Button>
                </div>
                */}
              </div>
            </Card>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Interested in Seeing More Work?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These projects represent just a portion of my experience. I'd be happy to discuss 
            specific case studies and how similar solutions could benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary hover:glow-effect">
              Request Case Studies
            </Button>
            <Button variant="outline" size="lg" className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background">
              Contact for Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;