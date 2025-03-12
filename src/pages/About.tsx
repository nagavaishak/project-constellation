
import React from 'react';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, FileText, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container py-20">
        <AnimatedSection className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="text-lg text-muted-foreground">
                I'm Naga Vaishak S K, a cloud engineer with a passion for building ethical and sustainable digital solutions. 
                With expertise in cloud infrastructure, machine learning, and mobile app development, I strive to create 
                technology that makes a positive impact.
              </p>
              <p className="text-lg text-muted-foreground">
                As the founder of Ethica Labs, I'm focused on developing solutions that balance innovation with 
                ethical considerations. My work spans from AI-driven content moderation to healthcare applications 
                and blockchain implementations.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
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
          
          <AnimatedSection delay={0.2} className="space-y-6 pt-12">
            <h2 className="text-2xl font-bold">Skills & Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Cloud Engineering</h3>
                <p className="text-sm text-muted-foreground">AWS, Azure, GCP, Kubernetes, Docker</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Software Development</h3>
                <p className="text-sm text-muted-foreground">Flutter, React, Java, Python, Dart</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, Computer Vision</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Blockchain</h3>
                <p className="text-sm text-muted-foreground">Smart Contracts, DApps, Web3</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">DevOps</h3>
                <p className="text-sm text-muted-foreground">CI/CD, Infrastructure as Code, GitOps</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Project Management</h3>
                <p className="text-sm text-muted-foreground">Agile, Scrum, Tech Leadership</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3} className="pt-8">
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
