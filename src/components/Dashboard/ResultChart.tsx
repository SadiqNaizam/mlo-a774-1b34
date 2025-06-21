import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'JAN', '2019': 24, '2020': 38 },
  { name: 'FEB', '2019': 35, '2020': 44 },
  { name: 'MAR', '2019': 18, '2020': 32 },
  { name: 'APR', '2019': 27, '2020': 7 },
  { name: 'MAY', '2019': 42, '2020': 25 },
  { name: 'JUNE', '2019': 22, '2020': 48 },
  { name: 'JULY', '2019': 36, '2020': 14 },
  { name: 'AUG', '2019': 19, '2020': 28 },
  { name: 'SEP', '2019': 31, '2020': 22 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum: number, entry: any) => sum + entry.value, 0);
    return (
      <div className="bg-sidebar text-white p-2 rounded-md shadow-lg">
        <p className="font-bold">{`${label}`}</p>
        <p className="text-sm">{`Total: ${total.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const ResultChart: React.FC = () => {
  return (
    <Card className="shadow-md col-span-12 lg:col-span-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Result</CardTitle>
        <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Check Now
        </Button>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--secondary))', radius: 4 }} />
              <Legend iconType="square" iconSize={10} wrapperStyle={{paddingTop: '20px'}} />
              <Bar dataKey="2019" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="2020" fill="hsl(var(--sidebar-bg))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultChart;
