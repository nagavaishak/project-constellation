
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { projects } from '@/data/projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <Layout>
      <div className="container py-16">
        <AnimatedSection className="space-y-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-muted-foreground">
              A collection of projects I've worked on. Each project is unique and showcases different skills and technologies.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full pt-4">
            <TabsList className="flex flex-wrap mb-8 h-auto">
              <TabsTrigger 
                value="all" 
                onClick={() => setFilter("all")}
                className="mb-2 mr-2"
              >
                All Projects
              </TabsTrigger>
              {allTags.map(tag => (
                <TabsTrigger 
                  key={tag} 
                  value={tag}
                  onClick={() => setFilter(tag)}
                  className="mb-2 mr-2"
                >
                  {tag}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={filter} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProjects.map((project) => (
                  <AnimatedSection key={project.id} delay={0.1}>
                    <ProjectCard project={project} />
                  </AnimatedSection>
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No projects found with the selected filter.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Projects;
