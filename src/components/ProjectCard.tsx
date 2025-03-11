
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
};

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="text-sm font-medium group inline-flex items-center gap-1 link-underline"
          >
            View Details
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
