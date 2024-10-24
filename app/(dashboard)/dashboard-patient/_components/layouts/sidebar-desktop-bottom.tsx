"use client";
import SignOut from "@/app/(dashboard)/_components/ui/signout";
import IconSetting from "@/components/icons/icon-setting";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarDesktopPatientBottom() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/dashboard-patient/settings"
        className={cn(
          pathname === "/dashboard-patient/settings"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all hover:font-semibold"
        )}
      >
        <IconSetting className="h-4 w-4" />
        Setting
      </Link>
      <SignOut />
    </>
  );
}
