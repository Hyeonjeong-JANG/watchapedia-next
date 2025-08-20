import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { type ButtonHTMLAttributes, type FC } from 'react';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const buttonVariants = cva(
  twMerge(
    'inline-flex items-center justify-center rounded-md font-semibold', 
    'transition-colors duration-200 ease-in-out',
    'focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50'
  ),
  {
    variants: {
      variant: {
        //  핑크색
        primary: 'bg-primary text-white hover:bg-secondary active:bg-secondary/80',
        // 회색 계열과 핑크색
        secondary: 'bg-gray-800 text-gray-100 hover:bg-gray-700 active:bg-gray-600',
        // 투명 버튼
        minimal: 'bg-transparent text-gray-300 hover:bg-gray-800 active:bg-gray-700',
      },
      size: {
        small: 'h-8 px-3.5 text-sm',
        medium: 'h-10 px-5 text-base',
        large: 'h-12 px-6 text-lg',
      },
      hasIcon: {
        true: '',
      },
    },
    compoundVariants: [
      {
        hasIcon: true,
        size: 'small',
        class: 'gap-1.5',
      },
      {
        hasIcon: true,
        size: 'medium',
        class: 'gap-2',
      },
      {
        hasIcon: true,
        size: 'large',
        class: 'gap-2.5',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

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
      {leftIcon && (
        <span className="flex items-center justify-center">{leftIcon}</span>
      )}
      {children}
      {rightIcon && (
        <span className="flex items-center justify-center">{rightIcon}</span>
      )}
    </button>
  );
};

Button.displayName = 'Button';
export { Button, buttonVariants };