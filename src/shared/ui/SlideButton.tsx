import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface SlideButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}

export function SlideButton({ direction, onClick, disabled }: SlideButtonProps) {
  const icon = direction === 'left' ? faChevronLeft : faChevronRight;
  const position = direction === 'left' ? 'left-0' : 'right-0';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute ${position} top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full bg-white bg-opacity-75 shadow-md flex items-center justify-center cursor-pointer z-10
                disabled:opacity-40 disabled:cursor-not-allowed`}
    >
      <FontAwesomeIcon icon={icon} className="w-2 h-2 text-gray-300" />
    </button>
  );
}