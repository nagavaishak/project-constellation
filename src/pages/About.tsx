
import React from 'react';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  FileText, 
  ArrowRight, 
  MapPin, 
  Headphones, 
  BookOpen, 
  Sparkles,
  Award,
  CheckCircle2,
  Download,
  ChevronDown
} from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const certifications = [
  {
    id: 1,
    name: "Advanced Program in Product Development and Management",
    issuer: "Udemy",
    skills: ["Project Management"],
    icon: "product"
  },
  {
    id: 2,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    skills: ["Cloud Architecture", "AWS Services"],
    icon: "aws"
  },
  {
    id: 3,
    name: "Cloud Platform Job Simulation",
    issuer: "Forage Verizon",
    skills: ["Cloud Computing", "Infrastructure Management"],
    icon: "cloud"
  }
];

const About = () => {
  return (
    <Layout>
      <div className="container py-20">
        <AnimatedSection className="space-y-12">
          {/* Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="text-lg text-muted-foreground">
                I'm Naga Vaishak S K, a cloud engineer with a passion for building ethical and sustainable digital solutions. 
                As the founder of Ethica Labs, I'm focused on developing solutions that balance innovation with 
                ethical considerations.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Link>
                </Button>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="group">
                      <FileText className="mr-2 h-4 w-4 group-hover:animate-pulse" /> 
                      Download Profile
                      <ChevronDown className="ml-2 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-0 bg-card backdrop-blur-sm border-primary/20">
                    <div className="grid gap-1 p-2">
                      <a 
                        href="https://drive.google.com/drive/folders/1NQTE8T5N7HkQBWD59IcO_De4GVMJVRv1?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-primary/10 transition-colors"
                      >
                        <Download className="mr-2 h-4 w-4 text-primary" />
                        <span>Download CV</span>
                      </a>
                      <a 
                        href="https://drive.google.com/drive/folders/1NQTE8T5N7HkQBWD59IcO_De4GVMJVRv1?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-primary/10 transition-colors"
                      >
                        <FileText className="mr-2 h-4 w-4 text-primary" />
                        <span>Download Resume</span>
                      </a>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/lovable-uploads/36d8cacb-5396-445b-90dc-48e9d0f0b676.png" 
                  alt="Naga Vaishak S K" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-lg"></div>
            </div>
          </div>
          
          {/* Certifications Section */}
          <AnimatedSection delay={0.15} className="space-y-6 pt-8">
            <h2 className="text-2xl font-bold">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="hover-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <div className="bg-primary/10 p-2.5 rounded-full mr-3">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                    </div>
                    <CardDescription>Issued by {cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cert.skills.map((skill, index) => (
                        <div key={index} className="flex items-center text-xs bg-secondary px-2 py-1 rounded-full">
                          <CheckCircle2 className="h-3 w-3 mr-1 text-primary" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Education & Work Section */}
          <AnimatedSection delay={0.2} className="space-y-6 pt-12">
            <h2 className="text-2xl font-bold">Education & Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border hover-card">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">CMR Institute of Technology</h3>
                      <p className="text-muted-foreground text-sm">Bachelor's Degree</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">I studied at CMR Institute of Technology where I developed my technical foundation in computer science and engineering.</p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md border border-border hover-card">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Ellucian</h3>
                      <p className="text-muted-foreground text-sm">Cloud Engineer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Currently working at Ellucian as a Cloud Engineer, designing and implementing scalable cloud solutions.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* My Skills Section */}
          <AnimatedSection delay={0.3} className="space-y-6 pt-8">
            <h2 className="text-2xl font-bold">Key Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Cloud Engineering</h3>
                <p className="text-sm text-muted-foreground">AWS, Azure, GCP, Kubernetes</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">TensorFlow, Computer Vision</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Blockchain</h3>
                <p className="text-sm text-muted-foreground">Smart Contracts, DApps</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Entrepreneurship</h3>
                <p className="text-sm text-muted-foreground">Startup Strategy, Product Development</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Management</h3>
                <p className="text-sm text-muted-foreground">Team Leadership, Project Management</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Design Thinking, Creative Problem Solving</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Hobbies in Creative Format */}
          <AnimatedSection delay={0.4} className="pt-12">
            <h2 className="text-2xl font-bold mb-8">What I Love</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group overflow-hidden rounded-xl aspect-square hover-card">
                <img 
                  src="/lovable-uploads/9c371112-78e7-496c-82f3-ee352cf17e1a.png" 
                  alt="Traveling" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center text-white mb-2">
                    <MapPin className="mr-2 h-5 w-5" />
                    <h3 className="text-lg font-semibold">Exploring the World</h3>
                  </div>
                  <p className="text-sm text-white/90">Finding new perspectives through travel</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl aspect-square hover-card">
                <img 
                  src="/lovable-uploads/a827e4f8-d603-40ba-8d91-1ddb9d75e961.png" 
                  alt="Nature views" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center text-white mb-2">
                    <Headphones className="mr-2 h-5 w-5" />
                    <h3 className="text-lg font-semibold">Music & Sound</h3>
                  </div>
                  <p className="text-sm text-white/90">Finding rhythm in everyday life</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl aspect-square hover-card">
                <img 
                  src="/lovable-uploads/0e35e687-4f17-4d0e-9901-a454a5f45dcf.png" 
                  alt="Lake view" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center text-white mb-2">
                    <BookOpen className="mr-2 h-5 w-5" />
                    <h3 className="text-lg font-semibold">History & Culture</h3>
                  </div>
                  <p className="text-sm text-white/90">Learning from the past to shape the future</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl aspect-square hover-card">
                <img 
                  src="/lovable-uploads/190cb59c-107c-41e0-b38b-1db49f44e40c.png" 
                  alt="Mountain view" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center text-white mb-2">
                    <Sparkles className="mr-2 h-5 w-5" />
                    <h3 className="text-lg font-semibold">Exploring Ideas</h3>
                  </div>
                  <p className="text-sm text-white/90">Turning curiosity into innovation</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5} className="pt-8">
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Want to work together?</h2>
              <p className="text-lg mb-6">I'm always open to discussing new projects, opportunities and collaborations.</p>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default About;
