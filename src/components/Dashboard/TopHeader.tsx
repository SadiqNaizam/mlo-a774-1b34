import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 h-16 bg-card shadow-sm border-b">
      <h1 className="text-xl font-semibold text-foreground">Dashboard User</h1>
      <Button variant="ghost" size="icon">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </header>
  );
};

export default TopHeader;
