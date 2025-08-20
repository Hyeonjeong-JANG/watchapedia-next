import { type FC, type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge(
        'rounded-md bg-watcha-background-light p-6 text-watcha-text-dark',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Card.displayName = 'Card';
export { Card };