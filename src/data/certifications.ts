
export interface Certification {
  id: number;
  name: string;
  issuer: string;
  skills: string[];
  icon: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Advanced Program in Product Development and Management",
    issuer: "Udemy",
    skills: ["Project Management"],
    icon: "product"
  },
  {
    id: 2,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    skills: ["Cloud Architecture", "AWS Services"],
    icon: "aws"
  },
  {
    id: 3,
    name: "Cloud Platform Job Simulation",
    issuer: "Forage Verizon",
    skills: ["Cloud Computing", "Infrastructure Management"],
    icon: "cloud"
  }
];
