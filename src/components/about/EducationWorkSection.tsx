
import React from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';

export const EducationWorkSection = () => {
  return (
    <AnimatedSection delay={0.2} className="space-y-6 pt-12">
      <h2 className="text-2xl font-bold">Education & Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-md border border-border hover-card">
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">CMR Institute of Technology</h3>
                <p className="text-muted-foreground text-sm">Bachelor's Degree</p>
              </div>
            </div>
            <p className="text-muted-foreground">I studied at CMR Institute of Technology where I developed my technical foundation in computer science and engineering.</p>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-md border border-border hover-card">
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Trinity Business School</h3>
                <p className="text-muted-foreground text-sm">MSc in Management</p>
              </div>
            </div>
            <p className="text-muted-foreground">Currently pursuing my Master's degree in Management at Trinity Business School, focusing on business strategy and innovation.</p>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-md border border-border hover-card">
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Ellucian</h3>
                <p className="text-muted-foreground text-sm">Former Cloud Engineer (2 years)</p>
              </div>
            </div>
            <p className="text-muted-foreground">Worked at Ellucian as a Cloud Engineer for 2 years, designing and implementing scalable cloud solutions.</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
