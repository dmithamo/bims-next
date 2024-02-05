import { AppLogo } from "@/ui/logo";
import { IconBrandGithub } from '@tabler/icons-react';

export function AppFooter() {
  return <footer className="p-8 sm:p-16 h-auto sm:h-20 bg-[rgb(var(--background-start-rgb))] shadow w-full flex place-items-center justify-between text-sm">
    <div className="">
      <AppLogo />
      <p className="flex place-items-center gap-2">
        Developed by <a className="flex place-items-center group" href="https://github.com/dmithamo" target="_blank" rel="noreferrer noopener">
          <IconBrandGithub height={22} width={22} />
          <span className="group-hover:underline group-hover:underline-offset-2">dmithamo</span>
        </a>
      </p>
    </div>
    <div>
      <p>&copy;2024</p>
      <p>All rights reserved</p>
    </div>
  </footer>
}