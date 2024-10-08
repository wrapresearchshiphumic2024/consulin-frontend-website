import DashboardLayoutTemplate from "./_components/dahsboard-layout-template";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutTemplate>{children}</DashboardLayoutTemplate>;
}
