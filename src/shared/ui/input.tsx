import { type InputHTMLAttributes, type FC } from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: FC<InputProps> = ({
  className,
  error = false,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const isWithIcon = !!leftIcon || !!rightIcon;

  return (
    <div className="relative flex items-center w-full">
      {leftIcon && (
        <span className="absolute left-4 z-10 text-gray-400 pointer-events-none">
          {leftIcon}
        </span>
      )}
      <input
        className={twMerge(
          // 모서리, 포커스, 색상 수정
          "w-full rounded-full border-2 p-4 text-watcha-text-dark bg-watcha-background-light transition-all duration-200",
          "placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-watcha-primary",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error ? "border-watcha-primary" : "border-gray-200",
          isWithIcon ? "pl-12" : "",
          className
        )}
        {...props}
      />
      {rightIcon && (
        <span className="absolute right-4 z-10 text-gray-400 pointer-events-none">
          {rightIcon}
        </span>
      )}
    </div>
  );
};

Input.displayName = 'Input';
export { Input };