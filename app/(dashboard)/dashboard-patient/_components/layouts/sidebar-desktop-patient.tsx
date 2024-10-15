"use client";
import IconChatroom from "@/components/icons/icon-chatroom";
import IconList from "@/components/icons/icon-list";
import IconPsychology from "@/components/icons/icon-psychology";
import { cn } from "@/lib/utils";
import { Calendar } from "iconsax-react";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarDesktopPatient() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/dashboard-patient"
        className={cn(
          pathname === "/dashboard-patient"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all hover:font-semibold"
        )}
      >
        <Home className="h-4 w-4" />
        Home
      </Link>
      <Link
        href="/dashboard-patient/scheduled-appointment"
        className={cn(
          pathname === "/dashboard-patient/scheduled-appointment"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all   hover:font-semibold"
        )}
      >
        <IconPsychology className="h-4 w-4" color="#F5F5F7" />
        Psychologist
      </Link>
      <Link
        href="/dashboard-patient/ai-analyzer"
        className={cn(
          pathname === "/dashboard-patient/ai-analyzer"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "flex items-center gap-3 rounded-lg px-3 py-2   text-secondary-custom_secondary  transition-all  hover:font-semibold"
        )}
      >
        <Calendar size="32" className="h-4 w-4" color="#F5F5F7" />
        AI Analizer
      </Link>

      <Link
        href="/dashboard-patient/chat-room"
        className={cn(
          pathname === "/dashboard-patient/chat-room"
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
