
import React from 'react';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ProfileSection } from '@/components/about/ProfileSection';
import { CertificationsSection } from '@/components/about/CertificationsSection';
import { EducationWorkSection } from '@/components/about/EducationWorkSection';
import { SkillsSection } from '@/components/about/SkillsSection';
import { HobbiesSection } from '@/components/about/HobbiesSection';
import { ContactCTA } from '@/components/about/ContactCTA';
import { certifications } from '@/data/certifications';

const About = () => {
  return (
    <Layout>
      <div className="container py-20">
        <AnimatedSection className="space-y-12">
          {/* Profile Section */}
          <ProfileSection />
          
          {/* Certifications Section */}
          <CertificationsSection certifications={certifications} />
          
          {/* Education & Work Section */}
          <EducationWorkSection />
          
          {/* My Skills Section */}
          <SkillsSection />
          
          {/* Hobbies in Creative Format */}
          <HobbiesSection />
          
          {/* Contact CTA */}
          <ContactCTA />
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default About;
