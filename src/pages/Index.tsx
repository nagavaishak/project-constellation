
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Github, Linkedin, Mail } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: 'url(/lovable-uploads/ea7d612c-2c52-4d2d-90ce-005bf7a705bc.png)',
            willChange: 'transform'
          }}
        />
        
        {/* Gradient Overlays for better text readability */}
        <div className="fixed inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="fixed inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        
        {/* Content Container */}
        <div className="relative z-10 container">
          {/* Hero Section */}
          <section className="min-h-[90vh] flex flex-col justify-center">
            <AnimatedSection className="space-y-6 max-w-3xl">
              <span className="text-sm md:text-base text-primary/90 backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full inline-block">
                Hi, my name is
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
                Naga Vaishak S K
              </h1>
              <h2 className="text-3xl md:text-5xl text-white/90 font-medium drop-shadow-xl">
                Blockchain enthusiast, aspiring management professional & stealthpreneur.
              </h2>
              <p className="text-lg text-white/80 max-w-2xl backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-white/10">
                I'm passionate about blockchain and web3 technologies, with a keen interest in decentralized systems and innovation.
                Currently, I'm working on a venture called Ethica Labs, and pursuing my masters at trinity business school.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/nagavaishak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-white"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/naga-vaishak-a322b2204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <Link
                  to="/contact"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-white"
                  aria-label="Contact me"
                >
                  <Mail size={24} />
                </Link>
              </div>
            </AnimatedSection>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
