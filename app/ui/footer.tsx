import { AppLogo } from '@/ui/logo';
import { IconBrandGithub } from '@tabler/icons-react';

export function AppFooter() {
  return (
    <footer className="p-4 sm:p-8 h-auto sm:h-20 bg-bgcolor w-full flex justify-between items-center text-sm">
      <div>
        <p>&copy;2024</p>
      </div>
      <div className="flex justify-center items-center">
        <AppLogo />
      </div>
      <p className="flex items-center gap-2">
        <a
          className="flex place-items-center group"
          href="https://github.com/dmithamo"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconBrandGithub height={22} width={22} />
          <span className="group-hover:underline group-hover:underline-offset-2">
            dmithamo
          </span>
        </a>
      </p>
    </footer>
  );
}
