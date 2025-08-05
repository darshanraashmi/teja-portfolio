import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, LinkedinIcon } from "lucide-react";
import tejaProfile from "@/assets/teja-profile.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-cyan/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-purple/30 rounded-full blur-lg animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
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
                Senior Cloud Platform Engineer | Cloud Operations Engineer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Designing scalable, secure, and cost-optimized cloud solutions on AWS and Azure. 
              Transforming ideas into powerful serverless architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="gradient-primary hover:glow-effect transition-all duration-300"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                className="gradient-primary hover:glow-effect transition-all duration-300"
                onClick={() => navigate('/createyourown')}
              >
                Generate Your Portfolio 
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
                onClick={() => window.open('https://linkedin.com/in/teja-darshan', '_blank')}
              >
                <LinkedinIcon className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
                onClick={() => window.open('mailto:tejaraashmi@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right content - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-30 animate-glow"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={tejaProfile}
                  alt="Teja Darshan G - Senior Cloud Platform Engineer"
                  className="w-full h-full object-cover rounded-full border-4 border-accent-cyan/30 shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-cyan rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent-purple/60 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">9+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">5+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">2</div>
            <div className="text-muted-foreground">Cloud Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">4+</div>
            <div className="text-muted-foreground">Serverless Years</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;