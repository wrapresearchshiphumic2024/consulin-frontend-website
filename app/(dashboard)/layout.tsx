import DashboardLayoutTemplate from "./_components/dashboard-layout-template";
import SidebarDesktop from "./_components/layouts/sidebar-desktop";
import SidebarMobile from "./_components/layouts/sidebar-mobile";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayoutTemplate
      children={children}
      sidebarDesktopChildren={<SidebarDesktop />}
      sidebarMobileChildren={<SidebarMobile />}
    />
  );
}
