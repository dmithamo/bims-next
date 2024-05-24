'use client';

import { useLoggedInUser } from '@/lib/hooks/use-logged-in-user';
import { IconUserCircle, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Sidebar } from './sidebar';

const iconClassNames = 'h-8 w-8 opacity-75 hover:opacity-100';

export function AppHeader() {
  const loggedInUser = useLoggedInUser();

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = (isOpen: boolean) => setSidebarIsOpen(!isOpen);

  return (
    <header className="fixed right-4 top-3 z-10">
      {loggedInUser && (
        <div className="flex place-items-center gap-6 justify-end">
          <button onClick={() => toggleSidebar(sidebarIsOpen)}>
            {sidebarIsOpen ? (
              <IconX className={iconClassNames} />
            ) : (
              <IconUserCircle className={iconClassNames} />
            )}
          </button>
        </div>
      )}

      {sidebarIsOpen && <Sidebar onClose={() => toggleSidebar(true)} />}
    </header>
  );
}
