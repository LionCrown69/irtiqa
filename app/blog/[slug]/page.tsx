import React from 'react';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Navigation from '../../../src/components/Navigation';
import Footer from '../../../src/components/Footer';
import PeopleAlsoAsk from '../../../src/components/PeopleAlsoAsk';
import { getPostBySlug, getBlogSlugs, getAllPosts } from '../../../lib/mdx';
import { getFaqsForCategory } from '../../../lib/faq';

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
      description: post.description || post.excerpt,
      openGraph: {
        title: post.title,
        description: post.description || post.excerpt,
        type: 'article',
        publishedTime: post.publishedAt || post.date,
        authors: [post.author],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description || post.excerpt,
      },
    };
  } catch {
    return { title: 'Article Not Found | Irtiqa AI Insights' };
  }
}

const categoryColors: Record<string, string> = {
  'Revenue Leakage': '#1641F5',
  'AI Infrastructure': '#7C3AED',
  'Booking Systems': '#059669',
  'CRM & Follow-Up': '#D97706',
  'Lead Generation': '#DC2626',
  'Growth Consulting': '#0891B2',
  'Industry Insights': '#BE185D',
  'Agentic AI': '#7C3AED',
  'Operations': '#059669',
};

function getCategoryColor(cat: string): string {
  return categoryColors[cat] || '#1641F5';
}

