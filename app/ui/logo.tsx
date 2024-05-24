import { AppRoute } from '@/lib/routes.enum';
import Image from 'next/image';
import Link from 'next/link';

export const AppLogo: React.FC = () => (
  <Link href={AppRoute.home}>
    <Image
      src="/bims-logo.svg"
      alt="Bims Logo"
      className="dark:invert -translate-y-2"
      width={75}
      height={16}
      priority
    />
  </Link>
);
