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
  MapPin, 
  Clock,
  Phone,
  MessageCircle,
  Github
} from "lucide-react";
import emailjs from '@emailjs/browser';

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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your cloud infrastructure? Let's discuss your project and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="p-6 gradient-card border-accent-cyan/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-accent-cyan" />
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent-cyan/10 transition-colors">
                  <Mail className="h-5 w-5 text-accent-cyan" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">tejaraashmi@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent-purple/1 transition-colors">
                  <LinkedinIcon className="h-5 w-5 text-accent-purple" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">linkedin.com/in/teja-darshan</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">Hyderabad</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent-green/10 transition-colors">
                  <Github className="h-5 w-5 text-accent-green" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-muted-foreground">github.com/darshanraashmi</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent-blue/10 transition-colors">
                  <Clock className="h-5 w-5 text-accent-blue" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </Card>


            <Card className="p-6 gradient-card border-primary/20">
              <h3 className="text-xl font-bold mb-4">Available For</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-start border-accent-cyan/30 text-accent-cyan p-2">
                  Cloud Consulting Projects
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-purple/30 text-accent-purple p-2">
                  DevOps Implementation
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-primary/30 text-primary p-2">
                  Serverless Architecture
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-blue/30 text-accent-cyan p-2">
                  AWS SysOps
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-green/30 text-accent-purple p-2">
                  AWS FinOps
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent-yellow/30 text-accent-cyan p-2">
                  Full-time Opportunities
                </Badge>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 gradient-card border-accent-cyan/20 hover:glow-effect transition-all duration-300">
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
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 gradient-card border-accent-cyan/20 inline-block">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Cloud Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Whether you need cloud consulting, DevOps implementation, or serverless solutions, 
              I'm here to help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary hover:glow-effect">
                Hire Me for Your Project
              </Button>
              <Button variant="outline" size="lg" className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background">
                View My Services
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;