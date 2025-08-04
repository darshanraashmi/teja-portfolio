import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Github, Linkedin, Upload, Code, Save, Download } from "lucide-react";

const CreateYourOwn = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    tagline: "",
    bio: "",
    education: "",
    email: "",
    linkedin: "",
    github: "",
    yearsExperience: "",
    projectsCompleted: "",
    cloudPlatforms: "",
    skills: [],
    services: [],
    projects: []
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = (skill: string) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const downloadHTML = () => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>${formData.name} - Portfolio</title>
          <style>
            body {
              font-family: 'Poppins', sans-serif;
              background: #0f172a;
              color: white;
              padding: 2rem;
              margin: 0;
            }
            h1, h2, h3 {
              margin: 0.5rem 0;
            }
            .container {
              max-width: 800px;
              margin: auto;
              background: #1e293b;
              border-radius: 16px;
              padding: 2rem;
              box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
            }
            .hero {
              text-align: center;
              margin-bottom: 2rem;
            }
            .hero h1 {
              font-size: 2.5rem;
              font-weight: bold;
              background: linear-gradient(to right, #06b6d4, #8b5cf6);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .metrics {
              display: flex;
              justify-content: space-around;
              margin: 2rem 0;
            }
            .metric {
              text-align: center;
            }
            .badge {
              display: inline-block;
              margin: 0.25rem;
              padding: 0.5rem 1rem;
              border: 1px solid #06b6d4;
              border-radius: 5px;
              color: #06b6d4;
              font-size: 0.875rem;
            }
            a {
              color: #38bdf8;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="hero">
              <h1>${formData.name}</h1>
              <h2>${formData.title}</h2>
              <p><em>${formData.tagline}</em></p>
            </div>

            <div>
              <h3>Bio</h3>
              <p>${formData.bio}</p>
            </div>

            <div>
              <h3>Education</h3>
              <p>${formData.education}</p>
            </div>

            <div class="metrics">
              <div class="metric"><h3>${formData.yearsExperience}+</h3><p>Years Experience</p></div>
              <div class="metric"><h3>${formData.projectsCompleted}+</h3><p>Projects Completed</p></div>
              <div class="metric"><h3>${formData.cloudPlatforms}</h3><p>Cloud Platforms</p></div>
            </div>

            <div>
              <h3>Skills</h3>
              <div>${formData.skills.map(skill => `<span class="badge">${skill}</span>`).join("")}</div>
            </div>

            <div style="margin-top: 2rem;">
              <h3>Contact</h3>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>LinkedIn:</strong> <a href="https://${formData.linkedin}" target="_blank">${formData.linkedin}</a></p>
              <p><strong>GitHub:</strong> <a href="https://${formData.github}" target="_blank">${formData.github}</a></p>
            </div>
          </div>
        </body>
        </html>
        `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${formData.name.replace(" ", "_").toLowerCase()}_portfolio.html`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Create Your <span className="gradient-primary bg-clip-text text-transparent">Own Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Customize this portfolio template with your own information to create a professional presence
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Personal Information */}
          <Card className="p-8 gradient-card border-accent-cyan/20">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-accent-cyan" />
              <h2 className="text-2xl font-bold">Personal Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your Full Name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="title">Professional Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="e.g., Senior Cloud Platform Engineer"
                  className="mt-2"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="tagline">Professional Tagline</Label>
                <Input
                  id="tagline"
                  value={formData.tagline}
                  onChange={(e) => handleInputChange("tagline", e.target.value)}
                  placeholder="e.g., Designing scalable, secure, and cost-optimized cloud solutions"
                  className="mt-2"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="bio">Professional Bio *</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  placeholder="Write a brief professional bio about yourself..."
                  className="mt-2"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="education">Education</Label>
                <Input
                  id="education"
                  value={formData.education}
                  onChange={(e) => handleInputChange("education", e.target.value)}
                  placeholder="e.g., B.Tech Computer Science"
                  className="mt-2"
                />
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 gradient-card border-accent-purple/20">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-accent-purple" />
              <h2 className="text-2xl font-bold">Contact Information</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange("linkedin", e.target.value)}
                  placeholder="linkedin.com/in/yourprofile"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="github">GitHub Profile</Label>
                <Input
                  id="github"
                  value={formData.github}
                  onChange={(e) => handleInputChange("github", e.target.value)}
                  placeholder="github.com/yourusername"
                  className="mt-2"
                />
              </div>
            </div>
          </Card>

          {/* Profile Photo Upload */}
          <Card className="p-8 gradient-card border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Upload className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Profile Photo</h2>
            </div>

            <div className="text-center p-8 border-2 border-dashed border-muted rounded-lg">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                Upload a professional headshot photo
              </p>
              <Button variant="outline">
                Choose Photo
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Recommended: 800x800px, JPG or PNG format
              </p>
            </div>
          </Card>

          {/* Experience Stats */}
          <Card className="p-8 gradient-card border-accent-cyan/20">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-6 w-6 text-accent-cyan" />
              <h2 className="text-2xl font-bold">Experience Stats</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="yearsExperience">Years of Experience</Label>
                <Input
                  id="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={(e) => handleInputChange("yearsExperience", e.target.value)}
                  placeholder="e.g., 9+"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="projectsCompleted">Projects Completed</Label>
                <Input
                  id="projectsCompleted"
                  value={formData.projectsCompleted}
                  onChange={(e) => handleInputChange("projectsCompleted", e.target.value)}
                  placeholder="e.g., 50+"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="cloudPlatforms">Cloud Platforms</Label>
                <Input
                  id="cloudPlatforms"
                  value={formData.cloudPlatforms}
                  onChange={(e) => handleInputChange("cloudPlatforms", e.target.value)}
                  placeholder="e.g., 2 (AWS, Azure)"
                  className="mt-2"
                />
              </div>
            </div>
          </Card>

          {/* Skills Section */}
          <Card className="p-8 gradient-card border-accent-purple/20">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-6 w-6 text-accent-purple" />
              <h2 className="text-2xl font-bold">Skills & Technologies</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="skillInput">Add Skills</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="skillInput"
                    placeholder="e.g., AWS Lambda, Node.js, Python"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addSkill(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={(e) => {
                      const input = (e.currentTarget.previousElementSibling as HTMLInputElement);
                      addSkill(input.value);
                      input.value = '';
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>

              {formData.skills.length > 0 && (
                <div>
                  <Label>Current Skills:</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                        onClick={() => removeSkill(skill)}
                      >
                        {skill} ×
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Click on a skill to remove it
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Generate Portfolio Button */}
          <div className="text-center pt-8">
            <Button size="lg" className="gradient-primary hover:glow-effect" onClick={downloadHTML}>
              <Download className="mr-2 h-5 w-5" />
              Export My Portfolio as HTML
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              This will download a clean HTML version of your filled portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateYourOwn;