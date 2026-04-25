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
      title: "The $2.4M Revenue Leak: Why Enterprise Sales Teams Need Sovereign AI",
      category: "Enterprise Infrastructure",
      date: "May 12, 2026",
      excerpt: "How mid-market corporations are losing millions to slow follow-up, and the private AI architecture required to stop it."
    },
    {
      title: "Sovereign AI vs. SaaS: Securing Healthcare Revenue Operations",
      category: "Healthcare RevOps",
      date: "May 05, 2026",
      excerpt: "Why clinics and hospitals cannot rely on public LLMs for patient intake, and how sovereign models protect HIPAA compliance while driving revenue."
    },
    {
      title: "Automating the Discovery Call: The New MNC Playbook",
      category: "Sales Automation",
      date: "April 28, 2026",
      excerpt: "Analyzing the transition from manual SDR outreach to fully autonomous scheduling systems in high-ticket consulting firms."
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
            Deep-dive analysis on Sovereign AI, Revenue Operations, and Enterprise Infrastructure.
          </p>
        </header>

        <section className="blog-grid" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {articles.map((article, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '32px', border: '1px solid var(--rule)', borderRadius: '16px', background: 'rgba(255,255,255,0.01)', cursor: 'pointer' }}
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
          ))}
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default BlogStructure;
