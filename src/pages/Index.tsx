
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Github, Linkedin, Mail } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="container relative">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center">
          <AnimatedSection className="space-y-6 max-w-3xl">
            <span className="text-sm md:text-base text-primary">Hi, my name is</span>
            <h1 className="text-4xl md:text-6xl font-bold">Naga Vaishak S K</h1>
            <h2 className="text-3xl md:text-5xl text-muted-foreground font-medium">
              Cloud engineer & stealthpreneur.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a cloud engineer by profession and stealthpreneur by passion.
              Currently, I'm working on a venture called Ethica Labs, focusing on building ethical and sustainable digital solutions.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/nagavaishak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/naga-vaishak-a322b2204/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <Link
                to="/contact"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Contact me"
              >
                <Mail size={24} />
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
