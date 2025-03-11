
import React from 'react';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CaseStudyCard, type CaseStudy } from '@/components/CaseStudyCard';

// Sample case studies data - replace with your actual case studies
const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Cloud Infrastructure Optimization',
    excerpt: 'How we reduced cloud costs by 40% while improving performance.',
    date: '2024-02-20',
    readTime: '8 min',
    category: 'Cloud Engineering',
    slug: 'cloud-infrastructure-optimization',
  },
  // Add more case studies as needed
];

const CaseStudies = () => {
  return (
    <Layout>
      <div className="container py-20">
        <AnimatedSection className="space-y-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
            <p className="text-muted-foreground">
              Detailed explorations of technical challenges and solutions I've worked on.
            </p>
          </div>
          <div className="max-w-3xl mt-12">
            {caseStudies.map((study) => (
              <AnimatedSection key={study.id} delay={0.1}>
                <CaseStudyCard study={study} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default CaseStudies;
