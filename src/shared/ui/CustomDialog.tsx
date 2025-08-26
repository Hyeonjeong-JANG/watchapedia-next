'use client';

import { type FC, type ReactNode } from 'react';
import { Dialog, DialogContent, DialogClose } from './Dialog';
import { twMerge } from 'tailwind-merge';

interface CustomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  showBrand?: boolean;
  showUnderline?: boolean;
  closePosition?: 'left' | 'right';
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  underlineClassName?: string;
  onClose?: () => void;
}

const CustomDialog: FC<CustomDialogProps> = ({
  open,
  onOpenChange,
  title,
  showBrand = true,
  showUnderline = false,
  closePosition = 'right',
  children,
  className,
  titleClassName,
  underlineClassName,
  onClose
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={twMerge("max-w-sm", className)}>
        <div className="relative">
          <DialogClose 
            position={closePosition}
            className="cursor-pointer"
          />
          
          {showBrand && (
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">
                <span className="text-[#ff0558]">WATCHA</span>
                <span className="text-gray-700"> PEDIA</span>
              </h1>
            </div>
          )}

          {title && (
            <div className="relative mb-6">
              <h2 className={twMerge(
                "text-xl font-bold text-center text-black",
                titleClassName
              )}>
                {title}
              </h2>
              {showUnderline && (
                <div 
                  className={twMerge(
                    "absolute left-0 right-0 h-px bg-gray-200 mt-4", 
                    underlineClassName
                  )} 
                />
              )}
            </div>
          )}

          <div className="relative">
            {children}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { CustomDialog };
