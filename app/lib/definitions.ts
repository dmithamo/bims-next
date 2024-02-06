import { type TablerIconsProps } from '@tabler/icons-react';
import { AppRoute } from './routes.enum';

export type SidebarItem = {
  icon: (props: TablerIconsProps) => JSX.Element;
  href: AppRoute;
  label: string;
  permission: string;
};

export type LoggedInUser = {
  username: string;
  avatar?: string;
  permissions: Array<string>;
};
