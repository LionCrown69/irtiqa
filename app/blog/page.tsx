import React from 'react';
import Link from 'next/link';
import InstitutionalHeader from '../../src/components/layout/InstitutionalHeader';
import InstitutionalFooter from '../../src/components/layout/InstitutionalFooter';
import { getAllPosts, getFeaturedPost } from '../../lib/mdx';

export const metadata = {
  title: 'IRTIQA Executive Insights — Strategy, Transformation & Operations',
  description: 'Authoritative research, monographs, and briefings on corporate strategy, operating models, revenue architecture, and enterprise intelligence.',
  openGraph: {
    title: 'IRTIQA Executive Insights',
    description: 'Authoritative research and briefings on corporate strategy, operating models, and technology transformation.',
    type: 'website',
  },
};

const categoryColors: Record<string, string> = {
  'Revenue Leakage': '#14335E',
  'AI Infrastructure': '#0C2340',
  'Booking Systems': '#2D5541',
  'CRM & Follow-Up': '#8C6B32',
  'Lead Generation': '#7C2D12',
  'Growth Consulting': '#1E3A8A',
  'Industry Insights': '#4C1D95',
  'Agentic AI': '#0C2340',
  'Operations': '#2D5541',
};

function getCategoryColor(cat: string): string {
  return categoryColors[cat] || '#1641F5';
}

function AuthorAvatar({ name }: { name: string }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2);
  const colors = ['#1641F5', '#7C3AED', '#059669', '#D97706', '#DC2626'];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: `${color}14`,
        border: `1px solid ${color}33`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.7rem',
        fontWeight: 700,
        color: color,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

