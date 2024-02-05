import { AppLogo } from '@/ui/logo';
import { AppFooter } from './ui/footer';

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col justify-around p-2 place-items-center">
        <div className="">
          <AppLogo />
          <small className="text-slate-500 dark:text-gray-100 block">
            This is the landing page for bims. I might use it for marketting
            verbiage&trade;
          </small>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
