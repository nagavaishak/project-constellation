
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

export const ContactCTA = () => {
  return (
    <AnimatedSection delay={0.5} className="pt-8">
      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Want to work together?</h2>
        <p className="text-lg mb-6">I'm always open to discussing new projects, opportunities and collaborations.</p>
        <Button asChild>
          <Link to="/contact" className="inline-flex items-center">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
};
