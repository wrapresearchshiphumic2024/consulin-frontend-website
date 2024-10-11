"use client";
import IconList from "@/components/icons/icon-list";
import IconPsychology from "@/components/icons/icon-psychology";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarDesktop() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/dashboard"
        className={cn(
          pathname === "/dashboard"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all hover:font-semibold"
        )}
      >
        <Home className="h-4 w-4" />
        Home
      </Link>
      <Link
        href="/dashboard/approve-psyghologst"
        className={cn(
          pathname === "/dashboard/approve-psyghologst"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all   hover:font-semibold"
        )}
      >
        <IconPsychology className="h-4 w-4" color="#F5F5F7" />
        Approve Psyghologst
      </Link>
      <Link
        href="/dashboard#"
        className={cn(
          pathname === "/dashboar#"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all  hover:font-semibold"
        )}
      >
        <IconList className="h-4 w-4" />
        List Psyghologst
      </Link>
    </>
  );
}
