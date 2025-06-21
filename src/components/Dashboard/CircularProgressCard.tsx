import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'Completed', value: 45 },
  { name: 'Remaining', value: 55 },
];

const COLORS = ['hsl(var(--primary))', 'hsl(var(--border))'];

const CircularProgressCard: React.FC = () => {
  const percentage = data[0].value;

  return (
    <Card className="shadow-md col-span-12 lg:col-span-4 flex flex-col">
      <CardContent className="flex-1 flex flex-col items-center justify-center p-6 text-center gap-4">
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={450}
                paddingAngle={0}
                dataKey="value"
                cornerRadius={10}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-foreground">{`${percentage}%`}</span>
          </div>
        </div>

        <div className="space-y-1 mt-4">
          <p className="text-sm text-muted-foreground">Lorem ipsum</p>
          <p className="text-sm text-muted-foreground">Lorem ipsum</p>
          <p className="text-sm text-muted-foreground">Lorem ipsum</p>
          <p className="text-sm text-muted-foreground">Lorem ipsum</p>
        </div>

        <Button variant="default" className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
          Check Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CircularProgressCard;
