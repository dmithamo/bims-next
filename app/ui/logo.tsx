import { Routes } from '@/lib/routes.enum';
import Image from 'next/image';
import Link from 'next/link';

export const AppLogo: React.FC = () => (
  <Link href={Routes.home}>
    <Image
      src="/bims-logo.svg"
      alt="Vercel Logo"
      className="dark:invert -translate-y-2"
      width={100}
      height={24}
      priority
    />
  </Link>
);
