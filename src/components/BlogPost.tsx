
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
};

type BlogPostProps = {
  post: BlogPost;
};

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="group space-y-4 py-6 border-b border-border last:border-0">
      <div>
        <span className="text-sm text-muted-foreground">{post.category}</span>
        <h2 className="text-2xl font-medium mt-1 group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
      </div>
      <p className="text-muted-foreground">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span className="mx-2">·</span>
          <span>{post.readTime} read</span>
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="text-sm font-medium group inline-flex items-center gap-1 link-underline"
        >
          Read More
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
