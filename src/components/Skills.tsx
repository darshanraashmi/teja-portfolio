import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Code, 
  Settings, 
  Shield, 
  Database, 
  Monitor,
  GitBranch,
  Server,
  Smartphone
} from "lucide-react";
import Reveal from "@/components/Reveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "accent-cyan",
      skills: [
        { name: "AWS", level: 80, tools: ["Lambda", "API Gateway", "DynamoDB", "S3", "Cognito", "RDS"] },
        { name: "Azure", level: 60, tools: ["App Services", "Functions", "Logic Apps", "Cosmos DB"] },
      ]
    },
    {
      title: "Languages",
      icon: Code,
      color: "accent-purple",
      skills: [
        { name: "Node.js", level: 95, tools: ["Express", "Serverless Framework", "REST APIs"] },
        { name: "Python", level: 85, tools: ["FastAPI", "Django", "Data Processing"] },
        { name: "Shell Scripting", level: 80, tools: ["Bash", "PowerShell", "Automation"] },
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "accent-blue",
      skills: [
        { name: "React Native", level: 75, tools: ["Expo", "EAS Build", "Cross-platform UI"] },
        { name: "Flutter", level: 65, tools: ["Google Play Store", "App Signing"] },
      ]
    },
    {
      title: "DevOps & CI/CD",
      icon: GitBranch,
      color: "primary",
      skills: [
        { name: "CircleCI", level: 90, tools: ["Pipeline Design", "Automated Testing", "Deployment"] },
        { name: "Jenkins", level: 85, tools: ["Build Automation", "Pipeline as Code"] },
        { name: "Azure DevOps", level: 80, tools: ["Release Management", "Git Integration"] },
      ]
    },
    {
      title: "IaC / DevOps",
      icon: Settings,
      color: "accent-blue",
      skills: [
        { name: "Terraform", level: 90, tools: ["Multi-cloud", "State Management", "Modules"] },
        { name: "CloudFormation", level: 85, tools: ["AWS Resources", "Stack Management"] },
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "accent-cyan",
      skills: [
        { name: "AWS Security", level: 90, tools: ["IAM", "Security Groups", "KMS"] },
        { name: "Snyk", level: 80, tools: ["Vulnerability Scanning", "Dependency Check"] },
      ]
    },
    {
      title: "Monitoring & FinOps",
      icon: Monitor,
      color: "accent-purple",
      skills: [
        { name: "CloudWatch", level: 60, tools: ["Metrics", "Logs", "Alarms"] },
        { name: "Datadog", level: 60, tools: ["APM", "Infrastructure Monitoring"] },
        { name: "FinOps", level: 85, tools: ["Cost Explorer", "Reserved Instances", "Cost Allocation"] },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical skills across cloud platforms, development, and DevOps practices
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Reveal key={index} delay={(index % 3) * 100}>
              <Card className="p-6 gradient-card border-accent-cyan/20 hover:glow-effect hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-${category.color}/20 rounded-lg group-hover:animate-pulse`}>
                    <IconComponent className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`text-${category.color} font-semibold`}>{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 mb-3" 
                      />
                      <div className="flex flex-wrap gap-1">
                        {skill.tools.map((tool, toolIndex) => (
                          <Badge 
                            key={toolIndex} 
                            variant="outline" 
                            className={`text-xs border-${category.color}/30 text-${category.color}`}
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Additional tech stack */}
        <Reveal className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AWS", "Azure", "AWS Lambda", "API Gateway", "DynamoDB", "Step Functions", "S3", 
              "ECR", "Cognito", "IAM", "CloudFormation", "SNS", "SQS", "OpenSearch", "EC2", 
              "Secrets Manager", "Parameter Store", "ECS", "Textract", "VPC", "Load Balancer", 
              "CloudWatch", "IAM Identity Centre", "AWS Organizations", "Azure DevOps Services",
              "CircleCI", "Jenkins", "Git", "Bitbucket", "Node.js", "Python", "Shell Scripting", 
              "Docker", "AWS ECR", "Amazon Cognito", "OAuth2", "OpenID Connect", "Snyk",
              "Sumo Logic", "Serverless", "AWS Bedrock", "Terraform", "Expo", "React Native", "FastAPI"
            ].map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-secondary/50 hover:bg-accent-cyan/20 hover:text-accent-cyan hover:scale-105 transition-all cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;