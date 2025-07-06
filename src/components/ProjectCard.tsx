
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectProps } from '@/types/project';
import { Badge } from '@/components/ui/badge';

type ProjectCardProps = {
  project: ProjectProps;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10, rotateY: 5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative h-full"
    >
      {/* Main card with hexagonal-inspired design */}
      <div className="relative h-full bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-lg border border-white/20 overflow-hidden shadow-2xl transform-gpu">
        {/* Unique shape using clip-path */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
          }}
        />
        
        {/* Animated border effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 blur-sm" 
               style={{ clipPath: 'inset(0 0 0 0 round 12px)' }} />
        </div>

        {/* Content container */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Image section with modern overlay */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
            {/* Geometric overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div 
              className="absolute top-0 right-0 w-20 h-20 bg-primary/30 backdrop-blur-sm"
              style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            />
          </div>

          {/* Content section */}
          <div className="flex flex-col flex-grow p-5 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-accent" />
            
            {/* Tags with modern styling */}
            <div className="flex flex-wrap gap-2 mb-3 relative z-10">
              {project.tags.slice(0, 3).map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge
                    variant="outline"
                    className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-primary/20 to-accent/20 border-white/30 text-white backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
              {project.tags.length > 3 && (
                <Badge
                  variant="outline"
                  className="px-2 py-1 text-xs font-medium bg-white/10 text-white/70 border-white/20"
                >
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>

            {/* Title with modern typography */}
            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300 relative">
              {project.title}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </h3>

            {/* Description */}
            <p className="text-sm text-white/80 mb-4 line-clamp-2 flex-grow leading-relaxed">
              {project.description}
            </p>

            {/* Actions section with modern layout */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
              {project.title === 'Ethica Labs' ? (
                <Link
                  to={`/projects/${project.slug}`}
                  className="group/link flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/80 to-accent/80 text-white text-sm font-medium rounded-full hover:from-primary hover:to-accent transition-all duration-300 transform hover:scale-105"
                >
                  View Details
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              
              {/* Social links with modern styling */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
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
                    className="p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Decorative corner element */}
            <div 
              className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-accent/30 to-transparent"
              style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
            />
          </div>
        </div>

        {/* Floating elements for extra visual interest */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-12 left-4 w-1 h-1 bg-accent rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};
