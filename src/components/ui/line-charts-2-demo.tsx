'use client';

import { useMemo, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { Area, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from 'recharts';
import { Badge } from '@/components/ui/badge-2';
import { Card, CardContent, CardHeader, CardTitle, CardToolbar } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip } from '@/components/ui/line-charts-2';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const demoData = [
  { month: 'JAN', value: 2100 },
  { month: 'FEB', value: 2300 },
  { month: 'MAR', value: 1900 },
  { month: 'APR', value: 4800 },
  { month: 'MAY', value: 5200 },
  { month: 'JUN', value: 8900 },
  { month: 'JUL', value: 6200 },
  { month: 'AUG', value: 7100 },
  { month: 'SEP', value: 9400 },
  { month: 'OCT', value: 10200 },
  { month: 'NOV', value: 11100 },
  { month: 'DEC', value: 11800 },
];

const chartConfig = {
  value: {
    label: 'Cashflow',
    color: '#8b5cf6',
  },
} satisfies ChartConfig;

const PERIODS = {
  '6m': { key: '6m', label: '6 months' },
  '12m': { key: '12m', label: '12 months' },
} as const;

type PeriodKey = keyof typeof PERIODS;

const DemoTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ value?: number }> }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ border: '1px solid rgba(12,12,11,.12)', borderRadius: 8, background: '#fff', padding: '8px 10px' }}>
      <div style={{ fontSize: 11, color: '#6B6B67' }}>Total</div>
      <div style={{ fontSize: 14, fontWeight: 700 }}>${(payload[0].value ?? 0).toLocaleString()}</div>
    </div>
  );
};

export default function LineChart2Demo() {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>('12m');

  const filteredData = useMemo(
    () => (selectedPeriod === '6m' ? demoData.slice(-6) : demoData),
    [selectedPeriod],
  );

  const totalCash = filteredData.reduce((sum, item) => sum + item.value, 0);
  const lastValue = filteredData[filteredData.length - 1]?.value || 0;
  const previousValue = filteredData[filteredData.length - 2]?.value || 0;
  const percentageChange = previousValue > 0 ? ((lastValue - previousValue) / previousValue) * 100 : 0;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Cashflow</CardTitle>
        <CardToolbar>
          <Select value={selectedPeriod} onValueChange={(value) => setSelectedPeriod(value as PeriodKey)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              {Object.values(PERIODS).map((period) => (
                <SelectItem key={period.key} value={period.key}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardToolbar>
      </CardHeader>
      <CardContent>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, color: '#6B6B67' }}>Selected period</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 24, fontWeight: 700 }}>${totalCash.toLocaleString()}</div>
            <Badge variant="success" appearance="light">
              <TrendingUp style={{ width: 12, height: 12 }} />
              {Math.abs(percentageChange).toFixed(2)}%
            </Badge>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ComposedChart data={filteredData} margin={{ top: 24, right: 12, left: 0, bottom: 10 }}>
            <defs>
              <linearGradient id="demoGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 8" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${Math.round(value / 1000)}K`} />
            <ChartTooltip content={<DemoTooltip />} />
            <Area type="monotone" dataKey="value" stroke="transparent" fill="url(#demoGradient)" />
            <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} dot={false} />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
