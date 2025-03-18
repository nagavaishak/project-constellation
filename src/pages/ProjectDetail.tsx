
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ProjectDetailView } from '@/components/ProjectDetailView';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  
  const project = projects.find(p => p.slug === slug);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
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
          project && <ProjectDetailView project={project} />
        )}
      </AnimatedSection>
    </Layout>
  );
};

export default ProjectDetail;
