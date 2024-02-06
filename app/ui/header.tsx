import { AppLogo } from '@/ui/logo';
import { IconBurger } from '@tabler/icons-react';

export function AppHeader() {
  return (
    <header className="p-2 h-20 bg-bgcolor2 shadow justify-between flex place-items-center">
      <AppLogo />
      <IconBurger className='opacity-55' />
    </header>
  );
}
