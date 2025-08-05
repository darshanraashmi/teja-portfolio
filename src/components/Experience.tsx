import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Senior Cloud Platform Engineer",
      type: "Current",
      responsibilities: [
        "Leading cloud infrastructure design and implementation",
        "Architecting serverless solutions on AWS and Azure"
      ],
      technologies: ["AWS", "Azure", "Terraform", "CircleCI", "Node.js", "Serverless Framework"]
    },
    {
      position: "Cloud Operations Engineer / Cloud Engineer",
      type: "Previous",
      responsibilities: [
        "Designed and deployed scalable cloud infrastructures",
        "Implemented serverless architectures using AWS Lambda and Azure Functions"
      ],
      technologies: ["AWS Lambda", "Azure Functions", "DynamoDB", "API Gateway", "CloudWatch"]
    },
    {
      position: "IBM Hyperledger Fabric Developer",
      type: "Specialized",
      responsibilities: [
        "Developed blockchain solutions using IBM Hyperledger Fabric",
        "Built smart contracts and distributed ledger applications"
      ],
      technologies: ["Hyperledger Fabric", "Node.js", "Blockchain", "Smart Contracts"]
    },
    {
      position: "Cloud Engineer",
      type: "Previous",
      responsibilities: [
        "Managed cloud infrastructure and migrations",
        "Implemented monitoring and alerting systems"
      ],
      technologies: ["AWS", "CloudWatch", "EC2", "RDS", "S3"]
    },
    {
      position: "Cloud System Administrator",
      type: "Early Career",
      responsibilities: [
        "Administered cloud-based e-commerce infrastructure",
        "Deployed applications on AWS and Azure platforms"
      ],
      technologies: ["AWS", "Azure", "MySQL", "Linux", "System Administration"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Current": return "accent-cyan";
      case "Previous": return "accent-purple";
      case "Specialized": return "primary";
      case "Early Career": return "accent-blue";
      default: return "muted";
    }
  };

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through cloud technologies and serverless innovations
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-accent-cyan rounded-full border-4 border-background hidden lg:block animate-pulse"></div>
                
                <div className="lg:ml-20">
                  <Card className="p-8 gradient-card border-accent-cyan/20 hover:glow-effect transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0">
                        <Badge 
                          variant="secondary" 
                          className={`mb-3 bg-${getTypeColor(exp.type)}/20 text-${getTypeColor(exp.type)}`}
                        >
                          {exp.type}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-cyan transition-colors">
                          {exp.position}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-accent-cyan">
                        <Briefcase className="h-5 w-5" />
                        <span className="font-medium">Experience</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3 text-foreground">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline" 
                            className="border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;