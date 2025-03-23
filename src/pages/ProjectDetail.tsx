
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ProjectDetailView } from '@/components/ProjectDetailView';
import { projects } from '@/data/projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projectIndex >= 0 ? projects[projectIndex] : undefined;
  
  // Get previous and next projects for navigation
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
  
  useEffect(() => {
    // Reset loading state when slug changes
    setLoading(true);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [slug]);
  
  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!loading && !project) {
    return <Navigate to="/projects" replace />;
  }
  
  return (
    <Layout>
      <AnimatedSection>
        {loading ? (
          <div className="container py-12">
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="h-8 bg-muted rounded animate-pulse w-1/4"></div>
              <div className="h-12 bg-muted rounded animate-pulse w-3/4"></div>
              <div className="h-6 bg-muted rounded animate-pulse w-full"></div>
              <div className="h-64 bg-muted rounded animate-pulse w-full mt-8"></div>
              <div className="space-y-2 mt-8">
                <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-4/6"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {project && <ProjectDetailView project={project} />}
            
            {/* Project Navigation */}
            <div className="container py-8 max-w-4xl mx-auto">
              <div className="flex justify-between mt-12 border-t pt-8">
                {prevProject ? (
                  <Link to={`/projects/${prevProject.slug}`}>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ChevronLeft size={16} />
                      <span className="hidden sm:inline">Previous:</span> 
                      <span className="truncate max-w-[100px] sm:max-w-xs">{prevProject.title}</span>
                    </Button>
                  </Link>
                ) : (
                  <div></div>
                )}
                
                {nextProject && (
                  <Link to={`/projects/${nextProject.slug}`}>
                    <Button variant="outline" className="flex items-center gap-2">
                      <span className="truncate max-w-[100px] sm:max-w-xs">{nextProject.title}</span>
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight size={16} />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
      </AnimatedSection>
    </Layout>
  );
};

export default ProjectDetail;
