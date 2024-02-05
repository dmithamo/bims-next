import '@/globals.css';
import { AppHeader } from '@/ui/header';
import type { Metadata } from 'next';
import { Overpass } from 'next/font/google';

const overpass = Overpass({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Bims',
    default: 'Bims',
  },
  description: 'The one stop shop for all things bims',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen flex flex-col ${overpass.className}`}>
        <AppHeader />
        <main className='flex-1'>
          {children}
        </main>
      </body>
    </html>
  );
}
