import IconSignOut from "@/components/icons/icon-signout";
import Link from "next/link";

export default function SidebarDesktopBottom() {
  return (
    <Link
      href="#"
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-secondary-custom_secondary transition-all hover:text-primary"
    >
      <IconSignOut className="h-4 w-4" />
      Sign Out
    </Link>
  );
}
