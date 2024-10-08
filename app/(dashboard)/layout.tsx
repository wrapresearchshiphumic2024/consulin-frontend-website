import DashboardLayoutTemplate from "./_components/dashboard-layout-template";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutTemplate>{children}</DashboardLayoutTemplate>;
}
