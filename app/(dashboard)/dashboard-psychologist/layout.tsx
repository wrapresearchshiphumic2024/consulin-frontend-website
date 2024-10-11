import DashboardLayoutTemplate from "../_components/dashboard-layout-template";
import SidebarDesktopPsychologistBottom from "./_components/layouts/sidebar-desktop-bottom";
import SidebarDesktopPsychologist from "./_components/layouts/sidebar-desktop-psychologist";
import SidebarMobilePsychologistBottom from "./_components/layouts/sidebar-mobile-bottom";
import SidebarMobilePsychologist from "./_components/layouts/sidebar-mobile-psychologist";

export default function DashboardLayoutPsychologist({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayoutTemplate
      children={children}
      sidebarDesktopChildren={<SidebarDesktopPsychologist />}
      sidebarMobileChildren={<SidebarMobilePsychologist />}
      sidebarDesktopBottomChildren={<SidebarDesktopPsychologistBottom />}
      sidebarMobileBottomChildren={<SidebarMobilePsychologistBottom />}
    />
  );
}
