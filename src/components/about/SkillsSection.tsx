
import React from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';

export const SkillsSection = () => {
  return (
    <AnimatedSection delay={0.3} className="space-y-6 pt-8">
      <h2 className="text-2xl font-bold">Key Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Cloud Engineering</h3>
          <p className="text-sm text-muted-foreground">AWS, Azure, GCP, Kubernetes</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Machine Learning</h3>
          <p className="text-sm text-muted-foreground">TensorFlow, Computer Vision</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Blockchain</h3>
          <p className="text-sm text-muted-foreground">Smart Contracts, DApps</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Entrepreneurship</h3>
          <p className="text-sm text-muted-foreground">Startup Strategy, Product Development</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Management</h3>
          <p className="text-sm text-muted-foreground">Team Leadership, Project Management</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Innovation</h3>
          <p className="text-sm text-muted-foreground">Design Thinking, Creative Problem Solving</p>
        </div>
      </div>
    </AnimatedSection>
  );
};
