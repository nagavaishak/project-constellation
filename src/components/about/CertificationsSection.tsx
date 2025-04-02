
import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  skills: string[];
  icon: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <AnimatedSection delay={0.15} className="space-y-6 pt-8">
      <h2 className="text-2xl font-bold">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <Card key={cert.id} className="hover-card">
            <CardHeader className="pb-2">
              <div className="flex items-center mb-2">
                <div className="bg-primary/10 p-2.5 rounded-full mr-3">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{cert.name}</CardTitle>
              </div>
              <CardDescription>Issued by {cert.issuer}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {cert.skills.map((skill, index) => (
                  <div key={index} className="flex items-center text-xs bg-secondary px-2 py-1 rounded-full">
                    <CheckCircle2 className="h-3 w-3 mr-1 text-primary" />
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
};
