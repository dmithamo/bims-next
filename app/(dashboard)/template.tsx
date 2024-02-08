'use client';

import { BottomNavItem, SIDEBAR_ITEMS } from '@/lib/definitions';
import { hasAccess, useLoggedInUser } from '@/lib/hooks/use-logged-in-user';
import { AppBottomNav } from '@/ui/bottom-nav';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function DashboardSecondaryNav({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const loggedInUser = useLoggedInUser();

  const allowedBottomNavItems = useMemo<BottomNavItem[]>(
    () =>
      SIDEBAR_ITEMS.reduce((acc: BottomNavItem[], curr) => {
        if (pathname.startsWith(curr.href)) {
          const subroutes = curr?.subroutes || [];
          acc.push(curr, ...subroutes);
        }

        return acc.filter((bottomNavItem) =>
          hasAccess([bottomNavItem.permission], loggedInUser?.permissions),
        );
      }, []),
    [pathname, loggedInUser],
  );

  return (
    <div className="w-full">
      <AppBottomNav navItems={allowedBottomNavItems} />
      <section>{children}</section>
    </div>
  );
}
