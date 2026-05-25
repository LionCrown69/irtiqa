import { NextResponse } from 'next/server';
import { getAllPosts } from '../../../../lib/mdx';

export async function GET() {
  try {
    const posts = getAllPosts();
    // Return the latest 3 posts
    const latest = posts.slice(0, 3).map(post => ({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      category: post.category,
      readingTime: post.readingTime,
      date: post.date,
      author: post.author
    }));
    return NextResponse.json(latest);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load blogs' }, { status: 500 });
  }
}
