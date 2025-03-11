
import React from 'react';
import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="container py-20">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-muted-foreground">
                Have a question or want to work together? Feel free to reach out using the form below
                or through social media.
              </p>
            </div>

            <div className="flex items-center gap-6 py-4">
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
              <a
                href="mailto:nagavaishak@gmail.com"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
