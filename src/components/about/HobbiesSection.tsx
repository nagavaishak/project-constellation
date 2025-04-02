
import React from 'react';
import { MapPin, Headphones, BookOpen, Sparkles } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export const HobbiesSection = () => {
  return (
    <AnimatedSection delay={0.4} className="pt-12">
      <h2 className="text-2xl font-bold mb-8">What I Love</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="relative group overflow-hidden rounded-xl aspect-square hover-card">
          <img 
            src="/lovable-uploads/9c371112-78e7-496c-82f3-ee352cf17e1a.png" 
            alt="Traveling" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <div className="flex items-center text-white mb-2">
              <MapPin className="mr-2 h-5 w-5" />
              <h3 className="text-lg font-semibold">Exploring the World</h3>
            </div>
            <p className="text-sm text-white/90">Finding new perspectives through travel</p>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-xl aspect-square hover-card">
          <img 
            src="/lovable-uploads/a827e4f8-d603-40ba-8d91-1ddb9d75e961.png" 
            alt="Nature views" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <div className="flex items-center text-white mb-2">
              <Headphones className="mr-2 h-5 w-5" />
              <h3 className="text-lg font-semibold">Music & Sound</h3>
            </div>
            <p className="text-sm text-white/90">Finding rhythm in everyday life</p>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-xl aspect-square hover-card">
          <img 
            src="/lovable-uploads/0e35e687-4f17-4d0e-9901-a454a5f45dcf.png" 
            alt="Lake view" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <div className="flex items-center text-white mb-2">
              <BookOpen className="mr-2 h-5 w-5" />
              <h3 className="text-lg font-semibold">History & Culture</h3>
            </div>
            <p className="text-sm text-white/90">Learning from the past to shape the future</p>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-xl aspect-square hover-card">
          <img 
            src="/lovable-uploads/190cb59c-107c-41e0-b38b-1db49f44e40c.png" 
            alt="Mountain view" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <div className="flex items-center text-white mb-2">
              <Sparkles className="mr-2 h-5 w-5" />
              <h3 className="text-lg font-semibold">Exploring Ideas</h3>
            </div>
            <p className="text-sm text-white/90">Turning curiosity into innovation</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
