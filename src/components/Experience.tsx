import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
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

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16">
          <span className="section-eyebrow">Career Timeline</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A journey through cloud technologies and serverless innovations
          </p>
        </Reveal>

        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 80}>
              <div
                className={`grid grid-cols-[5.5rem_1px_1fr] sm:grid-cols-[8rem_1px_1fr] gap-x-4 sm:gap-x-8 ${
                  index === experiences.length - 1 ? "" : "pb-10"
                }`}
              >
                {/* Year marker as real typography, not a badge */}
                <div className="pt-0.5 text-right sm:text-right">
                  <div className="text-sm sm:text-base font-semibold text-foreground leading-tight">
                    {exp.dates}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{exp.type}</div>
                </div>

                {/* Thin divider line with a dot marker at the top */}
                <div className="relative flex justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 relative z-10"></div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-3 bottom-[-2.5rem] w-px bg-border"></div>
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                    {exp.position}
                  </h3>
                  {exp.company && (
                    <div className="text-accent-cyan font-medium mt-1">
                      {exp.company}
                    </div>
                  )}
                  {exp.location && (
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  )}

                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4 border-l border-border">
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-accent-cyan/30 text-accent-cyan text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;