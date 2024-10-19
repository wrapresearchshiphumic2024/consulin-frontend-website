"use client";
import IconChatroom from "@/components/icons/icon-chatroom";
import IconList from "@/components/icons/icon-list";
import IconPsychology from "@/components/icons/icon-psychology";
import { cn } from "@/lib/utils";
import { Calendar } from "iconsax-react";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function SidebarDesktopPsychologist() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/dashboard-psychologist"
        className={cn(
          pathname === "/dashboard-psychologist"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all hover:font-semibold"
        )}
      >
        <Home className="h-4 w-4" />
        Home
      </Link>
      <Link
        href="/dashboard-psychologist/Scheduled-Appointment"
        className={cn(
          pathname === "/dashboard-psychologist/Scheduled-Appointment"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all   hover:font-semibold"
        )}
      >
        <IconPsychology className="h-4 w-4" color="#F5F5F7" />
        Scheduled Appointment
      </Link>
      <Link
        href="/dashboard-psychologist/manage-schedule"
        className={cn(
          pathname === "/dashboard-psychologist/manage-schedule"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all  hover:font-semibold"
        )}
      >
        <Calendar size="32" className="h-4 w-4" color="#F5F5F7" />
        Manage Schedule
      </Link>
      <Link
        href="/dashboard-psychologist/appointment-history"
        className={cn(
          pathname === "/dashboard-psychologist/appointment-history"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all  hover:font-semibold"
        )}
      >
        <IconList className="h-4 w-4" />
        Appointment History
      </Link>
      <Link
        href="/dashboard-psychologist/chat-room"
        className={cn(
          pathname === "/dashboard-psychologist/chat-room"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all  hover:font-semibold"
        )}
      >
        <IconChatroom className="h-4 w-4" />
        Chatroom
      </Link>
    </>
  );
}
