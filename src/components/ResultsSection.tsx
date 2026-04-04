import React, { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';

const MeasuredImpactMobileChart = lazy(() => import('./ui/measured-impact-mobile-chart'));

type ChartPoint = {
  x: number;
  y: number;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
const lineIrtiqa = [4, 10, 18, 28, 40, 54, 68, 80, 91, 100];
const lineMarket = [4, 6, 8, 10, 12, 13, 14, 16, 17, 18];
const chartInsights = [
  { label: 'Signal', value: 'Response velocity improves in the first week' },
  { label: 'Lift', value: '+82% compounding performance over baseline' },
  { label: 'Outcome', value: 'Higher booking confidence with less manual effort' }
] as const;

const spotlightData = [
  { label: 'Avg first response', value: '< 5 min' },
  { label: 'Recovered pipeline', value: '61%' },
  { label: 'Operational coverage', value: '24/7' }
] as const;

const chartWidth = 640;
const chartHeight = 260;
const chartPadding = { left: 24, right: 12, top: 18, bottom: 28 };

const toPoint = (value: number, index: number, total: number): ChartPoint => {
  const width = chartWidth - chartPadding.left - chartPadding.right;
  const height = chartHeight - chartPadding.top - chartPadding.bottom;
  const x = chartPadding.left + (index / (total - 1)) * width;
  const y = chartPadding.top + height - (value / 100) * height;

  return { x, y };
};

const buildLinePath = (values: number[]) => {
  const points = values.map((value, index) => toPoint(value, index, values.length));

  return points.reduce((path, point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`;

    const prev = points[index - 1];
    const midX = (prev.x + point.x) / 2;
    return `${path} C ${midX} ${prev.y}, ${midX} ${point.y}, ${point.x} ${point.y}`;
  }, '');
};

const buildAreaPath = (values: number[]) => {
  const points = values.map((value, index) => toPoint(value, index, values.length));
  const linePath = buildLinePath(values);
  const baselineY = chartHeight - chartPadding.bottom;
  const first = points[0];
  const last = points[points.length - 1];

  return `${linePath} L ${last.x} ${baselineY} L ${first.x} ${baselineY} Z`;
};

const ResultsSection: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 640px)').matches : false,
  );

  const irtiqaPoints = useMemo(() => lineIrtiqa.map((value, index) => toPoint(value, index, lineIrtiqa.length)), []);
  const marketPoints = useMemo(() => lineMarket.map((value, index) => toPoint(value, index, lineMarket.length)), []);
  const irtiqaPath = useMemo(() => buildLinePath(lineIrtiqa), []);
  const marketPath = useMemo(() => buildLinePath(lineMarket), []);
  const areaPath = useMemo(() => buildAreaPath(lineIrtiqa), []);

  const cardData = [
    {
      label: 'Response Speed',
      value: 37,
      unit: '%↑',
      desc: 'Lead replies happen before intent cools.',
      direction: 'up',
      live: true
    },
    {
      label: 'Admin Eliminated',
      value: 42,
      unit: '%↓',
      desc: 'Manual hours are returned to revenue work.',
      direction: 'down',
      live: false
    },
    {
      label: 'Booking Conversion',
      value: 28,
      unit: '%↑',
      desc: 'Nurture flows turn more intent into calls.',
      direction: 'up',
      live: false
    },
    {
      label: 'Pipeline Recovered',
      value: 61,
      unit: '%↑',
      desc: 'Recovery sequences reactivate stalled opportunities.',
      direction: 'up',
      live: true
    }
  ] as const;

  useEffect(() => {
    const counterElements = document.querySelectorAll('.count-r');
    counterElements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      runCount(htmlEl, cardData[i].value, i * 120);
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(max-width: 640px)');
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    setIsMobile(media.matches);
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const runCount = (el: HTMLElement, to: number, delay: number) => {
    setTimeout(() => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / 1800, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(ease * to).toString();
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
  };

  const handlePointerMove = (clientX: number) => {
    if (!chartRef.current) return;

    const rect = chartRef.current.getBoundingClientRect();
    const relativeX = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const nextIndex = Math.round((relativeX / rect.width) * (months.length - 1));
    setActiveIndex(nextIndex);
  };

  const activePoint = activeIndex === null ? irtiqaPoints[irtiqaPoints.length - 1] : irtiqaPoints[activeIndex];
  const activeMarketPoint = activeIndex === null ? marketPoints[marketPoints.length - 1] : marketPoints[activeIndex];
  const tooltipLeft = `${(activePoint.x / chartWidth) * 100}%`;
  const tooltipMonth = activeIndex === null ? months[months.length - 1] : months[activeIndex];
  const tooltipIrtiqa = activeIndex === null ? lineIrtiqa[lineIrtiqa.length - 1] : lineIrtiqa[activeIndex];
  const tooltipMarket = activeIndex === null ? lineMarket[lineMarket.length - 1] : lineMarket[activeIndex];

  if (isMobile) {
    return (
      <section id="results">
        <Suspense fallback={<div className="results-mobile-fallback" aria-hidden="true" />}>
          <MeasuredImpactMobileChart />
        </Suspense>
      </section>
    );
  }

  return (
    <section id="results">
      <div className="results-layout">
        <div className="results-left-column">
          <div className="section-chip reveal">Measured Impact</div>
          <h2 className="results-title reveal d1">Infrastructure that <em>pays</em> for itself.</h2>
          <p className="results-body reveal d2">Irtiqa deploys execution systems that make service businesses faster, more responsive, and harder to outcompete. These results reflect real implementation across lead handling, follow-up, booking, and recovery.</p>
          <div className="results-slogan reveal d3">Measurable revenue impact without replacing your operational identity.</div>
        </div>

        <div className="results-right-column">
          <div className="results-spotlight reveal d2">
            {spotlightData.map((item) => (
              <div key={item.label} className="results-spot-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="results-grid">
            {cardData.map((card, i) => (
              <div key={card.label} className={`rcard ${card.live ? 'rcard-live' : ''} ${card.direction === 'down' ? 'rcard-down' : ''} reveal ${i > 0 ? `d${i}` : ''}`}>
                <span className="rcard-label">{card.label}</span>
                <span className="rcard-val"><span className="count-r">0</span><span className="rval-unit">{card.unit}</span></span>
                <div className="rcard-desc">{card.desc}</div>
              </div>
            ))}

            <div className="chart-card chart-card-minimal reveal d1">
              <div className="chart-header">
                <div className="chart-head-copy">
                  <span className="chart-card-title">Revenue Trajectory</span>
                  <p className="chart-card-note">A minimal view of how structured follow-up compounds compared to staying manual.</p>
                </div>
                <div className="chart-legend">
                  <div className="cl"><div className="cl-dot" style={{ background: 'var(--b)' }}></div>Irtiqa Infrastructure</div>
                  <div className="cl"><div className="cl-dot" style={{ background: 'var(--dim)' }}></div>Manual Baseline</div>
                </div>
              </div>

              <div className="chart-topline">
                <div className="chart-kpi">
                  <span className="chart-kpi-label">Current Lift</span>
                  <strong>+82%</strong>
                </div>
                <div className="chart-kpi chart-kpi-muted">
                  <span className="chart-kpi-label">Relative to Baseline</span>
                  <strong>5.5x</strong>
                </div>
              </div>

              <div
                ref={chartRef}
                className="chart-shell"
                onMouseMove={(event) => handlePointerMove(event.clientX)}
                onMouseLeave={() => setActiveIndex(null)}
                onTouchMove={(event) => handlePointerMove(event.touches[0].clientX)}
                onTouchEnd={() => setActiveIndex(null)}
              >
                <div className="chart-tooltip chart-tooltip-inline" style={{ left: tooltipLeft }}>
                  <div className="chart-tooltip-month">{tooltipMonth}</div>
                  <div className="chart-tooltip-row"><span>Irtiqa</span><strong>{tooltipIrtiqa}%</strong></div>
                  <div className="chart-tooltip-row"><span>Baseline</span><strong>{tooltipMarket}%</strong></div>
                </div>

                <svg className="results-chart-svg" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="chart-area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(22,65,245,.16)" />
                      <stop offset="100%" stopColor="rgba(22,65,245,0)" />
                    </linearGradient>
                  </defs>

                  {[25, 50, 75].map((mark) => {
                    const y = chartPadding.top + ((100 - mark) / 100) * (chartHeight - chartPadding.top - chartPadding.bottom);
                    return <line key={mark} x1={chartPadding.left} y1={y} x2={chartWidth - chartPadding.right} y2={y} className="chart-grid-line" />;
                  })}

                  <line x1={chartPadding.left} y1={chartHeight - chartPadding.bottom} x2={chartWidth - chartPadding.right} y2={chartHeight - chartPadding.bottom} className="chart-axis-line" />
                  <path d={areaPath} className="chart-area-path" />
                  <path d={marketPath} className="chart-line chart-line-market" pathLength="1" />
                  <path d={irtiqaPath} className="chart-line chart-line-primary" pathLength="1" />

                  {irtiqaPoints.map((point, index) => (
                    <g key={months[index]} className={`chart-point-group ${activeIndex === index ? 'is-active' : ''}`}>
                      <circle cx={point.x} cy={point.y} r="4.2" className="chart-point chart-point-outer" />
                      <circle cx={point.x} cy={point.y} r="2.2" className="chart-point chart-point-inner" />
                    </g>
                  ))}

                  <line x1={activePoint.x} y1={chartPadding.top} x2={activePoint.x} y2={chartHeight - chartPadding.bottom} className="chart-focus-line" />
                  <circle cx={activePoint.x} cy={activePoint.y} r="8" className="chart-focus-glow" />
                  <circle cx={activePoint.x} cy={activePoint.y} r="4" className="chart-focus-core" />
                  <circle cx={activeMarketPoint.x} cy={activeMarketPoint.y} r="3.5" className="chart-market-focus" />
                </svg>

                <div className="chart-months">
                  {months.map((month, index) => (
                    <span key={month} className={activeIndex === index ? 'is-active' : ''}>{month}</span>
                  ))}
                </div>
              </div>

              <div className="chart-insights">
                {chartInsights.map((item) => (
                  <div key={item.label} className="chart-insight">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
