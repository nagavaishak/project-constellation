
import React from 'react';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CaseStudyCard, type CaseStudy } from '@/components/CaseStudyCard';
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

// Sample case studies data
const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Quantum-Resistant Digital Evidence Validation: A Novel Framework for Post-Quantum Forensic Chain of Custody',
    excerpt: 'A framework for ensuring digital evidence remains secure against quantum computing attacks.',
    date: '2024-04-15',
    readTime: '10 min',
    category: 'Cybersecurity',
    slug: 'quantum-resistant-digital-evidence',
  },
  // Add more case studies as needed
];

// Research papers - under review
const researchPapers = [
  {
    id: 1,
    title: 'AI Governance for Hiring: A Multilayered Framework for Ethical, Transparent, and Accountable Recruitment Systems',
    journal: 'SSRN',
    status: 'Under Review',
    color: 'bg-[#D3E4FD]',
    url: 'https://papers.ssrn.com/abstract=5200490'
  },
  {
    id: 2,
    title: 'Failure as a Service: How Businesses Monetize Customer Dissatisfaction',
    journal: 'Strategic Management Journal',
    status: 'Under Review',
    color: 'bg-[#FFDEE2]'
  },
  {
    id: 3,
    title: 'The Psychology of Digital Hoarding: How Unlimited Cloud Storage is Changing Consumer Behaviour',
    journal: 'SSRN',
    status: 'Under Review',
    color: 'bg-[#FDE1D3]',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5172811'
  }
];

const CaseStudies = () => {
  const navigate = useNavigate();

  const handleRequestPaper = (paperTitle: string) => {
    const encodedMessage = encodeURIComponent(`Request paper - ${paperTitle}`);
    navigate(`/contact?message=${encodedMessage}`);
  };

  const handleReadCaseStudy = (studyTitle: string) => {
    const encodedMessage = encodeURIComponent(`Read case study - ${studyTitle}`);
    navigate(`/contact?message=${encodedMessage}`);
  };
  
  const handlePaperAction = (paper: typeof researchPapers[0]) => {
    if (paper.url) {
      window.open(paper.url, '_blank');
    } else {
      handleRequestPaper(paper.title);
    }
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
                        onClick={() => handlePaperAction(paper)}
                      >
                        {paper.url ? (
                          <>
                            <ExternalLink size={14} /> 
                            Read it here
                          </>
                        ) : (
                          <>
                            <FileText size={14} /> 
                            Request Paper
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            
            {/* Quantum paper with same styling */}
            <AnimatedSection delay={0.1} className="h-full">
              <div className={`bg-[#E5DEFF] rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] h-full`}>
                <div className="flex flex-col h-full">
                  <div className="text-xs uppercase tracking-wider font-medium mb-2 text-muted-foreground">
                    Digital Forensics Journal · Under Review
                  </div>
                  <h3 className="text-lg font-medium mb-4">{caseStudies[0].title}</h3>
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-1 mt-2"
                      onClick={() => handleReadCaseStudy(caseStudies[0].title)}
                    >
                      <FileText size={14} /> 
                      Read Paper
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default CaseStudies;
