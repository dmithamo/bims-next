'use client';

import { ICON_SIZE, SIDEBAR_ITEMS, type NavItem } from '@/lib/definitions';
import { hasAccess, useLoggedInUser } from '@/lib/hooks/use-logged-in-user';
import { AppRoute } from '@/lib/routes.enum';
import { ImageIcon } from '@/ui/image-icon';
import { IconLogout2 } from '@tabler/icons-react';
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
  const isActive = (href: AppRoute, isParent: boolean) =>
    isParent ? pathname.includes(href) : pathname === href;

  function handleLogout() {
    onClose();
  }

  if (loggedInUser?.permissions.length === 0) return null;

  return (
    <nav className="bg-bgcolor2 p-6 h-screen w-full sm:w-1/3 sm:shadow-lg flex flex-col gap-12 place-items-start fixed right-0 top-0 z-10">
      {allowedSidebarItems.map(({ href, iconUrl, label, subroutes }) => (
        <>
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-4 ${isActive(href, true) ? 'text-fgcolor2' : ''}`}
            onClick={onClose}
          >
            <ImageIcon
              iconUrl={iconUrl}
              alt={href}
              isActive={isActive(href, true)}
            />
            <span className="font-bold">{label}</span>
          </Link>

          {subroutes?.length && (
            <div className="flex flex-col gap-6 place-items-start ml-8 -mt-8">
              {subroutes?.map(({ href, iconUrl, label }) => (
                <Link
                  href={href}
                  className={`flex items-center gap-4 ${isActive(href, false) ? 'text-fgcolor2' : ''}`}
                  key={href}
                  onClick={onClose}
                >
                  <ImageIcon
                    iconUrl={iconUrl}
                    alt={href}
                    isActive={isActive(href, false)}
                  />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          )}
        </>
      ))}

      <Link
        href={AppRoute.login}
        onClick={handleLogout}
        className={`flex items-center gap-4`}
      >
        <span>
          <IconLogout2 height={ICON_SIZE} width={ICON_SIZE} />
        </span>
        <span>Logout</span>
      </Link>
    </nav>
  );
};
