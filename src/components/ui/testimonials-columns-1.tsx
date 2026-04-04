import React from 'react';

export type TestimonialsColumnItem = {
  text: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialsColumnItem[];
  duration?: number;
  reverse?: boolean;
}) => {
  const marqueeItems = [...props.testimonials, ...props.testimonials];

  return (
    <div className={`tc1-rail-shell${props.className ? ` ${props.className}` : ''}`}>
      <div
        className={`tc1-column-track${props.reverse ? ' is-reverse' : ''}`}
        style={
          {
            '--tc1-duration': `${props.duration || 58}s`
          } as React.CSSProperties
        }
      >
        {marqueeItems.map(({ text, name, role }, index) => (
          <article className="tc1-card" key={`${name}-${index}`}>
            <p className="tc1-text">"{text}"</p>
            <div className="tc1-author">
              <div className="tc1-author-copy">
                <div className="tc1-name">{name}</div>
                <div className="tc1-role">{role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsColumn;
