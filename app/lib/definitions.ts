import { AppRoute } from './routes.enum';

export type NavItem = {
  iconUrl: string;
  href: AppRoute;
  label: string;
  permission: string;
  subroutes?: Omit<NavItem, 'subroutes'>[];
};

export type BottomNavItem = Omit<NavItem, 'subroutes'>;

export type LoggedInUser = {
  username: string;
  avatar?: string;
  permissions: Array<string>;
};

export const ICON_SIZE = 18;
export const ICON_SIZE_BIGGER = 24;

const timelinesIcon = '/bims-icons/calendar-month.svg';
const transactionsIcon = '/bims-icons/chart-bar.svg';
const budgetIcon = '/bims-icons/chart-pie.svg';
const dashboardIcon = '/bims-icons/presentation.svg';
const investmentsIcon = '/bims-icons/shield-star.svg';
const walletIcon = '/bims-icons/wallet.svg';
const inventoryIcon = '/bims-icons/address-book.svg';
const settingsIcon = '/bims-icons/settings.svg';

export const SIDEBAR_ITEMS: NavItem[] = [
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
