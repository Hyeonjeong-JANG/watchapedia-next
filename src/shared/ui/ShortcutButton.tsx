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
      <div className="flex items-center justify-center p-2 bg-[#f3f3f3]  cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Image
            src={icon}
            alt={label}
            width={38}
            height={38}
            // layout="fill" // 부모 컨테이너에 맞춰 크기 조절
            objectFit="contain" // 이미지 비율 유지
          />
        </div>
        <span className="text-gray-600 text-sm font-medium">{label}</span>
      </div>
    </Link>
  );
}