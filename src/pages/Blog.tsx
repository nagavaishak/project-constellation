
import React from 'react';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Ethical AI in Business Decision-Making',
    excerpt: 'How businesses can leverage AI responsibly while maintaining ethical standards and human oversight.',
    date: '2024-04-15',
    readTime: '6 min',
    category: 'AI Ethics',
    slug: 'ethical-ai-business-decision-making',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
  {
    id: '2',
    title: 'Blockchain Beyond Cryptocurrency: Real-World Applications',
    excerpt: 'Exploring how blockchain technology is transforming industries beyond finance through practical use cases.',
    date: '2024-03-10',
    readTime: '8 min',
    category: 'Blockchain',
    slug: 'blockchain-real-world-applications',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a'
  },
  {
    id: '3',
    title: 'Cloud Migration Strategies for Enterprise Applications',
    excerpt: 'A comprehensive guide to planning and executing successful cloud migrations for large-scale applications.',
    date: '2024-02-22',
    readTime: '10 min',
    category: 'Cloud Computing',
    slug: 'cloud-migration-enterprise-applications',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="container py-20">
        <AnimatedSection className="space-y-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground">
              Thoughts, insights, and discoveries on technology, management, and ethical innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {blogPosts.map((post) => (
              <AnimatedSection key={post.id} delay={0.1}>
                <Card className="h-full flex flex-col overflow-hidden hover-card">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-xs py-1 px-2 rounded-full bg-secondary inline-block">
                      {post.category}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full justify-between group">
                      Read Article 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Blog;
