import React from 'react';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Users, Award, TrendingUp } from 'lucide-react';

// Clubs and societies data
const clubsData = [
  {
    id: 1,
    name: 'Irish Student Consultant Group',
    description: 'Leading consulting society fostering business acumen and strategic thinking through real-world case studies and industry partnerships.',
    role: 'Active Member',
    color: 'bg-[#E8F5E8]',
    icon: <Users className="w-5 h-5" />,
    highlights: ['Strategic consulting projects', 'Case study competitions', 'Industry networking']
  },
  {
    id: 2,
    name: 'Student Management Fund',
    description: 'Investment society focused on portfolio management and financial analysis, managing real capital with data-driven investment strategies.',
    role: 'Portfolio Analyst',
    color: 'bg-[#FFF4E6]',
    icon: <TrendingUp className="w-5 h-5" />,
    highlights: ['Portfolio management', 'Financial modeling', 'Investment research']
  },
  {
    id: 3,
    name: 'Trinity Entrepreneurial Society',
    description: 'Innovation hub connecting aspiring entrepreneurs and industry leaders, fostering startup culture and business innovation.',
    role: 'Community Member',
    color: 'bg-[#F0F4FF]',
    icon: <Award className="w-5 h-5" />,
    highlights: ['Startup ecosystem', 'Pitch competitions', 'Mentorship programs']
  }
];

const Clubs = () => {
  return (
    <Layout>
      <div className="container py-20">
        <AnimatedSection className="space-y-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Trinity Business School</h1>
            <h2 className="text-2xl text-muted-foreground mb-6">Clubs & Societies</h2>
            <p className="text-lg text-muted-foreground">
              Active involvement in Trinity Business School's vibrant community, contributing to strategic initiatives, 
              financial analysis, and entrepreneurial ventures that shape the future of business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {clubsData.map((club, index) => (
              <AnimatedSection key={club.id} delay={index * 0.1} className="h-full">
                <div className={`${club.color} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] h-full border border-border/10 relative overflow-hidden`}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      {club.icon}
                      <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                        {club.role}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 leading-tight">{club.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {club.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground mb-2">Key Activities:</div>
                      <div className="flex flex-wrap gap-2">
                        {club.highlights.map((highlight, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 text-xs bg-background/60 backdrop-blur-sm rounded-full border border-border/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.4} className="mt-16">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/10">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-4">Leadership & Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through active participation in these societies, I've developed strategic thinking, financial acumen, 
                  and entrepreneurial mindset. Each organization provides unique opportunities to apply theoretical 
                  knowledge to real-world challenges, build meaningful professional relationships, and contribute to 
                  Trinity's dynamic business community.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Clubs;