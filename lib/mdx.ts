import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  publishedAt: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  readingTime: string;
  featured: boolean;
  content: string;
};

export function getBlogSlugs() {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  return fs.readdirSync(contentDirectory).filter((f) => f.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || '',
    description: data.description || data.excerpt || '',
    date: data.date || data.publishedAt || '',
    publishedAt: data.publishedAt || data.date || '',
    excerpt: data.excerpt || '',
    category: data.category || 'Insights',
    tags: data.tags || [],
    author: data.author || 'Irtiqa AI Team',
    authorRole: data.authorRole || 'Revenue Operations',
    readingTime: data.readingTime || '5 min read',
    featured: data.featured || false,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getFeaturedPost(): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((p) => p.featured) || posts[0] || null;
}
