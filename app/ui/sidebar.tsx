'use client';

import type { SidebarItem } from '@/lib/definitions';
import { useLoggedInUser } from '@/lib/hooks/use-logged-in-user';
import { AppRoute } from '@/lib/routes.enum';
import { IconLogout2 } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const timelinesIcon = '/bims-icons/calendar-month.svg';
const transactionsIcon = '/bims-icons/chart-bar.svg';
const budgetIcon = '/bims-icons/chart-pie.svg';
const dashboardIcon = '/bims-icons/presentation.svg';
const investmentsIcon = '/bims-icons/shield-star.svg';
const walletIcon = '/bims-icons/wallet.svg';
const inventoryIcon = '/bims-icons/address-book.svg';
const settingsIcon = '/bims-icons/settings.svg';

const ICON_SIZE = 18;

const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    href: AppRoute.money,
    iconUrl: dashboardIcon,
    label: 'Money',
    permission: 'app:money',
    subroutes: [
      {
        href: AppRoute.transactions,
        iconUrl: transactionsIcon,
        label: 'Transactions',
        permission: 'app:money:transactions',
      },
      {
        href: AppRoute.wallet,
        iconUrl: walletIcon,
        label: 'Wallet',
        permission: 'app:money:balances',
      },
      {
        href: AppRoute.budget,
        iconUrl: budgetIcon,
        label: 'Budget',
        permission: 'app:money:budget',
      },
      {
        href: AppRoute.investments,
        iconUrl: investmentsIcon,
        label: 'Investments',
        permission: 'app:money:investments',
      },
    ],
  },
  {
    href: AppRoute.inventory,
    iconUrl: inventoryIcon,
    label: 'Inventory',
    permission: 'app:inventory',
  },
  {
    href: AppRoute.timelines,
    iconUrl: timelinesIcon,
    label: 'Timelines',
    permission: 'app:timelines',
  },
  {
    href: AppRoute.settings,
    iconUrl: settingsIcon,
    label: 'Settings',
    permission: 'app:settings',
  },
];

type Props = {
  onClose(): void;
};

export const Sidebar: React.FC<Props> = ({ onClose }) => {
  const loggedInUser = useLoggedInUser();
  const allowedSidebarItems = useMemo<SidebarItem[]>(
    () =>
      SIDEBAR_ITEMS.filter((item) =>
        loggedInUser?.permissions.some((permission) =>
          permission.startsWith(item.permission),
        ),
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
