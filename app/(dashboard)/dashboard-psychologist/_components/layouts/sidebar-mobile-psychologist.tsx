"use client";
import IconChatroom from "@/components/icons/icon-chatroom";
import IconList from "@/components/icons/icon-list";
import IconPsychology from "@/components/icons/icon-psychology";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Calendar } from "iconsax-react";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMobilePsychologist() {
  const pathname = usePathname();

  // Data sidebar items dengan komponen ikon langsung
  const sidebarItems = [
    {
      href: "/dashboard-psychologist",
      label: "Home",
      icon: <Home className="h-5 w-5" />,
    },
    {
      href: "/dashboard-psychologist/schedule-appointment",
      label: "Scheduled Appointment",
      icon: <IconPsychology className="h-4 w-4" color="#F5F5F7" />,
    },
    {
      href: "/dashboard-psychologist/manage-schedule",
      label: "Manage Schedule",
      icon: <Calendar size="32" className="h-4 w-4" color="#F5F5F7" />,
    },
    {
      href: "/dashboard-psychologist/appointment-history",
      label: "Appointment History",
      icon: <IconList className="h-4 w-4" />,
    },
    {
      href: "/dashboard-psychologist/chat-room",
      label: "Chatroom",
      icon: <IconChatroom className="h-4 w-4" />,
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
