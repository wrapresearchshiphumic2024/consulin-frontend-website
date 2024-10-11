import DashboardLayoutTemplate from "../_components/dashboard-layout-template";
import SidebarDesktop from "./_components/layouts/sidebar-desktop";
import SidebarDesktopBottom from "./_components/layouts/sidebar-desktop-bottom";
import SidebarMobile from "./_components/layouts/sidebar-mobile";
import SidebarMobileBottom from "./_components/layouts/sidebar-mobile-bottom";

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
      sidebarDesktopBottomChildren={<SidebarDesktopBottom />}
      sidebarMobileBottomChildren={<SidebarMobileBottom />}
    />
  );
}
