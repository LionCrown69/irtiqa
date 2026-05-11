import React from 'react';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Navigation from '../../../src/components/Navigation';
import Footer from '../../../src/components/Footer';
import { getPostBySlug, getBlogSlugs } from '../../../lib/mdx';

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: `${post.title} | Irtiqa AI Insights`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: ['Irtiqa AI'],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      }
    };
  } catch (e) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch (e) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Irtiqa AI"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Irtiqa AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.irtiqaaiagency.com/irtiqa-logo.jpeg"
      }
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.irtiqaaiagency.com/blog/${post.slug}`
    }
  };

  return (
    <div className="blog-page" style={{ backgroundColor: '#0c0c0b', color: '#fdfdfc', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation navHeight={68} />
      
      <main style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto', padding: '120px 20px 80px' }}>
        <article className="prose prose-invert lg:prose-xl mx-auto" style={{
          fontFamily: 'var(--font-outfit)',
          lineHeight: 1.7,
        }}>
          <header style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid var(--rule)' }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '0.85rem', color: 'var(--b)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
              <span>{post.category}</span>
              <span style={{ color: 'rgba(253,253,252,0.4)' }}>•</span>
              <span style={{ color: 'rgba(253,253,252,0.4)' }}>{post.date}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontFamily: 'var(--serif)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--w)' }}>
              {post.title}
            </h1>
          </header>

          <div className="mdx-content" style={{
             '--tw-prose-body': 'rgba(255,255,255,0.8)',
             '--tw-prose-headings': 'var(--w)',
             '--tw-prose-links': 'var(--b)',
             '--tw-prose-bold': 'var(--w)',
             '--tw-prose-quotes': 'var(--b)',
             '--tw-prose-quote-borders': 'var(--b)',
             '--tw-prose-captions': 'rgba(255,255,255,0.5)',
             '--tw-prose-code': 'var(--w)',
             '--tw-prose-pre-code': 'var(--w)',
             '--tw-prose-pre-bg': '#1a1a1a',
             '--tw-prose-th-borders': 'var(--rule)',
             '--tw-prose-td-borders': 'var(--rule)',
          } as React.CSSProperties}>
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
