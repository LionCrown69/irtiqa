import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './card';
import { Badge } from './badge';
import './roadmap-card.css';

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: 'done' | 'in-progress' | 'upcoming';
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
}

export function RoadmapCard({
  title = 'Product Roadmap',
  description = 'Upcoming features and releases',
  items
}: RoadmapCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [activeStep, setActiveStep] = useState(-1);

  // Time in ms between each step lighting up
  const stepDuration = 600;
  // Total delay before the animation starts
  const startDelay = 200;

  useEffect(() => {
    if (isInView) {
      const timers = items.map((_, index) =>
        setTimeout(() => {
          setActiveStep(index);
        }, startDelay + index * stepDuration)
      );
      return () => timers.forEach(clearTimeout);
    }
  }, [isInView, items]);

  return (
    <Card className="roadmap-card-shell" ref={containerRef}>
      <CardHeader className="roadmap-card-head">
        <CardTitle className="roadmap-card-title">{title}</CardTitle>
        <CardDescription className="roadmap-card-desc">{description}</CardDescription>
      </CardHeader>
      <CardContent className="roadmap-card-content">
        <div className="roadmap-card-track" aria-hidden="true" />
        
        {/* Desktop Horizontal Line */}
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: Math.max(0, activeStep) / Math.max(1, items.length - 1) } : { scaleX: 0 }}
          transition={{ duration: stepDuration / 1000, ease: 'linear' }}
          className="roadmap-card-track-active track-desktop"
        />

        {/* Mobile Vertical Line */}
        <motion.div
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: Math.max(0, activeStep) / Math.max(1, items.length - 1) } : { scaleY: 0 }}
          transition={{ duration: stepDuration / 1000, ease: 'linear' }}
          className="roadmap-card-track-active track-mobile"
        />

        <div className="roadmap-card-items">
          {items.map((item, index) => {
            const isActive = index <= activeStep;
            
            return (
              <motion.div
                key={`${item.quarter}-${item.title}`}
                className="roadmap-card-item"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div
                  className={`roadmap-card-dot roadmap-card-dot-${item.status ?? (isActive ? 'done' : 'upcoming')}`}
                  style={{ zIndex: 2, transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease' }}
                >
                  <div className="roadmap-card-dot-core" />
                </div>

                <Badge
                  variant={isActive ? 'default' : 'outline'}
                  className="roadmap-card-badge"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  {item.quarter}
                </Badge>

                <h4 className="roadmap-card-item-title" style={{ transition: 'color 0.4s ease', color: isActive ? 'var(--ink)' : 'var(--sub)' }}>{item.title}</h4>
                <p className="roadmap-card-item-desc">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default RoadmapCard;
