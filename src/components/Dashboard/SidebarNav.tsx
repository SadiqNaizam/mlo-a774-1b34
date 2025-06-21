import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Home, Folder, Mail, Bell, MapPin, BarChart3, User } from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href, isActive = false }) => (
  <a
    href={href}
    className={cn(
      'flex items-center w-full px-8 py-3 text-sm font-medium rounded-md',
      'transition-colors duration-200',
      isActive
        ? 'bg-accentSecondary/20 text-white'
        : 'text-gray-300 hover:bg-accentSecondary/10 hover:text-white'
    )}
  >
    <Icon className="w-5 h-5 mr-4" />
    <span>{label}</span>
  </a>
);

const SidebarNav: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'home', href: '#', isActive: true },
    { icon: Folder, label: 'file', href: '#' },
    { icon: Mail, label: 'messages', href: '#' },
    { icon: Bell, label: 'notification', href: '#' },
    { icon: MapPin, label: 'location', href: '#' },
    { icon: BarChart3, label: 'graph', href: '#' },
  ];

  return (
    <aside className="w-60 h-screen bg-sidebar text-sidebar-foreground flex flex-col fixed">
      <div className="flex flex-col items-center py-8 px-4 border-b border-white/10">
        <div className="relative mb-4">
            <Avatar className="w-24 h-24 border-4 border-white/20">
                <div className="w-full h-full flex items-center justify-center bg-accentSecondary/20">
                    <User className="w-12 h-12 text-white" />
                </div>
            </Avatar>
        </div>
        <h2 className="text-xl font-bold text-white">JOHN DON</h2>
        <p className="text-sm text-gray-400">johndon@company.com</p>
      </div>

      <nav className="flex-1 py-6 space-y-2">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>
    </aside>
  );
};

export default SidebarNav;
