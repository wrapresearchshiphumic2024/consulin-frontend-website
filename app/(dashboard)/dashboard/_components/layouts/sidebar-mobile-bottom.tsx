import IconSignOut from "@/components/icons/icon-signout";
import Link from "next/link";

export default function SidebarMobileBottom() {
  return (
    <Link
      href="#"
      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:text-foreground"
    >
      <IconSignOut className="h-5 w-5" />
      Sign Out
    </Link>
  );
}
