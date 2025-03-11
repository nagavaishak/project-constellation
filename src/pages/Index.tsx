
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="container">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center py-20">
          <AnimatedSection className="space-y-6 max-w-3xl">
            <span className="text-sm md:text-base text-muted-foreground">Hi, my name is</span>
            <h1 className="text-4xl md:text-6xl font-bold">John Doe</h1>
            <h2 className="text-3xl md:text-5xl text-muted-foreground font-medium">
              I build things for the web.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a software developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </AnimatedSection>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20">
          <AnimatedSection className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium">Featured Projects</h2>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                View All Projects
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project cards will go here when we implement the projects page */}
            </div>
          </AnimatedSection>
        </section>

        {/* Latest Posts Section */}
        <section className="py-20">
          <AnimatedSection className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium">Latest Posts</h2>
              <Link
                to="/blog"
                className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                View All Posts
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="space-y-8">
              {/* Blog posts will go here when we implement the blog page */}
            </div>
          </AnimatedSection>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
