import BackgroundPaperShaders from './background-paper-shaders';

export default function BackgroundPaperShadersDemo() {
  return (
    <section
      style={{
        width: '100%',
        padding: '32px',
        borderRadius: '32px',
        border: '1px solid rgba(12,12,11,.08)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,.96), rgba(244,243,238,.94))',
        boxShadow: '0 18px 48px rgba(12,12,11,.06)'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '24px',
          textAlign: 'center'
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: '#1641F5'
          }}
        >
          Background Paper Shaders
        </span>
        <h3
          style={{
            margin: 0,
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.02,
            fontWeight: 400,
            letterSpacing: '-.03em',
            color: '#0C0C0B'
          }}
        >
          Premium shader backdrop,
          <br />
          tuned for Irtiqa.
        </h3>
        <p
          style={{
            margin: '0 auto',
            maxWidth: '44ch',
            fontSize: '15px',
            lineHeight: 1.75,
            color: '#6B6B67'
          }}
        >
          This adapted demo keeps the provided three/fiber shader idea, but restyles it for the
          current brand instead of dropping in a black Tailwind showcase.
        </p>
      </div>

      <BackgroundPaperShaders />
    </section>
  );
}
