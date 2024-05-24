import { LoggedInUser } from '../definitions';

export function useLoggedInUser(): LoggedInUser | null {
  return true
    ? null
    : {
        username: 'dmithamo',
        permissions: [
          'app:money',
          'app:inventory',
          'app:timelines',
          'app:settings',
        ],
      };
}

export function hasAccess(
  requiredPermissions: Array<string>,
  userPermissions: Array<string> = [],
): boolean {
  return requiredPermissions
    .map((rqdPerm) => hasPermission(rqdPerm, userPermissions))
    .every(Boolean);
}

export function hasPermission(
  requiredPermission: string,
  userPermissions: Array<string>,
) {
  for (const uPerm of userPermissions) {
    if (requiredPermission.startsWith(uPerm)) return true;
  }

  return false;
}
