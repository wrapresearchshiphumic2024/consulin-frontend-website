import DashboardLayoutTemplate from "./_components/dahsboard-layout-template";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutTemplate>{children}</DashboardLayoutTemplate>;
}
