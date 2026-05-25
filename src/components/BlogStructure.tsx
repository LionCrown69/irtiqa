import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

const BlogStructure: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      slug: "revenue-leakage",
      title: "The $2.4M Revenue Leak: Why Enterprise Sales Teams Need Revenue Infrastructure",
      category: "Revenue Infrastructure",
      date: "May 12, 2026",
      excerpt: "Where revenue leaks in the lead-to-client journey — and how infrastructure fixes it before you scale lead volume."
    },
    {
      slug: "multi-agent-systems",
      title: "Multi-Agent AI Systems: From Lead Research to Booked Calls",
      category: "Agentic AI",
      date: "May 05, 2026",
      excerpt: "How coordinated AI agents handle research, personalization, outreach, response classification, and booking — end-to-end."
    },
    {
      slug: "audit-to-build",
      title: "Audit Call → Growth Report → Build: The Irtiqa Engagement",
      category: "Operations",
      date: "April 28, 2026",
      excerpt: "A clear model for diagnosing root causes and deploying the minimum viable infrastructure that compounds growth."
    }
  ];

  return (
    <div className="blog-page" style={{ backgroundColor: '#0c0c0b', color: '#fdfdfc', minHeight: '100vh' }}>
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
          {articles.map((article, i) => (
            <a key={i} href={`/blog/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '32px', border: '1px solid var(--rule)', borderRadius: '16px', background: 'rgba(255,255,255,0.01)', cursor: 'pointer', transition: 'transform 0.2s ease, border-color 0.2s ease' }}
                whileHover={{ transform: 'translateY(-2px)', borderColor: 'var(--b)' }}
              >
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '0.85rem', color: 'var(--b)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  <span>{article.category}</span>
                  <span style={{ color: 'rgba(253,253,252,0.4)' }}>•</span>
                  <span style={{ color: 'rgba(253,253,252,0.4)' }}>{article.date}</span>
                </div>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--serif)', marginBottom: '16px', lineHeight: 1.2 }}>
                  {article.title}
                </h2>
                <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: '24px' }}>
                  {article.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--w)', fontWeight: 500 }}>
                  Read Article 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </motion.article>
            </a>
          ))}
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default BlogStructure;
