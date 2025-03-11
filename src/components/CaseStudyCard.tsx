
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export type CaseStudy = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
};

type CaseStudyCardProps = {
  study: CaseStudy;
};

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <motion.div 
      className="mb-10 group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6 border border-border rounded-lg hover:border-primary/20 transition-colors">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center text-sm text-muted-foreground space-x-3">
            <span>{study.date}</span>
            <span>•</span>
            <span>{study.readTime} read</span>
            <span>•</span>
            <span>{study.category}</span>
          </div>
          <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{study.title}</h3>
          <p className="text-muted-foreground">{study.excerpt}</p>
          <div className="pt-3">
            <a
              href={`/case-studies/${study.slug}`}
              className="inline-flex items-center text-sm text-foreground hover:text-primary transition-colors"
            >
              Read Case Study
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
