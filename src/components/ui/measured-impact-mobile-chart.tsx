'use client';

import React, { useMemo, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { Area, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from 'recharts';
import { Badge } from '@/components/ui/badge-2';
import { Card, CardContent, CardHeader, CardTitle, CardToolbar } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip } from '@/components/ui/line-charts-2';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const impactData = [
  { month: 'Jan', irtiqaRevenue: 38, baselineRevenue: 38 },
  { month: 'Feb', irtiqaRevenue: 41, baselineRevenue: 39 },
  { month: 'Mar', irtiqaRevenue: 45, baselineRevenue: 40 },
  { month: 'Apr', irtiqaRevenue: 52, baselineRevenue: 41 },
  { month: 'May', irtiqaRevenue: 58, baselineRevenue: 42 },
  { month: 'Jun', irtiqaRevenue: 63, baselineRevenue: 43 },
  { month: 'Jul', irtiqaRevenue: 69, baselineRevenue: 44 },
  { month: 'Aug', irtiqaRevenue: 74, baselineRevenue: 45 },
  { month: 'Sep', irtiqaRevenue: 79, baselineRevenue: 46 },
  { month: 'Oct', irtiqaRevenue: 85, baselineRevenue: 47 },
];

const chartConfig = {
  irtiqaRevenue: {
    label: 'Irtiqa Infrastructure',
    color: '#1641F5',
  },
  baselineRevenue: {
    label: 'Manual Baseline',
    color: '#BBB7AF',
  },
} satisfies ChartConfig;

const PERIODS = {
  '6m': { key: '6m', label: 'Last 6 months' },
  '10m': { key: '10m', label: 'Full 10 months' },
} as const;

type PeriodKey = keyof typeof PERIODS;

type TooltipProps = {
  active?: boolean;
  payload?: Array<{ dataKey?: string; value?: number; color?: string }>;
  label?: string;
};

const MobileImpactTooltip = ({ active, payload, label }: TooltipProps) => {
  if (!active || !payload?.length) return null;

  const irtiqaPoint = payload.find((p) => p.dataKey === 'irtiqaRevenue');
  const baselinePoint = payload.find((p) => p.dataKey === 'baselineRevenue');

  return (
    <div className="mi2-tooltip">
      <div className="mi2-tooltip-month">{label}</div>
      <div className="mi2-tooltip-row">
        <span>Irtiqa median</span>
        <strong>${irtiqaPoint?.value ?? 0}k</strong>
      </div>
      <div className="mi2-tooltip-row">
        <span>Manual baseline</span>
        <strong>${baselinePoint?.value ?? 0}k</strong>
      </div>
    </div>
  );
};

const MeasuredImpactMobileChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>('10m');

  const filteredData = useMemo(() => {
    if (selectedPeriod === '6m') {
      return impactData.slice(-6);
    }
    return impactData;
  }, [selectedPeriod]);

  const last = filteredData[filteredData.length - 1]?.irtiqaRevenue ?? 0;
  const baselineLast = filteredData[filteredData.length - 1]?.baselineRevenue ?? 0;
  const avgIrtiqa = Math.round(
    filteredData.reduce((sum, item) => sum + item.irtiqaRevenue, 0) / Math.max(1, filteredData.length),
  );
  const liftPct = baselineLast > 0 ? ((last - baselineLast) / baselineLast) * 100 : 0;
  const recoveredRevenue = Math.max(0, last - baselineLast);

  return (
    <div className="mi2-mobile-shell">
      <div className="section-chip reveal">Measured Impact</div>
      <h2 className="results-title reveal d1">
        Infrastructure that <em>pays</em> for itself.
      </h2>
      <p className="results-body reveal d2">Observed monthly revenue outcomes from real deployments.</p>

      <Card className="mi2-card reveal d2">
        <CardHeader className="mi2-card-header">
          <div className="mi2-head-copy">
            <CardTitle className="mi2-card-title">Revenue Lift Monitor</CardTitle>
            <p className="mi2-card-note">Revenue trend versus a manual baseline.</p>
          </div>
          <CardToolbar className="mi2-card-toolbar">
            <div className="mi2-select-wrap">
              <span className="mi2-select-caption">View window</span>
              <Select value={selectedPeriod} onValueChange={(value) => setSelectedPeriod(value as PeriodKey)}>
                <SelectTrigger className="mi2-select-trigger">
                  <SelectValue placeholder="Choose range" />
                </SelectTrigger>
                <SelectContent align="end" className="mi2-select-content">
                  {Object.values(PERIODS).map((period) => (
                    <SelectItem key={period.key} value={period.key} className="mi2-select-item">
                      {period.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardToolbar>
        </CardHeader>

        <CardContent className="mi2-card-content">
          <div className="mi2-data-note">
            Cohort: 14 service businesses · anonymized median data.
          </div>
          <div className="mi2-kpi-row">
            <div className="mi2-kpi">
              <span>Avg monthly revenue</span>
              <strong>${avgIrtiqa}k</strong>
            </div>
            <div className="mi2-kpi">
              <span>Lift vs baseline</span>
              <strong>+{Math.round(liftPct)}%</strong>
            </div>
            <div className="mi2-kpi">
              <span>Recovered revenue / mo</span>
              <strong>${recoveredRevenue}k</strong>
            </div>
          </div>

          <div className="mi2-chart-stage">
            <div className="mi2-chart-ring" aria-hidden="true" />
            <ChartContainer config={chartConfig} className="mi2-chart-container">
              <ComposedChart data={filteredData} margin={{ top: 14, right: 8, left: -14, bottom: 2 }}>
                <defs>
                  <linearGradient id="mi2Gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1641F5" stopOpacity={0.18} />
                    <stop offset="100%" stopColor="#1641F5" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid vertical={false} strokeDasharray="4 8" stroke="rgba(12,12,11,0.09)" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickMargin={8}
                  domain={[30, 'dataMax + 6']}
                  tickFormatter={(value) => `$${value}k`}
                />

                <ChartTooltip content={<MobileImpactTooltip />} />

                <Area type="monotone" dataKey="irtiqaRevenue" stroke="transparent" fill="url(#mi2Gradient)" />
                <Line type="monotone" dataKey="baselineRevenue" stroke="#BBB7AF" strokeWidth={1.8} dot={false} />
                <Line
                  type="monotone"
                  dataKey="irtiqaRevenue"
                  stroke="#1641F5"
                  strokeWidth={2.6}
                  dot={{ r: 0 }}
                  activeDot={{ r: 4.5, fill: '#1641F5', stroke: '#fff', strokeWidth: 2 }}
                />
              </ComposedChart>
            </ChartContainer>
          </div>

          <div className="mi2-foot">
            <div className="mi2-foot-legend">
              <span className="mi2-dot mi2-dot-primary" />
              <p>Irtiqa median monthly revenue</p>
            </div>
            <div className="mi2-foot-legend">
              <span className="mi2-dot mi2-dot-muted" />
              <p>Manual monthly revenue</p>
            </div>
            <Badge variant="success" appearance="light" className="mi2-badge">
              <TrendingUp className="mi2-badge-icon" />
              Cohort trend validated
            </Badge>
          </div>
        </CardContent>
      </Card>

      <a href="#book" className="btn-fill mi2-cta reveal d3">
        Book Discovery Call
      </a>
    </div>
  );
};

export default MeasuredImpactMobileChart;
