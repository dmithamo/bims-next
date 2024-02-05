import { AppFooter } from '@/ui/footer';

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col h-full">
      <main className="p-4 flex-1">{children}</main>
      <AppFooter />
    </div>
  );
}
