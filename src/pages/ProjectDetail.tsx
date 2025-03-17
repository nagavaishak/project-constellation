
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import ReactMarkdown from 'react-markdown';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="container py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-8">Sorry, the project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-10 md:py-16">
        <AnimatedSection>
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <ReactMarkdown>{project.content || ''}</ReactMarkdown>
              </div>
              
              <div className="flex gap-4 mt-8">
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Github size={16} className="mr-2" />
                      View GitHub
                    </a>
                  </Button>
                )}
                
                {project.liveUrl && (
                  <Button asChild size="sm">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="sticky top-20">
                <div className="rounded-lg overflow-hidden border border-border mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-video object-cover" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Project Overview</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
