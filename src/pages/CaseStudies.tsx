
import React from 'react';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CaseStudyCard, type CaseStudy } from '@/components/CaseStudyCard';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

// Sample case studies data
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

// Research papers - under review
const researchPapers = [
  {
    id: 1,
    title: 'AI Governance for Hiring: A Multilayered Framework for Ethical, Transparent, and Accountable Recruitment Systems',
    journal: 'Journal of Business Ethics',
    status: 'Under Review',
    color: 'bg-[#D3E4FD]'
  },
  {
    id: 2,
    title: 'Quantum-Resistant Digital Evidence Validation: A Novel Framework for Post-Quantum Forensic Chain of Custody',
    journal: 'IEEE',
    status: 'Under Review',
    color: 'bg-[#E5DEFF]'
  },
  {
    id: 3,
    title: 'Failure as a Service: How Businesses Monetize Customer Dissatisfaction',
    journal: 'Strategic Management Journal',
    status: 'Under Review',
    color: 'bg-[#FFDEE2]'
  },
  {
    id: 4,
    title: 'The Psychology of Digital Hoarding: How Unlimited Cloud Storage is Changing Consumer Behaviour',
    journal: 'SSRN',
    status: 'Under Review',
    color: 'bg-[#FDE1D3]'
  }
];

const CaseStudies = () => {
  const navigate = useNavigate();

  const handleRequestPaper = (paperTitle: string) => {
    const encodedMessage = encodeURIComponent(`Request paper - ${paperTitle}`);
    navigate(`/contact?message=${encodedMessage}`);
  };

  return (
    <Layout>
      <div className="container py-20">
        <AnimatedSection className="space-y-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Research & Case Studies</h1>
            <p className="text-muted-foreground">
              I like to dive into diverse topics that intersect technology, ethics, and business innovation.
            </p>
          </div>
          
          {/* Case Studies Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-medium mb-6">Case Studies</h2>
            <div className="max-w-3xl">
              {caseStudies.map((study) => (
                <AnimatedSection key={study.id} delay={0.1}>
                  <CaseStudyCard study={study} />
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Research Papers Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Research Papers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchPapers.map((paper) => (
                <AnimatedSection key={paper.id} delay={0.1} className="h-full">
                  <div className={`${paper.color} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] h-full`}>
                    <div className="flex flex-col h-full">
                      <div className="text-xs uppercase tracking-wider font-medium mb-2 text-muted-foreground">
                        {paper.journal} · {paper.status}
                      </div>
                      <h3 className="text-lg font-medium mb-4">{paper.title}</h3>
                      <div className="mt-auto">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1 mt-2"
                          onClick={() => handleRequestPaper(paper.title)}
                        >
                          <FileText size={14} /> 
                          Request Paper
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default CaseStudies;
