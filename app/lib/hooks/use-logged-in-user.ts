import { LoggedInUser } from '../definitions';

export function useLoggedInUser(): LoggedInUser | null {
  return {
    username: 'dmithamo',
    permissions: ['app:money'],
  };
}
