"use client";
import IconList from "@/components/icons/icon-list";
import IconPsychology from "@/components/icons/icon-psychology";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMobile() {
  const pathname = usePathname();

  // Data sidebar items dengan komponen ikon langsung
  const sidebarItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      href: "/dashboard/approve-psychologist",
      label: "Approve Psychologist",
      icon: <IconPsychology className="h-5 w-5" color="#F5F5F7" />,
    },
    {
      href: "/dashboard/list-psychologist",
      label: "List Psychologist",
      icon: <IconList className="h-5 w-5" />,
    },
  ];

  return (
    <>
      {sidebarItems.map((item, index) => (
        <SheetClose asChild key={index}>
          <Link
            href={item.href}
            className={cn(
              pathname === item.href
                ? "bg-secondary-custom_secondary/[.08]"
                : "",
              "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:font-semibold transition-all"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        </SheetClose>
      ))}
    </>
  );
}
