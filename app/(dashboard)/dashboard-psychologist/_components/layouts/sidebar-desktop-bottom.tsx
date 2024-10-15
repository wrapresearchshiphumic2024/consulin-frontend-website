"use client";
import IconSetting from "@/components/icons/icon-setting";
import IconSignOut from "@/components/icons/icon-signout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarDesktopPsychologistBottom() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/dashboard-psychologist/settings"
        className={cn(
          pathname === "/dashboard-psychologist/settings"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all hover:font-semibold"
        )}
      >
        <IconSetting className="h-4 w-4" />
        Setting
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-secondary-custom_secondary transition-all hover:text-primary"
      >
        <IconSignOut className="h-4 w-4" />
        Sign Out
      </Link>
    </>
  );
}
