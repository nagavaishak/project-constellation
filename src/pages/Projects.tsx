
import React from 'react';
import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { projects } from '@/data/projects';

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
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
