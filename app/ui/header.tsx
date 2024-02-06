'use client';

import { useLoggedInUser } from '@/lib/hooks/use-logged-in-user';
import { AppRoute } from '@/lib/routes.enum';
import { AppLogo } from '@/ui/logo';
import { IconBell } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';
import { Sidebar } from './sidebar';

const iconClassNames = '';

export function AppHeader() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebarOpen = (currentIsOpen: boolean) =>
    setSidebarIsOpen(!currentIsOpen);

  const loggedInUser = useLoggedInUser();

  return (
    <header className="p-4 h-20 bg-bgcolor2 shadow justify-between flex place-items-center">
      <AppLogo />

      {loggedInUser && (
        <div className="flex place-items-center gap-8">
          <Link href={AppRoute.notifications}>
            <IconBell className={iconClassNames} />
          </Link>

          <Sidebar
            onClose={() => toggleSidebarOpen(true)}
            loggedInUser={loggedInUser}
          />
        </div>
      )}
    </header>
  );
}
