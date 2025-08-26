// src/features/shortcuts/ShortcutSection.tsx

'use client';

import React from 'react';
import { ShortcutButton } from '@/shared/ui/ShortcutButton'; // 분리한 컴포넌트 임포트

interface ShortcutItem {
  id: number;
  label: string;
  icon: string;
  href: string;
}

const shortcutData: ShortcutItem[] = [
  { id: 1, label: '매거진', icon: '/icons/magazine.png', href: '/magazines' },
  { id: 2, label: '이벤트', icon: '/icons/event.png', href: '/events' },
  { id: 3, label: '캘린더', icon: '/icons/calendar.png', href: '/calendar' },
  { id: 4, label: '취향분석', icon: '/icons/analysis.png', href: '/analysis' },
  { id: 5, label: '추천', icon: '/icons/recommendation.png', href: '/recommendations' },
];

export function ShortcutSection() {
  return (
    <section className="my-12">
      <div className="grid grid-cols-5 gap-4">
        {shortcutData.map((item) => (
          <ShortcutButton
            key={item.id}
            label={item.label}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
}