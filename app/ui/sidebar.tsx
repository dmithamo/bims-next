'use client';

import { ICON_SIZE, SIDEBAR_ITEMS, type NavItem } from '@/lib/definitions';
import { hasAccess, useLoggedInUser } from '@/lib/hooks/use-logged-in-user';
import { AppRoute } from '@/lib/routes.enum';
import { IconLogout2 } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type Props = {
  onClose(): void;
};

export const Sidebar: React.FC<Props> = ({ onClose }) => {
  const loggedInUser = useLoggedInUser();
  const allowedSidebarItems = useMemo<NavItem[]>(
    () =>
      SIDEBAR_ITEMS.filter((item) =>
        hasAccess([item.permission], loggedInUser?.permissions),
      ),
    [loggedInUser],
  );

  const pathname = usePathname();
  const isActive = (href: AppRoute) => pathname.includes(href);

  function handleLogout() {
    onClose();
  }

  if (loggedInUser?.permissions.length === 0) return null;

  return (
    <nav className="bg-bgcolor2 p-6 h-screen w-full sm:w-1/3 sm:shadow-lg flex flex-col gap-12 place-items-start fixed right-0 top-24 z-10">
      {allowedSidebarItems.map(({ href, iconUrl, label, subroutes }) => (
        <>
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-4 ${isActive(href) ? 'text-accent' : ''}`}
            onClick={onClose}
          >
            <Image
              src={iconUrl}
              alt={href}
              height={ICON_SIZE}
              width={ICON_SIZE}
              priority
            />
            <span className="font-bold">{label}</span>
          </Link>

          {subroutes?.length && (
            <div className="flex flex-col gap-6 place-items-start ml-8 -mt-8">
              {subroutes?.map(({ href, iconUrl, label }) => (
                <Link
                  href={href}
                  className={`flex items-center gap-4 ${isActive(href) ? 'text-accent' : ''}`}
                  key={href}
                  onClick={onClose}
                >
                  <Image
                    src={iconUrl}
                    alt={href}
                    height={ICON_SIZE}
                    width={ICON_SIZE}
                    priority
                  />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          )}
        </>
      ))}

      <button onClick={handleLogout} className="flex items-center gap-4">
        <span>
          <IconLogout2 height={ICON_SIZE} width={ICON_SIZE} />
        </span>
        <span>Logout</span>
      </button>
    </nav>
  );
};
