import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  LinkedinIcon,
  Send,
  Clock,
  Phone,
  MessageCircle,
  Github
} from "lucide-react";
import emailjs from '@emailjs/browser';
import Reveal from "@/components/Reveal";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_y0djk2g', // Service ID
        'template_nikipmv', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          budget: formData.budget,
          subject: formData.subject,
          message: formData.message,
        },
        'x1Ib_mELp26LN7yCR' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Ready to transform your cloud infrastructure? Let's discuss your project and explore how we can work together.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <Reveal className="lg:col-span-1 space-y-8">
            <Card className="p-6 border-border/80 card-shadow">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-accent-cyan" />
                Get in Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent-cyan/10 transition-colors">
                  <Mail className="h-5 w-5 text-accent-cyan" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">tejadarshan@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent-cyan/10 transition-colors">
                  <Phone className="h-5 w-5 text-accent-cyan" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+1 (343) 322-7790</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent-cyan/10 transition-colors">
                  <LinkedinIcon className="h-5 w-5 text-accent-cyan" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">linkedin.com/in/teja-darshan</div>
                  </div>
                </div>

                {/* <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent-cyan/10 transition-colors">
                  <MapPin className="h-5 w-5 text-accent-cyan" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">Ottawa, ON, Canada</div>
                  </div>
                </div> */}

                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent-cyan/10 transition-colors">
                  <Github className="h-5 w-5 text-accent-cyan" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-muted-foreground">github.com/darshanraashmi</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent-cyan/10 transition-colors">
                  <Clock className="h-5 w-5 text-accent-cyan" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </Card>


            <Card className="p-6 border-border/80 card-shadow">
              <h3 className="text-xl font-bold mb-4">Open To</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-start border-accent-cyan/30 text-accent-cyan p-2">
                  AWS Solutions Architect Roles
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-cyan/30 text-accent-cyan p-2">
                  Cloud Operations / DevOps Engineer Roles
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-cyan/30 text-accent-cyan p-2">
                  Full-time Opportunities (Ottawa / Remote Canada)
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-cyan/30 text-accent-cyan p-2">
                  Contract / Consulting Engagements
                </Badge>
              </div>
            </Card>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={150} className="lg:col-span-2">
            <Card className="p-8 border-border/80 card-shadow">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Your Name *</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-2 bg-secondary/50 border-accent-cyan/30 focus:border-accent-cyan"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      className="mt-2 bg-secondary/50 border-accent-cyan/30 focus:border-accent-cyan"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-foreground">Company</Label>
                    <Input 
                      id="company" 
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                      className="mt-2 bg-secondary/50 border-accent-cyan/30 focus:border-accent-cyan"
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-foreground">Project Budget</Label>
                    <Input 
                      id="budget" 
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      placeholder="Project budget range"
                      className="mt-2 bg-secondary/50 border-accent-cyan/30 focus:border-accent-cyan"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                  <Input 
                    id="subject" 
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="What would you like to discuss?"
                    className="mt-2 bg-secondary/50 border-accent-cyan/30 focus:border-accent-cyan"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Tell me about your project *</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Describe your project requirements, goals, and how I can help you achieve them..."
                    rows={6}
                    className="mt-2 bg-secondary/50 border-accent-cyan/30 focus:border-accent-cyan resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isLoading}
                    className="gradient-primary hover:glow-effect flex-1"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                  {/* <Button 
                    type="button" 
                    variant="outline" 
                    size="lg" 
                    className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background"
                    onClick={() => window.open('https://calendly.com/teja-darshan', '_blank')}
                  >
                    Schedule Call
                  </Button> */}
                </div>

                <div className="text-sm text-muted-foreground text-center pt-4">
                  * Required fields. I'll respond within 24 hours.
                </div>
              </form>
            </Card>
          </Reveal>
        </div>

        {/* Bottom CTA */}
        <Reveal className="text-center mt-16">
          <Card className="p-8 border-border/80 card-shadow inline-block">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Cloud Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Whether you need cloud consulting, DevOps implementation, or serverless solutions, 
              I'm here to help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary hover:glow-effect"
                onClick={() => window.open('mailto:tejadarshan@gmail.com', '_blank')}
              >
                Hire Me for Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Services
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;