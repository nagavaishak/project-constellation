
import React from 'react';
import { Layout } from '@/components/Layout';
import { ProjectCard, type Project } from '@/components/ProjectCard';
import { AnimatedSection } from '@/components/AnimatedSection';

// Sample projects data - replace with your actual projects
const projects: Project[] = [
  {
    id: '1',
    title: 'Censor-Analyzer',
    description: 'Social Media Censoring using visual sentiment analysis. A dynamic system that identifies and filters inappropriate content in real time on social media platforms.',
    tags: ['Flutter', 'TensorFlow', 'Firebase', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    githubUrl: 'https://github.com/nagavaishak/censor-analyzer',
    liveUrl: 'https://ethicalabs.netlify.app/',
    slug: 'censor-analyzer',
  },
  {
    id: '2',
    title: 'Ethica Labs',
    description: 'Building ethical and sustainable digital solutions.',
    tags: ['Sustainability', 'Ethics', 'Technology'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    githubUrl: 'https://github.com/nagavaishak',
    liveUrl: 'https://example.com',
    slug: 'ethica-labs',
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="container py-20">
        <AnimatedSection className="space-y-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-muted-foreground">
              A collection of projects I've worked on. Each project is unique and showcases different skills and technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {projects.map((project) => (
              <AnimatedSection key={project.id} delay={0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Projects;
