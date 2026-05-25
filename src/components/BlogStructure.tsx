import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

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

const BlogStructure: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load insights in Vite:', err);
        setLoading(false);
      });
  }, []);

  // Filter posts by selected category
  const filteredPosts = selectedCategory
    ? posts.filter((p) => p.category === selectedCategory)
    : posts;

  // Identify featured post (first featured, or just first overall)
  const featured = posts.find((p) => p.featured) || posts[0] || null;
  const rest = filteredPosts.filter((p) => p.slug !== featured?.slug);

  if (loading) {
    return (
      <div style={{ backgroundColor: 'var(--w)', color: 'var(--ink)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'var(--ui)', opacity: 0.5 }}>Loading Insights Content...</div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--w)', color: 'var(--ink)', minHeight: '100vh' }}>
      <Navigation navHeight={68} />
      
      {/* ─── HERO HEADER ─── */}
      <header
        style={{
          paddingTop: '140px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            border: '1px solid rgba(22,65,245,0.3)',
            borderRadius: '20px',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: '#1641F5',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '28px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#1641F5',
              display: 'inline-block',
            }}
          />
          Irtiqa AI Insights
        </div>

        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            marginBottom: '28px',
            letterSpacing: '-0.02em',
            color: 'var(--ink)'
          }}
        >
          Research that turns
          <br />
          <em style={{ color: '#1641F5', fontStyle: 'italic' }}>revenue leakage</em>
          <br />
          into infrastructure.
        </h1>
        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--sub)',
            maxWidth: '580px',
            lineHeight: 1.7,
            fontFamily: 'var(--ui)',
          }}
        >
          Deep analysis on AI systems, booking automation, CRM architecture, lead generation,
          and the operational infrastructure that makes serious service businesses scale.
        </p>

        {/* Cluster nav pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '36px' }}>
          <span
            onClick={() => setSelectedCategory(null)}
            style={{
              padding: '5px 14px',
              borderRadius: '100px',
              background: selectedCategory === null ? '#1641F5' : 'var(--w2)',
              border: selectedCategory === null ? '1px solid #1641F5' : '1px solid var(--rule)',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: selectedCategory === null ? '#fff' : 'var(--sub)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            All Categories
          </span>
          {Object.entries(categoryColors).map(([cat, color]) => {
            const isSelected = selectedCategory === cat;
            return (
              <span
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '5px 14px',
                  borderRadius: '100px',
                  background: isSelected ? color : `${color}10`,
                  border: isSelected ? `1px solid ${color}` : `1px solid ${color}25`,
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: isSelected ? '#fff' : color,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </span>
            );
          })}
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 120px' }}>
        
        {/* ─── FEATURED ARTICLE ─── */}
        {featured && (!selectedCategory || featured.category === selectedCategory) && (
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
            <a href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0',
                  border: '1px solid var(--rule)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'var(--w2)',
                  transition: 'all 0.25s ease',
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
                      <AuthorAvatar name={featured.author || 'Priya Nair'} />
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--ui)' }}>{featured.author || 'Priya Nair'}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>{featured.authorRole || 'Lead AI Engineer'}</div>
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
            </a>
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
              {selectedCategory ? `${selectedCategory} Articles` : 'All Articles'} — {filteredPosts.length} Insights Found
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
              <a key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                    transition: 'all 0.2s ease',
                  }}
                  className="blog-card"
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(22,65,245,0.2)';
                    e.currentTarget.style.background = 'var(--w3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--rule)';
                    e.currentTarget.style.background = 'var(--w2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
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
                      <AuthorAvatar name={post.author || 'Priya Nair'} />
                      <div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--ui)' }}>{post.author || 'Priya Nair'}</div>
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
              </a>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>
              No insights published yet in this category. Check back soon.
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
            Stop reading. Start fixing.
          </h3>
          <p style={{ color: 'var(--sub)', fontSize: '1rem', fontFamily: 'var(--ui)', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
            One hour. We map every point where your pipeline is leaking revenue and give you the exact infrastructure to fix it.
          </p>
          <a
            href="/#book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#1641F5',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.95rem',
              fontFamily: 'var(--ui)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Book Free Audit Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </a>
        </section>
      </main>

      <style>{`
        .featured-card:hover {
          border-color: rgba(22,65,245,0.3) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
          .featured-card > div:last-child {
            display: none !important;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default BlogStructure;
