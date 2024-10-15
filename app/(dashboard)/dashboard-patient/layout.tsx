import DashboardLayoutTemplate from "../_components/dashboard-layout-template";
import SidebarDesktopPatientBottom from "./_components/layouts/sidebar-desktop-bottom";
import SidebarDesktopPatient from "./_components/layouts/sidebar-desktop-patient";
import SidebarMobilePatientBottom from "./_components/layouts/sidebar-mobile-bottom";
import SidebarMobilePatient from "./_components/layouts/sidebar-mobile-patient";

export default function DashboardLayoutPsychologist({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayoutTemplate
      children={children}
      sidebarDesktopChildren={<SidebarDesktopPatient />}
      sidebarMobileChildren={<SidebarMobilePatient />}
      sidebarDesktopBottomChildren={<SidebarDesktopPatientBottom />}
      sidebarMobileBottomChildren={<SidebarMobilePatientBottom />}
    />
  );
}
