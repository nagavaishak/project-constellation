
export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
  content?: string;
}
