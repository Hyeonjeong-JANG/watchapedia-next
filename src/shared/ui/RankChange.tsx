import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';

interface RankChangeProps {
  rankChange: number;
}

export function RankChange({ rankChange }: RankChangeProps) {
  const icon = rankChange > 0 ? faArrowUp : rankChange < 0 ? faArrowDown : faMinus;
  const color = rankChange > 0 ? 'text-red-500' : rankChange < 0 ? 'text-blue-500' : 'text-gray-500';

  return (
    <span className={twMerge('text-xs', color)}>
      <FontAwesomeIcon icon={icon} />
      {rankChange !== 0 && (
        <span className="ml-1">{Math.abs(rankChange)}</span>
      )}
    </span>
  );
}