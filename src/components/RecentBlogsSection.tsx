import React, { useEffect, useState } from 'react';

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

export default function RecentBlogsSection() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs/latest')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch blogs', err);
        setLoading(false);
      });
  }, []);

  if (loading || blogs.length === 0) return null;

  return (
    <section 
      id="insights"
      style={{
        padding: '130px 52px',
        borderBottom: '1px solid var(--rule)',
        background: 'var(--w)',
        color: 'var(--ink)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', gap: '24px' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--b)',
              marginBottom: '28px',
            }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--b)', borderRadius: '50%' }}></span>
              Latest Insights
            </div>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
              color: 'var(--ink)'
            }}>
              Strategic research for <br/>
              <em style={{ fontStyle: 'italic', color: 'var(--b)' }}>service business scale.</em>
            </h2>
          </div>
          
          <a
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--sub)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--rule)',
              paddingBottom: '4px',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#1641F5';
              e.currentTarget.style.borderColor = '#1641F5';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--sub)';
              e.currentTarget.style.borderColor = 'var(--rule)';
            }}
          >
            View all 60+ articles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '24px' 
        }}>
          {blogs.map((post) => {
            const catColor = getCategoryColor(post.category);
            return (
              <a 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid var(--rule)',
                  background: 'var(--w2)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(22,65,245,0.3)';
                  e.currentTarget.style.background = 'var(--w3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--rule)';
                  e.currentTarget.style.background = 'var(--w2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '100px',
                        background: `${catColor}14`,
                        border: `1px solid ${catColor}33`,
                        fontSize: '10px',
                        fontWeight: 700,
                        color: catColor,
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--sub)', fontFamily: 'var(--ui)' }}>
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    marginBottom: '16px',
                    letterSpacing: '-0.01em',
                    color: 'var(--ink)'
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    color: 'var(--sub)',
                    lineHeight: 1.6,
                    fontSize: '14px',
                    fontFamily: 'var(--ui)',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.excerpt}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '32px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--rule)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>{post.author}</div>
                    <div style={{ fontSize: '11px', color: 'var(--sub)' }}>{post.date}</div>
                  </div>
                  <svg
                    width="14"
                    height="14"
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
              </a>
            );
          })}
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #1641F5 0%, transparent 70%)',
          pointerEvents: 'none',
          opacity: 0.03,
          mixBlendMode: 'screen'
        }}
      />
    </section>
  );
}