export default function BlogIndex() {
  const posts = getAllPosts();
  const featured = getFeaturedPost();
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: 'var(--color-ink)', minHeight: '100vh' }}>
      <InstitutionalHeader />

      {/* ─── HERO HEADER ─── */}
      <header
        style={{
          padding: '6rem 24px 4rem',
          maxWidth: '1200px',
          margin: '0 auto',
          borderBottom: '1px solid var(--color-hairline)',
        }}
      >
        <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }} />
          RESEARCH &bull; MONOGRAPHS &bull; BRIEFINGS
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.75rem, 5vw, 4.25rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
            color: 'var(--color-blue-deep)',
          }}
        >
          Institutional intelligence for strategic transformation.
        </h1>
        <p
          className="lead"
          style={{
            fontSize: '1.15rem',
            color: 'var(--color-graphite)',
            maxWidth: '680px',
            lineHeight: 1.65,
          }}
        >
          Research and executive analysis examining operating models, revenue architectures, enterprise intelligence, and the structural dynamics of market expansion.
        </p>

        {/* Cluster nav pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '36px' }}>
          {Object.entries(categoryColors).slice(0, 6).map(([cat, color]) => (
            <span
              key={cat}
              style={{
                padding: '5px 14px',
                borderRadius: '100px',
                background: `${color}10`,
                border: `1px solid ${color}25`,
                fontSize: '0.78rem',
                fontWeight: 600,
                color: color,
                cursor: 'pointer',
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 120px' }}>

        {/* ─── FEATURED ARTICLE ─── */}
        {featured && (
          <section style={{ marginTop: '72px', marginBottom: '80px' }}>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--sub)',
                marginBottom: '20px',
              }}
            >
              Featured Article
            </div>
            <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0',
                  border: '1px solid var(--rule)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'var(--w2)',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                  cursor: 'pointer',
                }}
                className="featured-card"
              >
                {/* Left: content */}
                <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                      <span
                        style={{
                          padding: '4px 12px',
                          borderRadius: '100px',
                          background: `${getCategoryColor(featured.category)}18`,
                          border: `1px solid ${getCategoryColor(featured.category)}40`,
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: getCategoryColor(featured.category),
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                        }}
                      >
                        {featured.category}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>
                        {featured.readingTime}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
                        fontWeight: 400,
                        lineHeight: 1.2,
                        marginBottom: '20px',
                        letterSpacing: '-0.015em',
                        color: 'var(--ink)'
                      }}
                    >
                      {featured.title}
                    </h2>
                    <p style={{ color: 'var(--sub)', lineHeight: 1.7, fontSize: '0.95rem', fontFamily: 'var(--ui)' }}>
                      {featured.excerpt}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '36px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <AuthorAvatar name={featured.author} />
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--ui)' }}>{featured.author}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>{featured.authorRole}</div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#1641F5',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        fontFamily: 'var(--ui)',
                      }}
                    >
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right: decorative panel */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(22,65,245,0.06) 0%, rgba(124,58,237,0.03) 50%, rgba(0,0,0,0) 100%)',
                    borderLeft: '1px solid var(--rule)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '360px',
                    backgroundColor: 'var(--w3)'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '220px',
                      height: '220px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(22,65,245,0.08) 0%, transparent 70%)',
                    }}
                  />
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div
                      style={{
                        fontSize: 'clamp(3.5rem, 5vw, 5rem)',
                        fontFamily: 'var(--serif)',
                        color: 'rgba(22,65,245,0.15)',
                        lineHeight: 1,
                        marginBottom: '12px',
                      }}
                    >
                      No.1
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--sub)', fontFamily: 'var(--ui)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                      Featured
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </section>
        )}

        {/* ─── ARTICLE GRID ─── */}
        <section>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--sub)' }}>
              All Articles — {posts.length} Published
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '24px',
            }}
          >
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article
                  style={{
                    padding: '32px',
                    border: '1px solid var(--rule)',
                    borderRadius: '16px',
                    background: 'var(--w2)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease',
                  }}
                  className="blog-card"
                >
                  <div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '18px' }}>
                      <span
                        style={{
                          padding: '3px 10px',
                          borderRadius: '100px',
                          background: `${getCategoryColor(post.category)}14`,
                          border: `1px solid ${getCategoryColor(post.category)}33`,
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: getCategoryColor(post.category),
                          textTransform: 'uppercase',
                          letterSpacing: '0.8px',
                        }}
                      >
                        {post.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>
                        {post.readingTime}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: '1.4rem',
                        fontWeight: 400,
                        lineHeight: 1.3,
                        marginBottom: '14px',
                        letterSpacing: '-0.01em',
                        color: 'var(--ink)'
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        color: 'var(--sub)',
                        lineHeight: 1.65,
                        fontSize: '0.88rem',
                        fontFamily: 'var(--ui)',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--rule)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <AuthorAvatar name={post.author} />
                      <div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--ui)' }}>{post.author}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>{post.date}</div>
                      </div>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(22,65,245,0.6)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>
              No insights published yet. Check back soon.
            </div>
          )}
        </section>

        {/* ─── CTA STRIP ─── */}
        <section
          style={{
            marginTop: '100px',
            padding: '64px 48px',
            borderRadius: '24px',
            border: '1px solid rgba(22,65,245,0.2)',
            background: 'linear-gradient(135deg, rgba(22,65,245,0.04) 0%, rgba(0,0,0,0) 100%)',
            textAlign: 'center',
            backgroundColor: 'var(--w2)'
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#1641F5', marginBottom: '20px' }}>
            Free Growth Audit
          </div>
          <h3
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              marginBottom: '18px',
              letterSpacing: '-0.02em',
              color: 'var(--ink)'
            }}
          >
            Institutional Mandate Assessment
          </h3>
          <p style={{ color: 'var(--color-graphite)', fontSize: '1rem', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Consult with Irtiqa leadership on corporate strategy, operating models, commercial partnerships, or technology transformation.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.85rem 1.75rem',
              fontSize: '0.9375rem',
            }}
          >
            Discuss a Mandate &rarr;
          </Link>
        </section>
      </main>

      <InstitutionalFooter />
    </div>
  );
}
