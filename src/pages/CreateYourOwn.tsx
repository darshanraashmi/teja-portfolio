import React, { useState } from 'react';
import { Upload, Download, User, Github, Linkedin, GraduationCap, Code, Briefcase, Star, FileText, Plus, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface FormData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  education: string;
  email: string;
  mobile: string;
  linkedin: string;
  github: string;
  skills: string[];
  services: string[];
  projects: string[];
  profileImage: string;
}

// Skills Input Component
interface SkillsInputProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

const SkillsInput: React.FC<SkillsInputProps> = ({ skills, onChange }) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      onChange([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a skill"
          className="bg-secondary border-border text-sm"
        />
        <Button
          type="button"
          onClick={addSkill}
          size="sm"
          className="bg-primary hover:bg-primary/90 px-3"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
            {skill}
            <button
              onClick={() => removeSkill(index)}
              className="ml-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

// Projects Input Component
interface ProjectsInputProps {
  projects: string[];
  onChange: (projects: string[]) => void;
}

const ProjectsInput: React.FC<ProjectsInputProps> = ({ projects, onChange }) => {
  const [newProject, setNewProject] = useState('');

  const addProject = () => {
    if (newProject.trim() && !projects.includes(newProject.trim())) {
      onChange([...projects, newProject.trim()]);
      setNewProject('');
    }
  };

  const removeProject = (index: number) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addProject();
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Input
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a project"
          className="bg-secondary border-border text-sm"
        />
        <Button
          type="button"
          onClick={addProject}
          size="sm"
          className="bg-primary hover:bg-primary/90 px-3"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {projects.map((project, index) => (
          <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
            {project}
            <button
              onClick={() => removeProject(index)}
              className="ml-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

// Services Input Component
interface ServicesInputProps {
  services: string[];
  onChange: (services: string[]) => void;
}

const ServicesInput: React.FC<ServicesInputProps> = ({ services, onChange }) => {
  const [newService, setNewService] = useState('');

  const addService = () => {
    if (newService.trim() && !services.includes(newService.trim())) {
      onChange([...services, newService.trim()]);
      setNewService('');
    }
  };

  const removeService = (index: number) => {
    onChange(services.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addService();
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Input
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a service"
          className="bg-secondary border-border text-sm"
        />
        <Button
          type="button"
          onClick={addService}
          size="sm"
          className="bg-primary hover:bg-primary/90 px-3"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {services.map((service, index) => (
          <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
            {service}
            <button
              onClick={() => removeService(index)}
              className="ml-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

const CreateYourOwn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    title: '',
    tagline: '',
    bio: '',
    education: '',
    email: '',
    mobile: '',
    linkedin: '',
    github: '',
    skills: [],
    services: [],
    projects: [],
    profileImage: ''
  });

  const [imagePreview, setImagePreview] = useState<string>('');

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        handleInputChange('profileImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateHTML = () => {
    const skillsArray = formData.skills;
    const servicesArray = formData.services;
    const projectsArray = formData.projects;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.name} - ${formData.title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            color: #f1f5f9;
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .hero-section {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 4rem;
            align-items: start;
            margin-bottom: 4rem;
            padding: 3rem 0;
        }
        
        .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }
        
        .hero-content h2 {
            font-size: 1.5rem;
            color: #94a3b8;
            margin-bottom: 0.5rem;
        }
        
        .hero-content p {
            font-size: 1.1rem;
            color: #cbd5e1;
            margin-bottom: 2rem;
            max-width: 600px;
        }
        
        .hero-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .btn-secondary {
            background: transparent;
            color: #3b82f6;
            border: 2px solid #3b82f6;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }
        
        .profile-image {
            width: 350px;
            height: 350px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #3b82f6;
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }
        
        .section {
            margin-bottom: 4rem;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .section-title span {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }
        
        .card {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
            border-radius: 1rem;
            padding: 2rem;
            border: 1px solid rgba(59, 130, 246, 0.2);
            backdrop-filter: blur(10px);
        }
        
        .card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #3b82f6;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .skill-tag {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        
        .service-card {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
            border-radius: 1rem;
            padding: 1.5rem;
            border: 1px solid rgba(59, 130, 246, 0.2);
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            border-color: #3b82f6;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 1.5rem;
        }
        
        .project-card {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
            border-radius: 1rem;
            padding: 1.5rem;
            border: 1px solid rgba(59, 130, 246, 0.2);
            transition: transform 0.3s ease;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            border-color: #3b82f6;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .social-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(59, 130, 246, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #3b82f6;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .social-link:hover {
            background: #3b82f6;
            color: white;
            transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
            .hero-section {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 2rem;
            }
            
            .hero-content h1 {
                font-size: 2.5rem;
            }
            
            .profile-image {
                width: 200px;
                height: 200px;
                margin: 0 auto;
            }
            
            .about-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .hero-buttons {
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-content">
                <h1>${formData.name}</h1>
                <h2>${formData.title}</h2>
                <p>${formData.tagline}</p>
                 <div class="social-links">
                     ${formData.email ? `<a href="mailto:${formData.email}" class="social-link">✉️</a>` : ''}
                     ${formData.mobile ? `<a href="tel:${formData.mobile}" class="social-link">📞</a>` : ''}
                     ${formData.linkedin ? `<a href="${formData.linkedin}" class="social-link">💼</a>` : ''}
                     ${formData.github ? `<a href="${formData.github}" class="social-link">💻</a>` : ''}
                 </div>
            </div>
            ${formData.profileImage ? `<img src="${formData.profileImage}" alt="${formData.name}" class="profile-image">` : ''}
        </section>

        <!-- About Section -->
        <section id="about" class="section" style="margin-top: 2rem;">
            <h2 class="section-title" style="font-size: 2rem; margin-bottom: 2rem;">About <span>Me</span></h2>
            <div class="about-grid">
                <div class="card">
                    <h3 style="font-size: 1.2rem;">🧑‍💼 Professional Bio</h3>
                    <p>${formData.bio}</p>
                </div>
                
                <div>
                    ${formData.education ? `
                    <div class="card" style="margin-bottom: 1.5rem;">
                        <h3 style="font-size: 1.2rem;">🎓 Education</h3>
                        <p>${formData.education}</p>
                    </div>` : ''}
                    
                    <div class="card">
                        <h3 style="font-size: 1.2rem;">🚀 Skills</h3>
                        <div class="skills-grid">
                            ${skillsArray.map(skill => `<span class="skill-tag" style="font-size: 0.8rem; padding: 0.25rem 0.75rem;">${skill}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        ${servicesArray.length > 0 ? `
        <!-- Services Section -->
        <section class="section">
            <h2 class="section-title" style="font-size: 1.8rem; margin-bottom: 2rem;">My <span>Services</span></h2>
            <div class="services-grid">
                ${servicesArray.map(service => `
                    <div class="service-card">
                        <h3 style="font-size: 1.1rem;">⚡ ${service}</h3>
                    </div>
                `).join('')}
            </div>
        </section>` : ''}

        ${projectsArray.length > 0 ? `
        <!-- Projects Section -->
        <section class="section">
            <h2 class="section-title" style="font-size: 1.8rem; margin-bottom: 2rem;">Work & <span>Experience</span></h2>
            <div class="projects-grid">
                ${projectsArray.map(project => `
                    <div class="project-card">
                        <h3 style="font-size: 1.1rem;">📋 ${project}</h3>
                    </div>
                 `).join('')}
             </div>
         </section>` : ''}

         <!-- Signature Section -->
         <section class="section" style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(59, 130, 246, 0.2);">
             <p style="color: #94a3b8; font-size: 0.9rem;">
                 © ${new Date().getFullYear()} ${formData.name}. All rights reserved.
             </p>
         </section>
     </div>
 </body>
 </html>`;

    return html;
  };

  const downloadHTML = () => {
    const html = generateHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formData.name.replace(/\s+/g, '_').toLowerCase()}_portfolio.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadPDF = async () => {
    const html = generateHTML();
    
    // Create a hidden iframe to render the HTML
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    iframe.style.width = '1200px';
    iframe.style.height = '800px';
    document.body.appendChild(iframe);

    try {
      // Write HTML to iframe
      iframe.contentDocument?.open();
      iframe.contentDocument?.write(html);
      iframe.contentDocument?.close();

      // Wait for iframe to load
      await new Promise(resolve => {
        iframe.onload = resolve;
        setTimeout(resolve, 2000); // Fallback timeout
      });

      const iframeBody = iframe.contentDocument?.body;
      if (!iframeBody) throw new Error('Could not access iframe content');

      const canvas = await html2canvas(iframeBody, {
        scale: 1.5,
        useCORS: true,
        backgroundColor: '#0f172a',
        width: 1200,
        height: iframeBody.scrollHeight,
        scrollX: 0,
        scrollY: 0
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${formData.name.replace(/\s+/g, '_').toLowerCase()}_portfolio.pdf`);
    } finally {
      document.body.removeChild(iframe);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Create Your Portfolio
          </h1>
          <p className="text-muted-foreground text-lg">
            Build a professional portfolio website in minutes
          </p>
        </div>

        <Card className="bg-gradient-card border-border shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">Portfolio Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Info */}
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4" />
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  className="bg-secondary border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title" className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4" />
                  Professional Title
                </Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., Senior Software Engineer"
                  className="bg-secondary border-border"
                />
              </div>
            </div>

            {/* Tagline */}
            <div className="space-y-2">
              <Label htmlFor="tagline" className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4" />
                Tagline
              </Label>
              <Input
                id="tagline"
                value={formData.tagline}
                onChange={(e) => handleInputChange('tagline', e.target.value)}
                placeholder="A brief, compelling tagline about yourself"
                className="bg-secondary border-border"
              />
            </div>

            {/* Bio and Education Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-sm">Professional Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  placeholder="Write a detailed professional bio about your experience and expertise"
                  rows={4}
                  className="bg-secondary border-border text-sm"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="education" className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </Label>
                  <Input
                    id="education"
                    value={formData.education}
                    onChange={(e) => handleInputChange('education', e.target.value)}
                    placeholder="Your educational background"
                    className="bg-secondary border-border text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm">
                    <Code className="w-4 h-4" />
                    Skills
                  </Label>
                  <SkillsInput
                    skills={formData.skills}
                    onChange={(skills) => setFormData(prev => ({ ...prev, skills }))}
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  className="bg-secondary border-border text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4" />
                  Mobile Number
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="+1234567890"
                  className="bg-secondary border-border text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="flex items-center gap-2 text-sm">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="bg-secondary border-border text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="github" className="flex items-center gap-2 text-sm">
                  <Github className="w-4 h-4" />
                  GitHub
                </Label>
                <Input
                  id="github"
                  value={formData.github}
                  onChange={(e) => handleInputChange('github', e.target.value)}
                  placeholder="https://github.com/yourusername"
                  className="bg-secondary border-border text-sm"
                />
              </div>
            </div>

            {/* Services and Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">Services</Label>
                <ServicesInput
                  services={formData.services}
                  onChange={(services) => setFormData(prev => ({ ...prev, services }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm">Work / Projects</Label>
                <ProjectsInput
                  projects={formData.projects}
                  onChange={(projects) => setFormData(prev => ({ ...prev, projects }))}
                />
              </div>
            </div>

            {/* Profile Image */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-sm">
                <Upload className="w-4 h-4" />
                Profile Image
              </Label>
              
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="bg-secondary border-border text-sm"
                />
                
                {imagePreview && (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Profile preview"
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Download Buttons */}
            <div className="pt-4 space-y-3">
              <Button
                onClick={downloadHTML}
                className="w-full bg-gradient-primary hover:opacity-90 shadow-glow animate-fade-in"
                size="lg"
                disabled={!formData.name || !formData.title}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Portfolio HTML
              </Button>
              
              {/* <Button
                onClick={downloadPDF}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10 animate-fade-in"
                size="lg"
                disabled={!formData.name || !formData.title}
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Portfolio PDF
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateYourOwn;