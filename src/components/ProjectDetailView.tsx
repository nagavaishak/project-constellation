
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ProjectProps } from '@/types/project';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink, Calendar, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

type ProjectDetailViewProps = {
  project: ProjectProps;
};

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  const navigate = useNavigate();
  
  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)} 
        className="mb-8 -ml-2 text-muted-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Button>
      
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-2.5 py-0.5 text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
          
          <div className="flex items-center flex-wrap gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                <Github size={16} />
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            
            {project.date && (
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                {project.date}
              </span>
            )}
            
            {project.client && (
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <User size={16} />
                {project.client}
              </span>
            )}
          </div>
        </div>
        
        {/* Featured Image */}
        {project.image && (
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </div>
        )}
        
        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {project.content && (
            <ReactMarkdown>{project.content}</ReactMarkdown>
          )}
        </div>
        
        {/* Related Projects section would go here */}
        
        {/* Contact CTA */}
        <div className="mt-12 bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Interested in working together?</h3>
          <p className="mb-4 text-muted-foreground">Feel free to reach out if you'd like to discuss a similar project or collaboration.</p>
          <Link to="/contact">
            <Button>
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
