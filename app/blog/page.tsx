import React from 'react';
import Link from 'next/link';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import { getAllPosts } from '../../lib/mdx';

export const metadata = {
  title: 'Irtiqa AI Insights | Blog',
  description: 'Deep-dive analysis on revenue operations infrastructure, agentic AI systems, and business growth architecture.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="blog-page" style={{ backgroundColor: '#0c0c0b', color: '#fdfdfc', minHeight: '100vh' }}>
      {/* Navigation requires client side state for scroll, we pass a static height here for SSR or make Navigation a client component */}
      <Navigation navHeight={68} />
      
      <main style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '1000px', margin: '0 auto', padding: '120px 20px 80px' }}>
        
        <header style={{ marginBottom: '80px', borderBottom: '1px solid var(--rule)', paddingBottom: '60px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'var(--serif)', lineHeight: 1.1, marginBottom: '24px' }}>
            Irtiqa AI Insights
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '600px', lineHeight: 1.6 }}>
            Deep-dive analysis on revenue operations infrastructure, agentic AI systems, and business growth architecture.
          </p>
        </header>

        <section className="blog-grid" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article 
                style={{ padding: '32px', border: '1px solid var(--rule)', borderRadius: '16px', background: 'rgba(255,255,255,0.01)', cursor: 'pointer', transition: 'transform 0.2s ease, border-color 0.2s ease' }}
              >
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '0.85rem', color: 'var(--b)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  <span>{post.category}</span>
                  <span style={{ color: 'rgba(253,253,252,0.4)' }}>•</span>
                  <span style={{ color: 'rgba(253,253,252,0.4)' }}>{post.date}</span>
                </div>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--serif)', marginBottom: '16px', lineHeight: 1.2 }}>
                  {post.title}
                </h2>
                <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: '24px' }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--w)', fontWeight: 500 }}>
                  Read Article 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </article>
            </Link>
          ))}
          
          {posts.length === 0 && (
            <p style={{ opacity: 0.5 }}>No insights published yet. Check back soon.</p>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
