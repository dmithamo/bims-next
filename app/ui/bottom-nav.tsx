'use client';

import { NavItem } from '@/lib/definitions';
import { AppRoute } from '@/lib/routes.enum';
import { ImageIcon } from '@/ui/image-icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  navItems: NavItem[];
};
export const AppBottomNav: React.FC<Props> = ({ navItems }) => {
  const pathname = usePathname();
  const isActive = (href: AppRoute) => pathname === href;

  if (navItems.length < 2) return null;
  return (
    <footer className="p-6 h-12 w-full bg-bgcolor shadow fixed bottom-0 left-0 flex justify-between items-center">
      {navItems.map(({ href, iconUrl, label }) => (
        <Link
          prefetch
          href={href}
          key={href}
          className={`flex items-center gap-4 ${isActive(href) ? 'text-accent' : ''}`}
        >
          <ImageIcon iconUrl={iconUrl} alt={href} isActive={isActive(href)} />
          {isActive(href) && <span className="">{label}</span>}
        </Link>
      ))}
    </footer>
  );
};
