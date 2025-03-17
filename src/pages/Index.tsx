
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { ProjectCard, type Project } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

// Featured project
const featuredProject: Project = {
  id: '1',
  title: 'Censor-Analyzer',
  description: 'Social Media Censoring using visual sentiment analysis. A dynamic system that identifies and filters inappropriate content in real time on social media platforms.',
  tags: ['Flutter', 'TensorFlow', 'Firebase', 'Machine Learning'],
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  githubUrl: 'https://github.com/nagavaishak/censor-analyzer',
  liveUrl: 'https://ethicalabs.netlify.app/',
  slug: 'censor-analyzer',
};

// Research papers - under review
const researchPapers = [
  {
    id: 1,
    title: 'AI Governance for Hiring: A Multilayered Framework for Ethical, Transparent, and Accountable Recruitment Systems',
    journal: 'Journal of Business Ethics',
    status: 'Under Review',
    color: 'bg-[#D3E4FD]'
  },
  {
    id: 2,
    title: 'Quantum-Resistant Digital Evidence Validation: A Novel Framework for Post-Quantum Forensic Chain of Custody',
    journal: 'IEEE',
    status: 'Under Review',
    color: 'bg-[#E5DEFF]'
  },
  {
    id: 3,
    title: 'Failure as a Service: How Businesses Monetize Customer Dissatisfaction',
    journal: 'Strategic Management Journal',
    status: 'Under Review',
    color: 'bg-[#FFDEE2]'
  },
  {
    id: 4,
    title: 'The Psychology of Digital Hoarding: How Unlimited Cloud Storage is Changing Consumer Behaviour',
    journal: 'SSRN',
    status: 'Under Review',
    color: 'bg-[#FDE1D3]'
  }
];

const Index = () => {
  return (
    <Layout>
      <div className="container">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center py-20">
          <AnimatedSection className="space-y-6 max-w-3xl">
            <span className="text-sm md:text-base text-muted-foreground">Hi, my name is</span>
            <h1 className="text-4xl md:text-6xl font-bold">Naga Vaishak S K</h1>
            <h2 className="text-3xl md:text-5xl text-muted-foreground font-medium">
              Cloud engineer & stealthpreneur.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a cloud engineer by profession and stealthpreneur by passion.
              Currently, I'm working on a venture called Ethica Labs, focusing on building ethical and sustainable digital solutions.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/nagavaishak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/naga-vaishak-a322b2204/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <Link
                to="/contact"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Contact me"
              >
                <Mail size={24} />
              </Link>
            </div>
          </AnimatedSection>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20">
          <AnimatedSection className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium">Featured Projects</h2>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                View All Projects
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <ProjectCard project={featuredProject} />
            </div>
          </AnimatedSection>
        </section>

        {/* Latest Research Papers Section */}
        <section className="py-20">
          <AnimatedSection className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium">Latest Research Papers</h2>
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                View All Research
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchPapers.map((paper) => (
                <div 
                  key={paper.id} 
                  className={`${paper.color} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]`}
                >
                  <div className="flex flex-col h-full">
                    <div className="text-xs uppercase tracking-wider font-medium mb-2 text-muted-foreground">
                      {paper.journal} · {paper.status}
                    </div>
                    <h3 className="text-lg font-medium mb-4">{paper.title}</h3>
                    <div className="mt-auto">
                      <Button variant="outline" size="sm" className="gap-1 mt-2">
                        <FileText size={14} /> 
                        Request Paper
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
