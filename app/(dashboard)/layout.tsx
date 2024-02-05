import { Sidebar } from '@/ui/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="p-4 flex-1">{children}</main>
    </div>
  );
}
