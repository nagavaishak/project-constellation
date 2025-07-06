
import React from 'react';

interface SharedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const SharedBackground: React.FC<SharedBackgroundProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/lovable-uploads/73e36354-6ab6-43b8-a4c1-f8b2baa6ade0.png)',
        }}
      />
      
      {/* Subtle overlay for better readability */}
      <div className="fixed inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
