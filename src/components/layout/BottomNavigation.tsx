import { FC, memo } from 'react';
import { toast } from '@/hooks/use-toast';

interface NavigationItem {
  icon: string;
  label: string;
  onClick?: () => void;
}

interface BottomNavigationProps {
  items: NavigationItem[];
  className?: string;
}

export const BottomNavigation: FC<BottomNavigationProps> = memo(({ items, className = '' }) => {
  const handleDefaultClick = () => {
    toast({ title: "서비스 준비중입니다.", duration: 3000 });
  };

  return (
    <div className={`absolute bottom-0 left-0 w-full flex flex-col bg-white ${className}`}>
      <div className="border-t border-[#f0f1f4] flex justify-between items-center px-6 pt-1.5 pb-5">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick || handleDefaultClick}
            className="w-6 h-6 flex items-center justify-center"
            aria-label={item.label}
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
          </button>
        ))}
      </div>
      <div className="bg-white h-[21px] w-full" />
    </div>
  );
});

BottomNavigation.displayName = 'BottomNavigation';
