import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Share2, ThumbsUp, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardData {
  id: string;
  title: string;
  value: string;
  icon: React.ElementType;
  isPrimary?: boolean;
}

const statsData: StatCardData[] = [
  {
    id: 'earnings',
    title: 'Earning',
    value: '$ 628',
    icon: DollarSign,
    isPrimary: true,
  },
  {
    id: 'shares',
    title: 'Share',
    value: '2434',
    icon: Share2,
  },
  {
    id: 'likes',
    title: 'Likes',
    value: '1259',
    icon: ThumbsUp,
  },
  {
    id: 'rating',
    title: 'Rating',
    value: '8,5',
    icon: Star,
  },
];

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <Card
          key={stat.id}
          className={cn(
            'shadow-md transition-transform duration-300 hover:-translate-y-1',
            stat.isPrimary && 'bg-sidebar text-sidebar-foreground'
          )}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={cn('h-5 w-5', stat.isPrimary ? 'text-gray-300' : 'text-muted-foreground')} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCardGrid;
