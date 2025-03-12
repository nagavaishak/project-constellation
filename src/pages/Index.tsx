
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { ProjectCard, type Project } from '@/components/ProjectCard';

// Featured project
const featuredProject: Project = {
  id: '1',
  title: 'Ethica Labs',
  description: 'Building ethical and sustainable digital solutions.',
  tags: ['Sustainability', 'Ethics', 'Technology'],
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  githubUrl: 'https://github.com/nagavaishak',
  liveUrl: 'https://ethicalabs.netlify.app/',
  slug: 'ethica-labs',
};

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

        {/* Latest Case Studies Section */}
        <section className="py-20">
          <AnimatedSection className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium">Latest Case Studies</h2>
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                View All Case Studies
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="space-y-8">
              {/* Case study cards will go here */}
            </div>
          </AnimatedSection>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
