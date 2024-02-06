export default function DashboardSecondaryNav({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <p>Not sure how to use a Template :/</p>
      <p>Secondary nav perhaps?</p>
      <section>{children}</section>
    </div>
  );
}