function AuthorAvatar({ name }: { name: string }) {
  const initials = name.split(' ').map((n: string) => n[0]).join('').slice(0, 2);
  const colors = ['#1641F5', '#7C3AED', '#059669', '#D97706', '#DC2626'];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: `${color}14`,
        border: `1.5px solid ${color}33`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.85rem',
        fontWeight: 700,
        color: color,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const faqs = getFaqsForCategory(post.category);

  // Blog Posting Metadata
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description || post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
      worksFor: {
        '@type': 'Organization',
        name: 'Irtiqa AI',
        url: 'https://www.irtiqaaiagency.com/',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Irtiqa AI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.irtiqaaiagency.com/irtiqa-logo-solid.png',
      },
    },
    datePublished: new Date(post.publishedAt || post.date).toISOString(),
    dateModified: new Date(post.publishedAt || post.date).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.irtiqaaiagency.com/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  };

  // FAQ Page Schema
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const catColor = getCategoryColor(post.category);

  return (
    <div style={{ backgroundColor: 'var(--w)', color: 'var(--ink)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation navHeight={68} />

      {/* ─── ARTICLE HERO ─── */}
      <header
        style={{
          paddingTop: '140px',
          paddingBottom: '60px',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '140px 24px 60px',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '32px', fontSize: '0.8rem', fontFamily: 'var(--ui)', color: 'var(--sub)', opacity: 0.8 }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Insights</Link>
          <span>/</span>
          <span style={{ opacity: 0.7 }}>{post.category}</span>
        </div>

        {/* Category + reading time */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
          <span
            style={{
              padding: '5px 14px',
              borderRadius: '100px',
              background: `${catColor}14`,
              border: `1px solid ${catColor}40`,
              fontSize: '0.75rem',
              fontWeight: 700,
              color: catColor,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: 'var(--ui)',
            }}
          >
            {post.category}
          </span>
          <span style={{ fontSize: '0.82rem', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 400,
            lineHeight: 1.12,
            marginBottom: '28px',
            letterSpacing: '-0.025em',
            color: 'var(--ink)'
          }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--sub)',
            lineHeight: 1.75,
            fontFamily: 'var(--ui)',
            marginBottom: '40px',
          }}
        >
          {post.excerpt}
        </p>

        {/* Author row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '20px 24px',
            borderRadius: '12px',
            background: 'var(--w2)',
            border: '1px solid var(--rule)',
          }}
        >
          <AuthorAvatar name={post.author} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', fontFamily: 'var(--ui)', marginBottom: '3px', color: 'var(--ink)' }}>
              {post.author}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>
              {post.authorRole} · {post.date}
            </div>
          </div>
          {post.tags?.length > 0 && (
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {post.tags.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  style={{
                    padding: '3px 10px',
                    borderRadius: '100px',
                    background: 'var(--w3)',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--ui)',
                    color: 'var(--sub)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ─── MDX CONTENT ─── */}
      <main
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '64px 24px 80px',
        }}
      >
        <article className="prose-irtiqa">
          <MDXRemote source={post.content} />
        </article>

        {/* ─── PAA / FAQ SECTION ─── */}
        <PeopleAlsoAsk faqs={faqs} />

        {/* ─── CTA INLINE ─── */}
        <div
          style={{
            marginTop: '72px',
            padding: '48px',
            borderRadius: '20px',
            border: `1px solid ${catColor}33`,
            background: `linear-gradient(135deg, ${catColor}0a 0%, rgba(0,0,0,0) 100%)`,
            textAlign: 'center',
            backgroundColor: 'var(--w2)'
          }}
        >
          <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: catColor, marginBottom: '16px', fontFamily: 'var(--ui)' }}>
            Free Growth Audit
          </p>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 400, marginBottom: '14px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            Ready to find where you're leaking revenue?
          </h3>
          <p style={{ color: 'var(--sub)', fontSize: '0.95rem', fontFamily: 'var(--ui)', marginBottom: '32px', maxWidth: '420px', margin: '0 auto 32px' }}>
            One hour. We map your pipeline, identify silent leakage, and hand you the exact infrastructure to fix it.
          </p>
          <a
            href="/#book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#1641F5',
              color: '#fff',
              padding: '13px 28px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.92rem',
              fontFamily: 'var(--ui)',
              textDecoration: 'none',
            }}
          >
            Book Free Audit Call
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </a>
        </div>
      </main>

      {/* ─── RELATED ARTICLES ─── */}
      {related.length > 0 && (
        <section
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px 100px',
            borderTop: '1px solid var(--rule)',
            paddingTop: '64px',
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--sub)', marginBottom: '32px' }}>
            Related Articles
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article
                  style={{
                    padding: '28px',
                    border: '1px solid var(--rule)',
                    borderRadius: '14px',
                    background: 'var(--w2)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, transform 0.2s ease',
                  }}
                  className="blog-card"
                >
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', alignItems: 'center' }}>
                    <span style={{ padding: '3px 10px', borderRadius: '100px', background: `${getCategoryColor(p.category)}14`, border: `1px solid ${getCategoryColor(p.category)}33`, fontSize: '0.7rem', fontWeight: 700, color: getCategoryColor(p.category), textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                      {p.category}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>{p.readingTime}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '10px', color: 'var(--ink)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--sub)', fontSize: '0.83rem', fontFamily: 'var(--ui)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      <style>{`
        .prose-irtiqa {
          font-family: var(--ui);
          font-size: 1.05rem;
          line-height: 1.8;
          color: rgba(12,12,11,0.8);
        }
        .prose-irtiqa h1,
        .prose-irtiqa h2,
        .prose-irtiqa h3 {
          font-family: var(--serif);
          font-weight: 400;
          color: var(--ink);
          letter-spacing: -0.02em;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .prose-irtiqa h2 { font-size: 2rem; }
        .prose-irtiqa h3 { font-size: 1.4rem; }
        .prose-irtiqa p { margin-bottom: 1.4rem; }
        .prose-irtiqa strong { color: var(--ink); font-weight: 600; }
        .prose-irtiqa em { color: #1641F5; font-style: normal; font-weight: 600; }
        .prose-irtiqa ul, .prose-irtiqa ol {
          margin: 1.2rem 0 1.6rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .prose-irtiqa li { color: rgba(12,12,11,0.85); }
        .prose-irtiqa blockquote {
          border-left: 3px solid #1641F5;
          padding: 16px 24px;
          margin: 2rem 0;
          background: rgba(22,65,245,0.04);
          border-radius: 0 10px 10px 0;
          font-style: normal;
          color: var(--sub);
        }
        .prose-irtiqa hr {
          border: none;
          border-top: 1px solid var(--rule);
          margin: 3rem 0;
        }
        .prose-irtiqa a {
          color: #1641F5;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .prose-irtiqa table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 0.9rem;
        }
        .prose-irtiqa th {
          background: rgba(22,65,245,0.06);
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          color: var(--ink);
          border-bottom: 1px solid rgba(22,65,245,0.2);
        }
        .prose-irtiqa td {
          padding: 11px 16px;
          border-bottom: 1px solid var(--rule);
        }
        .prose-irtiqa code {
          background: rgba(22,65,245,0.06);
          padding: 2px 7px;
          border-radius: 4px;
          font-size: 0.88em;
          color: #1641F5;
        }
        .blog-card:hover {
          border-color: rgba(22,65,245,0.2) !important;
          transform: translateY(-2px);
          background: var(--w3) !important;
        }
      `}</style>

      <Footer />
    </div>
  );
}
