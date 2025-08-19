// src/shared/ui/card.tsx
import { type FC, type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

// Props 인터페이스 정의
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// Card 컴포넌트 구현
const Card: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge(
        "rounded-2xl bg-white shadow-lg p-6",
        "dark:bg-gray-800 dark:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Card.displayName = "Card";
export { Card };