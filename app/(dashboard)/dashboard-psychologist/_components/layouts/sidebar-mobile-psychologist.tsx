"use client";
import IconChatroom from "@/components/icons/icon-chatroom";
import IconList from "@/components/icons/icon-list";
import IconPsychology from "@/components/icons/icon-psychology";
import { cn } from "@/lib/utils"; // Pastikan Anda memiliki utilitas cn
import { Calendar } from "iconsax-react";
import { Home, Package, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMobilePsychologist() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/dashboard-psychologist"
        className={cn(
          pathname === "/dashboard-psychologist"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:font-semibold transition-all "
        )}
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        href="/dashboard-psychologist/scheduled-appointment"
        className={cn(
          pathname === "/dashboard-psychologist/scheduled-appointment"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:font-semibold transition-all"
        )}
      >
        <IconPsychology className="h-4 w-4" color="#F5F5F7" />
        Scheduled Appointment
      </Link>
      <Link
        href="/dashboard-psychologist/manage-schedule"
        className={cn(
          pathname === "/dashboard-psychologist/manage-schedule",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary  hover:font-semibold  transition-all"
        )}
      >
        <Calendar size="32" className="h-4 w-4" color="#F5F5F7" />
        Manage Schedule
      </Link>
      <Link
        href="/dashboard-psychologist/appointment-history"
        className={cn(
          pathname === "/dashboard-psychologist/appointment-history",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary  hover:font-semibold  transition-all"
        )}
      >
        <IconList className="h-4 w-4" />
        Appointment History
      </Link>
      <Link
        href="/dashboard-psychologist/chat-room"
        className={cn(
          pathname === "/dashboard-psychologist/chat-room",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary  hover:font-semibold  transition-all"
        )}
      >
        <IconChatroom className="h-4 w-4" />
        Chatroom
      </Link>
    </>
  );
}
