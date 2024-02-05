export default function MoneyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <nav>Money nav here</nav>
      <main>{children}</main>
    </div>
  );
}
