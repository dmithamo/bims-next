'use client';

import { useLoggedInUser } from '@/lib/hooks/use-logged-in-user';
import { AppRoute } from '@/lib/routes.enum';
import { AppLogo } from '@/ui/logo';
import {
  IconBell,
  IconMenu2,
  IconUserCircle,
  IconX,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';
import { Sidebar } from './sidebar';

const iconClassNames = 'h-6 w-6 opacity-75 hover:opacity-100';

export function AppHeader() {
  const loggedInUser = useLoggedInUser();

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = (isOpen: boolean) => setSidebarIsOpen(!isOpen);

  return (
    <header className="p-4 h-20 bg-bgcolor2 shadow justify-between flex place-items-center">
      <AppLogo />

      {loggedInUser && (
        <div className="flex place-items-center gap-6 justify-end">
          <Link href={AppRoute.notifications}>
            <IconBell className={iconClassNames} />
          </Link>
          <Link href={AppRoute.profile}>
            <IconUserCircle className={iconClassNames} />
          </Link>

          <button onClick={() => toggleSidebar(sidebarIsOpen)}>
            {sidebarIsOpen ? (
              <IconX className={iconClassNames} />
            ) : (
              <IconMenu2 className={iconClassNames} />
            )}
          </button>
        </div>
      )}

      {sidebarIsOpen && <Sidebar onClose={() => toggleSidebar(true)} />}
    </header>
  );
}
