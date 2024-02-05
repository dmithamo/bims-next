import Image from 'next/image';

export const BimsLogo: React.FC = () => <Image
  src="/bims-logo.svg"
  alt="Vercel Logo"
  className="dark:invert"
  width={100}
  height={24}
  priority
/>