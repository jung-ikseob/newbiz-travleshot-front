import { FC, InputHTMLAttributes, memo } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox: FC<CheckboxProps> = memo(({ label, id, className = '', ...props }) => {
  return (
    <div className="flex gap-1.5 items-center">
      <input
        type="checkbox"
        id={id}
        className={`w-4 h-4 rounded-sm border-[#c9cdd2] text-[#231815] focus:ring-0 focus:ring-offset-0 ${className}`}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="text-xs text-[#231815] cursor-pointer select-none"
          style={{ fontFamily: 'Pretendard, sans-serif', lineHeight: '1.5' }}
        >
          {label}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
