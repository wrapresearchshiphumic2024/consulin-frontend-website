"use client";
import IconSetting from "@/components/icons/icon-setting";
import IconSignOut from "@/components/icons/icon-signout";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMobilePatientBottom() {
  const pathname = usePathname();
  return (
    <>
      <SheetClose asChild>
        <Link
          href="/dashboard-patient/settings"
          className={cn(
            pathname === "/dashboard-patient/settings"
              ? "bg-secondary-custom_secondary/[.08]"
              : "",
            "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:font-semibold transition-all "
          )}
        >
          <IconSetting className="h-5 w-5" />
          Setting
        </Link>
      </SheetClose>

      <Link
        href="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:text-foreground"
      >
        <IconSignOut className="h-5 w-5" />
        Sign Out
      </Link>
    </>
  );
}
