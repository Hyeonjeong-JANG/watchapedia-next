import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ShortcutButtonProps {
  label: string;
  icon: string;
  href: string;
}

export function ShortcutButton({ label, icon, href }: ShortcutButtonProps) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center mb-2">
          <Image
            src={icon}
            alt={label}
            layout="fill" // 부모 컨테이너에 맞춰 크기 조절
            objectFit="contain" // 이미지 비율 유지
          />
        </div>
        <span className="text-gray-700 text-sm font-semibold">{label}</span>
      </div>
    </Link>
  );
}