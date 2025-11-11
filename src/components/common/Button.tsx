import { FC, ButtonHTMLAttributes, memo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = memo(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'rounded transition-colors font-medium';

  const variantClasses = {
    primary: 'bg-[#231815] text-white hover:bg-[#3a3835]',
    secondary: 'bg-white text-[#231815] border border-[#c9cdd2] hover:bg-gray-50',
    outline: 'bg-transparent text-[#231815] border border-[#c9cdd2] hover:bg-gray-50',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-4 py-3 text-base',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
