import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, LinkedinIcon, MapPin } from "lucide-react";
import tejaProfile from "@/assets/teja-profile.jpg";
import { useNavigate } from "react-router-dom";
import Reveal from "@/components/Reveal";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 lg:pt-16 lg:pb-0">
      {/* Subtle static background — dot grid + single restrained accent shape */}
      <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]"></div>
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent-cyan/5 blur-3xl"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-accent-cyan mb-4">
                Senior Cloud Platform Engineer
              </span>
            </div> */}

            <div className="flex flex-col items-center lg:items-start space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                <span className="gradient-primary bg-clip-text text-transparent">
                  Teja Darshan
                </span>
              </h1>

              <h2 className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                AWS Solutions Architect | Cloud Operations & DevOps Engineer
              </h2>

              {/* <div className="flex items-center gap-2 text-sm lg:text-base text-accent-cyan font-medium">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Based in Ottawa, ON, Canada</span>
              </div> */}
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              10+ years designing, operating, and optimizing secure cloud infrastructure on AWS and Azure for
              U.S. enterprise clients. AWS Certified Solutions Architect – Associate.
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="default"
                className="
                  col-span-2 sm:size-lg
                  gradient-primary
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20
                  rounded-2xl flex items-center sm:h-11 sm:px-8 sm:text-base
                "
                asChild
              >
                <a href="/resume.pdf" download="Teja-Darshan-Resume.pdf">
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="default"
                className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background sm:h-11 sm:px-8 sm:text-base"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
                <Mail className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="default"
                className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background sm:h-11 sm:px-8 sm:text-base"
                onClick={() =>
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="default"
                className="
                  col-span-2 sm:size-lg
                  gradient-primary
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20
                  hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500
                  rounded-2xl sm:h-11 sm:px-8 sm:text-base
                "
                onMouseEnter={(e) => {
                  const tooltip = document.createElement("div");
                  tooltip.innerText = "Click to generate your own portfolio";
                  tooltip.style.position = "absolute";
                  tooltip.style.background = "rgba(0, 0, 0, 0.54)";
                  tooltip.style.color = "#fff";
                  tooltip.style.padding = "6px 10px";
                  tooltip.style.borderRadius = "8px";
                  tooltip.style.fontSize = "12px";
                  tooltip.style.whiteSpace = "nowrap";
                  tooltip.style.top = `${e.clientY + 12}px`;
                  tooltip.style.left = `${e.clientX + 12}px`;
                  tooltip.style.pointerEvents = "none";
                  tooltip.className = "custom-tooltip";
                  document.body.appendChild(tooltip);

                  e.currentTarget.onmousemove = (moveEvent) => {
                    tooltip.style.top = `${moveEvent.clientY + 12}px`;
                    tooltip.style.left = `${moveEvent.clientX + 12}px`;
                  };
                }}
                onMouseLeave={() => {
                  document.querySelectorAll(".custom-tooltip").forEach(el => el.remove());
                }}
                onClick={() => {
                  // Remove tooltip immediately on click before navigation
                  document.querySelectorAll(".custom-tooltip").forEach(el => el.remove());
                  navigate('/createyourown');
                }}
              >
                Generate Your Portfolio
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
                onClick={() => window.open('https://linkedin.com/in/teja-darshan', '_blank')}
              >
                <LinkedinIcon className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
                onClick={() => window.open('mailto:tejadarshan@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right content - Profile image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={tejaProfile}
                  alt="Teja Darshan, AWS Solutions Architect"
                  className="w-full h-full object-cover rounded-full border-4 border-accent-cyan/30 shadow-2xl transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <Reveal delay={200} className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-16 lg:mt-20 pt-10 lg:pt-12 border-t border-border">
          <div className="text-center lg:text-left">
            <div className="text-2xl lg:text-4xl font-bold text-accent-cyan mb-1">10+</div>
            <div className="text-xs lg:text-base text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-2xl lg:text-4xl font-bold text-accent-cyan mb-1">5+</div>
            <div className="text-xs lg:text-base text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-2xl lg:text-4xl font-bold text-accent-cyan mb-1">400TB+</div>
            <div className="text-xs lg:text-base text-muted-foreground">Data Migrated</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-2xl lg:text-4xl font-bold text-accent-cyan mb-1">AWS SAA</div>
            <div className="text-xs lg:text-base text-muted-foreground">Certified Associate</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;