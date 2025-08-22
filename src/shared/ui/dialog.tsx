'use client';

import { type FC, type ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';

interface DialogProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Dialog: FC<DialogProps> = ({ children, open, onOpenChange }) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
};

// 모달 내용 컨테이너 컴포넌트
interface DialogContentProps {
  children: ReactNode;
  className?: string;
}

const DialogContent: FC<DialogContentProps> = ({ children, className }) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      />
      <div
        className={twMerge(
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
          "w-full max-w-sm md:max-w-md", // 모바일/데스크톱 크기
          "bg-white rounded-md shadow-lg", // 디자인 적용
          "p-6 transform transition-all duration-300 ease-out",
          className
        )}
      >
        {children}
      </div>
    </DialogPrimitive.Portal>
  );
};

// 모달 제목 컴포넌트
interface DialogTitleProps {
  children: ReactNode;
  className?: string;
}

const DialogTitle: FC<DialogTitleProps> = ({ children, className }) => (
  <DialogPrimitive.Title
    className={twMerge("text-2xl font-bold mb-4", className)}
  >
    {children}
  </DialogPrimitive.Title>
);

// 모달 닫기 버튼
const DialogClose: FC = () => (
  <DialogPrimitive.Close
    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </DialogPrimitive.Close>
);

export { Dialog, DialogContent, DialogTitle, DialogClose };