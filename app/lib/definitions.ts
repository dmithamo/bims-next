import { AppRoute } from './routes.enum';

export type SidebarItem = {
  iconUrl: string;
  href: AppRoute;
  label: string;
  permission: string;
  subroutes?: Omit<SidebarItem, 'subroutes'>[];
};

export type LoggedInUser = {
  username: string;
  avatar?: string;
  permissions: Array<string>;
};
