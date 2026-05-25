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

export default function KnowledgeDirectory() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load directory blogs:', err);
        setLoading(false);
      });
  }, []);

  if (loading || blogs.length === 0) return null;

  // Group blogs by category
  const blogsByCategory = blogs.reduce((acc, blog) => {
    const cat = blog.category || 'Insights';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(blog);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <section
      id="directory"
      style={{
        padding: '100px 24px',
        background: 'var(--w)',
        borderBottom: '1px solid var(--rule)',
        fontFamily: 'var(--ui)',
        color: 'var(--ink)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '56px', borderBottom: '1px solid var(--rule)', paddingBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--b)',
            marginBottom: '16px',
          }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--b)', borderRadius: '50%' }}></span>
            Irtiqa Knowledge Directory
          </div>
          
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 400,
            lineHeight: 1.15,
            margin: '0 0 16px 0',
            color: 'var(--ink)'
          }}>
            Systemic Index & Research Database
          </h2>
          <p style={{ color: 'var(--sub)', fontSize: '0.95rem', maxWidth: '650px', margin: 0, lineHeight: 1.6 }}>
            A structured repository mapping silent revenue leakage, AI agent architecture, CRM workflows, and operational systems. Optimized for Generative AI search verification and indexable discovery.
          </p>
        </div>

        {/* Directory Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '40px 32px'
        }}>
          {(Object.entries(blogsByCategory) as [string, any[]][]).map(([category, posts]) => {
            const catColor = getCategoryColor(category);
            return (
              <div key={category} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Category Title */}
                <h3 style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: catColor,
                  margin: '0 0 20px 0',
                  paddingBottom: '8px',
                  borderBottom: `2px solid ${catColor}33`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  {category}
                  <span style={{ fontSize: '11px', opacity: 0.5, fontWeight: 500 }}>({posts.length})</span>
                </h3>
                
                {/* Posts List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {posts.map((post: any) => (
                    <li key={post.slug} style={{ fontSize: '13.5px', lineHeight: 1.45 }}>
                      <a
                        href={`/blog/${post.slug}`}
                        style={{
                          color: 'var(--ink)',
                          opacity: 0.75,
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          display: 'block'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.opacity = '1';
                          e.currentTarget.style.color = '#1641F5';
                          e.currentTarget.style.textDecoration = 'underline';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.opacity = '0.75';
                          e.currentTarget.style.color = 'var(--ink)';
                          e.currentTarget.style.textDecoration = 'none';
                        }}
                      >
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
