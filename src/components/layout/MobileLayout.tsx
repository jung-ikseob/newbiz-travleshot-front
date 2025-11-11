import { FC, ReactNode } from 'react';

interface MobileLayoutProps {
  children: ReactNode;
  className?: string;
}

export const MobileLayout: FC<MobileLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="w-full h-screen overflow-hidden relative bg-white">
      <div className={`relative w-full h-full max-w-[375px] mx-auto overflow-hidden bg-white ${className}`}>
        {children}
      </div>
    </div>
  );
};
