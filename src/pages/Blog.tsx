
import React from 'react';
import { Layout } from '@/components/Layout';
import { BlogPost, type BlogPost as BlogPostType } from '@/components/BlogPost';
import { AnimatedSection } from '@/components/AnimatedSection';

// Sample blog posts data - replace with your actual blog posts
const posts: BlogPostType[] = [
  {
    id: '1',
    title: 'Understanding Modern Web Development',
    excerpt: 'An in-depth look at the current state of web development and where it\'s heading.',
    date: '2024-02-20',
    readTime: '5 min',
    category: 'Web Development',
    slug: 'understanding-modern-web-development',
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <Layout>
      <div className="container py-20">
        <AnimatedSection className="space-y-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground">
              Thoughts, stories and ideas about web development, design, and technology.
            </p>
          </div>
          <div className="max-w-3xl mt-12">
            {posts.map((post) => (
              <AnimatedSection key={post.id} delay={0.1}>
                <BlogPost post={post} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Blog;
