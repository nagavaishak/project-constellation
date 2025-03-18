
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectProps } from '@/types/project';

type ProjectCardProps = {
  project: ProjectProps;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block px-1.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="inline-block px-1.5 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded-md">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <h3 className="text-base font-medium mb-1">{project.title}</h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-grow">{project.description}</p>
        <div className="flex items-center justify-between mt-auto">
          {project.title === 'Ethica Labs' ? (
            <Link
              to={`/projects/${project.slug}`}
              className="text-xs font-medium group inline-flex items-center gap-1 link-underline"
            >
              View Details
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ) : (
            <div></div> // Empty div to maintain spacing
          )}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={16} />
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
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
