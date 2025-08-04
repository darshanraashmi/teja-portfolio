import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  LinkedinIcon, 
  Github, 
  ArrowUp,
  Cloud,
  Code,
  Shield,
  Settings
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Cloud Consulting", icon: Cloud },
    { label: "DevOps Implementation", icon: Settings },
    { label: "Serverless Engineering", icon: Code },
    { label: "Security & Compliance", icon: Shield },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
                Teja Darshan G
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Senior Cloud Platform Engineer specializing in AWS, Azure, and serverless architectures. 
                Transforming businesses through innovative cloud solutions.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-accent-cyan transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Services</h4>
            <div className="space-y-3">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.label} className="flex items-center gap-3 text-muted-foreground hover:text-accent-cyan transition-colors cursor-pointer">
                    <IconComponent className="h-4 w-4" />
                    <span>{service.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent-cyan" />
                <span>tejaraashmi@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <LinkedinIcon className="h-4 w-4 text-accent-purple" />
                <span>linkedin.com/in/teja-darshan</span>
              </div>
            </div>
            
            <Button 
              className="mt-6 gradient-primary hover:glow-effect w-full"
              onClick={() => scrollToSection('#contact')}
            >
              Start a Project
            </Button>
          </div>
        </div>

        <Separator className="my-12 bg-border" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-center md:text-left">
            <p>&copy; 2024 Teja Darshan G. All rights reserved.</p>
            <p className="text-sm mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Scroll to top</span>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollToTop}
              className="border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan hover:text-background transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;