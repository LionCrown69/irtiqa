import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface BlogPostDetailProps {
  slug: string;
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

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function parseMarkdown(md: string): string {
  let html = md;

  // Normalize line endings
  html = html.replace(/\r\n/g, '\n');

  // Code blocks: ```js ... ```
  html = html.replace(/```(\w*)\n([\s\S]*?)\n```/g, (_, lang, code) => {
    return `<pre><code class="language-${lang}">${escapeHtml(code)}</code></pre>`;
  });

  // Inline code: `code`
  html = html.replace(/`([^`]+)`/g, (_, code) => {
    return `<code>${escapeHtml(code)}</code>`;
  });

  // Headers
  html = html.replace(/^###[ \t]+(.*)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##[ \t]+(.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#[ \t]+(.*)$/gm, '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^[ \t]*>[ \t]+(.*)$/gm, '<blockquote>$1</blockquote>');

  // Bold and Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Horizontal rules
  html = html.replace(/^[ \t]*---[ \t]*$/gm, '<hr />');

  // Split into lines to parse paragraphs, lists, and tables
  const lines = html.split('\n');
  let inList = false;
  let inOrderedList = false;
  let inTable = false;
  let inThead = false;
  const processedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Handle Table
    if (line.startsWith('|') && line.endsWith('|')) {
      // Close other block elements if open
      if (inList) { processedLines.push('</ul>'); inList = false; }
      if (inOrderedList) { processedLines.push('</ol>'); inOrderedList = false; }

      if (!inTable) {
        processedLines.push('<table>');
        inTable = true;
        inThead = true;
      }
      
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      
      // Separator row (e.g., |---|---|)
      if (cells.every(c => /^-+$/.test(c))) {
        inThead = false;
        continue;
      }

      processedLines.push('<tr>');
      for (const cell of cells) {
        const tag = inThead ? 'th' : 'td';
        processedLines.push(`<${tag}>${cell}</${tag}>`);
      }
      processedLines.push('</tr>');
      continue;
    } else if (inTable) {
      processedLines.push('</table>');
      inTable = false;
    }

    // Handle Bullet List
    const bulletMatch = lines[i].match(/^[ \t]*[-*][ \t]+(.*)$/);
    if (bulletMatch) {
      if (inOrderedList) { processedLines.push('</ol>'); inOrderedList = false; }
      if (!inList) {
        processedLines.push('<ul>');
        inList = true;
      }
      processedLines.push(`<li>${bulletMatch[1]}</li>`);
      continue;
    } else if (inList) {
      processedLines.push('</ul>');
      inList = false;
    }

    // Handle Ordered List
    const orderedMatch = lines[i].match(/^[ \t]*\d+\.[ \t]+(.*)$/);
    if (orderedMatch) {
      if (inList) { processedLines.push('</ul>'); inList = false; }
      if (!inOrderedList) {
        processedLines.push('<ol>');
        inOrderedList = true;
      }
      processedLines.push(`<li>${orderedMatch[1]}</li>`);
      continue;
    } else if (inOrderedList) {
      processedLines.push('</ol>');
      inOrderedList = false;
    }

    // Skip empty lines
    if (line === '') {
      continue;
    }

    // If it's already an HTML tag (h1, h2, h3, blockquote, pre, code, hr, table, ul, ol), output as is
    if (/^<\/?(h1|h2|h3|blockquote|pre|code|hr|table|tr|th|td|ul|ol|li)/i.test(line)) {
      processedLines.push(lines[i]);
    } else {
      // Wrap other lines in paragraphs
      processedLines.push(`<p>${lines[i]}</p>`);
    }
  }

  // Close remaining tags at the end of the file
  if (inTable) processedLines.push('</table>');
  if (inList) processedLines.push('</ul>');
  if (inOrderedList) processedLines.push('</ol>');

  return processedLines.join('\n');
}

function AuthorAvatar({ name }: { name: string }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2);
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

export default function BlogPostDetail({ slug }: BlogPostDetailProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setError(false);

    fetch(`/api/blogs/post?slug=${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Post not found');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load blog post:', err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div style={{ backgroundColor: 'var(--w)', color: 'var(--ink)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'var(--ui)', opacity: 0.5 }}>Loading article insights...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div style={{ backgroundColor: 'var(--w)', color: 'var(--ink)', minHeight: '100vh' }}>
        <Navigation navHeight={68} />
        <main style={{ padding: '160px 24px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', marginBottom: '20px', color: 'var(--ink)' }}>Article Not Found</h1>
          <p style={{ color: 'var(--sub)', marginBottom: '40px' }}>The requested publication could not be found or has been moved.</p>
          <a
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#1641F5',
              fontWeight: 600,
              textDecoration: 'none',
              borderBottom: '1px solid rgba(22,65,245,0.3)',
              paddingBottom: '4px',
            }}
          >
            Return to Insights
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const catColor = getCategoryColor(post.category);
  const parsedContent = parseMarkdown(post.content);

  return (
    <div style={{ backgroundColor: 'var(--w)', color: 'var(--ink)', minHeight: '100vh' }}>
      <Navigation navHeight={68} />

      {/* ─── ARTICLE HERO ─── */}
      <header
        style={{
          paddingTop: '140px',
          paddingBottom: '60px',
          maxWidth: '800px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '32px', fontSize: '0.8rem', fontFamily: 'var(--ui)', color: 'var(--sub)', opacity: 0.8 }}>
          <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
          <span>/</span>
          <a href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Insights</a>
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
        <article 
          className="prose-irtiqa" 
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />

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
        .prose-irtiqa h1 { font-size: 2.4rem; }
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
        .prose-irtiqa pre {
          background: var(--w2);
          border: 1px solid var(--rule);
          padding: 20px;
          border-radius: 12px;
          overflow-x: auto;
          margin: 2rem 0;
        }
        .prose-irtiqa pre code {
          background: transparent;
          padding: 0;
          border-radius: 0;
          color: inherit;
          font-size: 0.9em;
        }
      `}</style>

      <Footer />
    </div>
  );
}
