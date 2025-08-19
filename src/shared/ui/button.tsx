// src/shared/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { type ButtonHTMLAttributes, type FC } from 'react';

// 1. Props 인터페이스 정의
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

// 2. CVA로 버튼 스타일 정의
const buttonVariants = cva(
  twMerge(
    "inline-flex items-center justify-center rounded-full font-semibold",
    "transition-colors duration-200 ease-in-out",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50"
  ),
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
        secondary: "bg-primary-100 text-primary-600 hover:bg-primary-200 active:bg-primary-300",
        minimal: "bg-transparent text-primary-600 hover:bg-primary-100 active:bg-primary-200",
      },
      size: {
        small: "h-8 px-3.5 text-sm",
        medium: "h-10 px-5 text-base",
        large: "h-12 px-6 text-lg",
      },
      hasIcon: {
        true: "",
      },
    },
    compoundVariants: [
      {
        hasIcon: true,
        size: "small",
        class: "gap-1.5",
      },
      {
        hasIcon: true,
        size: "medium",
        class: "gap-2",
      },
      {
        hasIcon: true,
        size: "large",
        class: "gap-2.5",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

// 3. 버튼 컴포넌트 구현
const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  const hasIcon = !!leftIcon || !!rightIcon;
  return (
    <button
      className={twMerge(
        buttonVariants({ variant, size, hasIcon }),
        className
      )}
      {...props}
    >
      {leftIcon && <span className="flex items-center justify-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center justify-center">{rightIcon}</span>}
    </button>
  );
};

Button.displayName = "Button";
export { Button, buttonVariants };