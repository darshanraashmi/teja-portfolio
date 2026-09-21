import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";

const Experience = () => {
  const experiences = [
    {
      position: "AWS Solutions Architect & Mobile Application",
      company: "Smart Krow Technology Solutions Pvt. Ltd.",
      dates: "Sept 2024 – Present",
      location: "Hyderabad, India",
      type: "Current",
      responsibilities: [
        "Designed end-to-end multi-account AWS architectures and led on-prem-to-AWS migrations with zero downtime, using structured cutover plans and automated rollback safeguards",
        "Ran AWS Well-Architected Framework reviews and built multi-region DR architectures with automated failover, cutting RTO/RPO targets by 40%",
        "Automated cloud operations with Python (boto3) and enforced governance (IAM, SCPs, tagging) across AWS Organizations; cut incident resolution time 35% via CloudWatch/X-Ray observability",
        "Built and shipped React Native (Expo) and Flutter mobile apps end-to-end — from development through signed APK/AAB builds to Google Play Store production release",
        "Developed Python/FastAPI backend services on AWS Lambda handling JWT/OAuth2 auth flows, integrated with Auth0 and AWS Cognito; mentored junior engineers on architecture reviews"
      ],
      technologies: ["AWS", "Python (boto3)", "FastAPI", "React Native", "Expo", "Flutter", "Terraform"]
    },
    {
      position: "Senior Cloud Operations Engineer",
      company: "Innova Solutions",
      dates: "Dec 2018 – Sept 2024",
      location: "Remote — Cross-border collaboration with Canadian team members",
      type: "Previous",
      responsibilities: [
        "Deployed to TradeSun, Multilateral, Coriolis ESG & CRC Scrap Sales (USA) client engagements",
        "Designed and deployed scalable AWS/Azure cloud infrastructures across serverless and traditional workloads",
        "Implemented monitoring, alerting, and disaster recovery for production systems"
      ],
      technologies: ["AWS Lambda", "Azure Functions", "DynamoDB", "API Gateway", "CloudWatch"]
    },
    {
      position: "AI-Powered Trade Finance Platform",
      company: "TradeSun, USA",
      dates: "Dec 2020 – Sept 2024",
      location: "Remote",
      type: "Specialized",
      responsibilities: [
        "Engineered serverless APIs (Node.js, Lambda, API Gateway, DynamoDB) for high-volume trade finance document processing",
        "Built automated RCA workflows (EventBridge, Bedrock) cutting MTTR for production incidents",
        "Led FinOps/security audit initiatives supporting AWS MSP audit readiness"
      ],
      technologies: ["Node.js", "AWS Lambda", "API Gateway", "DynamoDB", "EventBridge", "Bedrock"]
    },
    {
      position: "AWS Integration & Large-Scale Data Migration",
      company: "Multilateral by TradeSun, USA (Acquired Platform)",
      dates: "Dec 2022 – Sept 2024",
      location: "Remote",
      type: "Specialized",
      responsibilities: [
        "Led end-to-end onboarding of an acquired platform into TradeSun's AWS environment",
        "Migrated 400TB+ PostgreSQL to Amazon RDS with zero data loss",
        "Designed cost-optimized backup strategy using S3 Glacier Deep Archive"
      ],
      technologies: ["AWS RDS", "PostgreSQL", "S3 Glacier Deep Archive", "Data Migration"]
    },
    {
      position: "ESG Scoring & Analytics Platform",
      company: "Coriolis ESG by TradeSun, USA",
      dates: "Dec 2021 – Sept 2024",
      location: "Remote",
      type: "Specialized",
      responsibilities: [
        "Built Azure resiliency architecture with geo-replication for an ESG analytics platform serving international financial clients",
        "Reduced downtime incidents 50% and cloud costs 30% through FinOps practices"
      ],
      technologies: ["Azure App Services", "Geo-Replication", "FinOps", "Logic Apps"]
    },
    {
      position: "Blockchain Smart Contract System",
      company: "CRC Scrap Sales, USA",
      dates: "Dec 2018 – Aug 2019",
      location: "Remote",
      type: "Specialized",
      responsibilities: [
        "Developed Hyperledger Fabric smart contracts and Loopback Node.js services to automate vendor bidding and scrap sales workflows",
        "Improved transparency and reduced manual intervention in trading operations"
      ],
      technologies: ["Hyperledger Fabric", "Node.js", "Loopback", "Smart Contracts"]
    },
    {
      position: "Cloud Engineer & Cloud System Administrator",
      company: "3x3Conect & Fingo Shop",
      dates: "Sept 2016 – Dec 2018",
      location: "Hyderabad, India",
      type: "Early Career",
      responsibilities: [
        "Administered AWS and Azure cloud environments for e-commerce (Magento/Nginx) and consumer mobile platforms",
        "Handled provisioning, backups, uptime monitoring, and Active Directory/access control"
      ],
      technologies: ["AWS", "Azure", "Magento", "Nginx", "Active Directory"]
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
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through cloud technologies and serverless innovations
          </p>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 100} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-accent-cyan rounded-full border-4 border-background hidden lg:block animate-pulse"></div>

                <div className="lg:ml-20">
                  <Card className="p-8 gradient-card border-accent-cyan/20 hover:glow-effect hover:-translate-y-1 transition-all duration-300 group">
                    <div className="mb-6">
                      <div>
                        <Badge
                          variant="secondary" 
                          className={`mb-3 bg-${getTypeColor(exp.type)}/20 text-${getTypeColor(exp.type)}`}
                        >
                          {exp.type}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-accent-cyan transition-colors">
                          {exp.position}
                        </h3>
                        {exp.company && (
                          <div className="flex items-center gap-2 text-accent-cyan font-medium mb-1">
                            <Briefcase className="h-4 w-4 flex-shrink-0" />
                            <span>{exp.company}</span>
                          </div>
                        )}
                        {(exp.dates || exp.location) && (
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            {exp.dates && (
                              <span className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                {exp.dates}
                              </span>
                            )}
                            {exp.location && (
                              <span className="flex items-center gap-1.5">
                                <MapPin className="h-3.5 w-3.5" />
                                {exp.location}
                              </span>
                            )}
                          </div>
                        )}
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
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;