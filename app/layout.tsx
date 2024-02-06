import '@/globals.css';
import { AppHeader } from '@/ui/header';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';

const ibm = IBM_Plex_Sans({ subsets: ['latin'], weight: '400' });

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
      <body className={`h-screen flex flex-col text-base ${ibm.className}`}>
        <AppHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
