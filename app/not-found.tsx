import { AppRoute } from '@/lib/routes.enum';
import { AppFooter } from '@/ui/footer';
import { IconError404 } from '@tabler/icons-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main className="flex h-full flex-col justify-around p-2 place-items-center">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <IconError404 height={200} width={300} className="opacity-30" />
          <div>
            <p>This is probably not what you are looking for.</p>
            <p>
              Click{' '}
              <Link
                className="px-1 underline underline-offset-2"
                href={AppRoute.home}
              >
                here
              </Link>{' '}
              to find something familiar
            </p>
          </div>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
