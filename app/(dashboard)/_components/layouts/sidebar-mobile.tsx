"use client";
import { cn } from "@/lib/utils"; // Pastikan Anda memiliki utilitas cn
import { Home, Package, ShoppingCart, Users, LineChart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMobile() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/dashboard"
        className={cn(
          pathname === "/dashboard"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:font-semibold transition-all "
        )}
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        href="/dashboard/approve-psyghologst"
        className={cn(
          pathname === "/dashboard/approve-psyghologst"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:font-semibold transition-all"
        )}
      >
        <ShoppingCart className="h-5 w-5" />
        Approve Psyghologst
      </Link>
      <Link
        href="#"
        className={cn(
          pathname === "/products" ? "bg-secondary-custom_secondary/[.08]" : "",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary  hover:font-semibold  transition-all"
        )}
      >
        <Package className="h-5 w-5" />
        Products
      </Link>
    </>
  );
}
