import { AppFooter } from '@/ui/footer';
import { AppHeader } from '@/ui/header';

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className='flex flex-col'>
    <section className='flex flex-col h-screen'>
      <AppHeader />
      <main className='p-4 flex-1'>{children}</main>
    </section>
    <AppFooter />
  </div>
}