import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Lightbulb } from "lucide-react";
import Reveal from "@/components/Reveal";

// Import AI-generated project icons
import corilisEsgIcon from "@/assets/corilisesg-icon.png";
import tradeSunIcon from "@/assets/tradesun-icon.png";
import multilateralIcon from "@/assets/multilateral-icon.png";
import blockchainIcon from "@/assets/blockchain-icon.png";
import fingoShopIcon from "@/assets/fingoshop-icon.png";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "400TB+ PostgreSQL Migration to AWS RDS",
      image: multilateralIcon,
      category: "AWS Migration",
      problem: "A large PostgreSQL estate (400TB+) needed to move to Amazon RDS without disrupting a live production trading platform or risking data integrity.",
      approach: "Designed a phased migration strategy with continuous replication and validation checkpoints, plus a cost-optimized backup tier using S3 Glacier Deep Archive for long-term retention.",
      results: [
        "400TB+ migrated with zero data loss",
        "Significant backup cost reduction via S3 Glacier Deep Archive"
      ],
      technologies: ["AWS RDS", "PostgreSQL", "S3 Glacier Deep Archive", "Data Migration"],
    },
    {
      title: "Multi-Region Disaster Recovery Architecture",
      image: tradeSunIcon,
      category: "Cloud Resiliency",
      problem: "Single-region infrastructure created unacceptable recovery time in the event of a regional outage, risking extended downtime for business-critical systems.",
      approach: "Architected automated multi-region failover with continuous health checks and traffic rerouting, backed by regularly tested recovery runbooks.",
      results: [
        "40% reduction in RTO/RPO",
        "Automated failover with no manual intervention required"
      ],
      technologies: ["AWS", "Multi-region DR", "Automated Failover", "Terraform"],
    },
    {
      title: "Azure Resiliency & FinOps Optimization",
      image: corilisEsgIcon,
      category: "Cloud Resiliency",
      problem: "Azure-hosted ESG compliance platform faced recurring downtime and unmanaged cloud spend, both directly impacting compliance SLAs and budget.",
      approach: "Implemented geo-replication for high availability and applied FinOps practices — rightsizing, reserved capacity, and cost allocation reporting.",
      results: [
        "50% reduction in downtime",
        "30% cost savings via FinOps practices"
      ],
      technologies: ["Azure App Services", "Geo-Replication", "FinOps", "Logic Apps"],
    },
    {
      title: "Cross-Platform Mobile Apps Shipped to Production",
      image: fingoShopIcon,
      category: "Mobile & Backend",
      problem: "Needed mobile apps built and shipped end-to-end — from codebase to signed production release — without a dedicated mobile team.",
      approach: "Built and shipped both React Native (Expo/EAS Build) and Flutter apps solo, handling signing, store listings, and release management for Google Play.",
      results: [
        "Apps built, signed, and published to Google Play Store production",
        "Full ownership across two mobile frameworks (React Native + Flutter)"
      ],
      technologies: ["React Native", "Expo", "Flutter", "Google Play Console"],
    },
    {
      title: "Blockchain Smart Contract Trading System",
      image: blockchainIcon,
      category: "Blockchain",
      problem: "A scrap trading business needed secure, auditable transactions between counterparties without a centralized trust broker.",
      approach: "Built a permissioned blockchain system on IBM Hyperledger Fabric with Node.js Loopback services to handle smart contract logic and transaction APIs.",
      results: [
        "Secure, auditable blockchain-based transactions",
        "Production system for CRC Scrap Sales, USA"
      ],
      technologies: ["Hyperledger Fabric", "Node.js", "Smart Contracts"],
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16">
          <span className="section-eyebrow">Selected Work</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Real problems, the approach taken, and the measurable outcomes
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((project, index) => (
            <Reveal key={index} delay={(index % 2) * 100}>
            <Card
              className="overflow-hidden border-border/80 card-shadow hover:border-accent-cyan/40 transition-colors duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-40 bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project illustration`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <Target className="h-5 w-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">Problem</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Lightbulb className="h-5 w-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">Approach</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <TrendingUp className="h-5 w-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">Result</div>
                      <ul className="space-y-1">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-accent-cyan/30 text-accent-cyan"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
            </Reveal>
          ))}
        </div>

        {/* Portfolio CTA */}
        <Reveal className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Want to Discuss a Similar Challenge?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These are a portion of my project history. Happy to walk through architecture
            decisions in more depth or discuss how similar approaches apply to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-primary hover:glow-effect"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background"
              onClick={() => window.open('https://linkedin.com/in/teja-darshan', '_blank')}
            >
              View LinkedIn
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Portfolio;