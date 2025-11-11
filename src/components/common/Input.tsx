import { FC, InputHTMLAttributes, memo } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: FC<InputProps> = memo(({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#231815] mb-1.5">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-[10px] text-sm text-[#231815] placeholder:text-[#99a1a8] bg-white border ${
          error ? 'border-red-500' : 'border-[#c9cdd2]'
        } rounded focus:outline-none focus:border-[#231815] ${className}`}
        style={{ fontFamily: 'Pretendard, sans-serif' }}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
