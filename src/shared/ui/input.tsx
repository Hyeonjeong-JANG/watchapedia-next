// src/shared/ui/input.tsx
import { type InputHTMLAttributes, type FC } from 'react';
import { twMerge } from 'tailwind-merge';

// Props 인터페이스 정의
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Input 컴포넌트 구현
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
          "w-full rounded-lg border-2 p-4 text-gray-800 transition-all duration-200",
          "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error ? "border-red-500" : "border-gray-200",
          isWithIcon ? "pl-12" : "", // 아이콘이 있을 때 패딩 추가
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

Input.displayName = "Input";
export { Input };