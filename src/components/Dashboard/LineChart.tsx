import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: 'S', lorem: 40, dolor: 24 },
  { name: 'M', lorem: 30, dolor: 14 },
  { name: 'T', lorem: 60, dolor: 98 },
  { name: 'W', lorem: 28, dolor: 40 },
  { name: 'T', lorem: 55, dolor: 48 },
  { name: 'F', lorem: 23, dolor: 38 },
  { name: 'S', lorem: 35, dolor: 43 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded-md shadow-lg">
        <p className="font-bold text-foreground mb-1">{`Day: ${label}`}</p>
        <p className="text-sm text-primary">{`Lorem: ${payload[0].value}`}</p>
        <p className="text-sm text-accentSecondary">{`Dolor: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LineChart: React.FC = () => {
  return (
    <Card className="shadow-md col-span-12 lg:col-span-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
            <CardTitle>Lorem Ipsum</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>Lorem Ipsum</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sidebar"></span>
                    <span>Dolor Amet</span>
                </div>
            </div>
        </div>
        <Button variant="outline">
          This Week
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <defs>
                <linearGradient id="colorLorem" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDolor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--sidebar-bg))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--sidebar-bg))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="lorem" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorLorem)" />
              <Area type="monotone" dataKey="dolor" stroke="hsl(var(--sidebar-bg))" strokeWidth={2} fillOpacity={1} fill="url(#colorDolor)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChart;
