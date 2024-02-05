import Image from 'next/image';

export const AppLogo: React.FC = () => true ? <strong className='text-4xl select-none font-extrabold'>bims</strong> : <Image
  src="/bims-logo.svg"
  alt="Vercel Logo"
  className="dark:invert"
  width={100}
  height={24}
  priority
/>