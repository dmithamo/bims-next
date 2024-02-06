'use client';

import type { LoggedInUser, SidebarItem } from '@/lib/definitions';
import { IconMenu, IconX } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { BackDrop } from './backdrop';

type Props = {
  onClose(): void;
  loggedInUser: LoggedInUser;
};

const SIDEBAR_ITEMS: SidebarItem[] = [];

export const Sidebar: React.FC<Props> = ({ onClose, loggedInUser }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const closeSidebar = () => setSidebarIsOpen(false);

  const allowedSidebarItems = useMemo<SidebarItem[]>(
    () =>
      SIDEBAR_ITEMS.filter((item) =>
        loggedInUser?.permissions.some((permission) =>
          permission.startsWith(item.permission),
        ),
      ),
    [loggedInUser],
  );

  if (loggedInUser.permissions.length === 0) return null;

  if (!sidebarIsOpen)
    return (
      <button onClick={() => setSidebarIsOpen(true)}>
        <IconMenu />
      </button>
    );

  return (
    <BackDrop childrenPos="right">
      <nav className="bg-bgcolor2 p-4 h-screen w-full sm:w-1/3 sm:shadow flex flex-col place-items-start">
        <div className="w-full flex place-items-center py-4 border-b border-bgcolor justify-end">
          <button
            onClick={closeSidebar}
            className="flex place-items-center gap-4"
          >
            <IconX />
          </button>
        </div>

        {allowedSidebarItems.map((sidebarItem) => (
          <>{sidebarItem.label}</>
        ))}
      </nav>
    </BackDrop>
  );
};
