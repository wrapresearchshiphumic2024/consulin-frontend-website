"use client";
import IconChatroom from "@/components/icons/icon-chatroom";
import IconList from "@/components/icons/icon-list";
import IconPsychology from "@/components/icons/icon-psychology";
import { cn } from "@/lib/utils"; // Pastikan Anda memiliki utilitas cn
import { Calendar } from "iconsax-react";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMobilePatient() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/dashboard-patient"
        className={cn(
          pathname === "/dashboard-patient"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:font-semibold transition-all "
        )}
      >
        <Home className="h-5 w-5" />
        Home
      </Link>
      <Link
        href="/dashboard-patient/scheduled-appointment"
        className={cn(
          pathname === "/dashboard-patient/scheduled-appointment"
            ? "bg-secondary-custom_secondary/[.08]"
            : "",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:font-semibold transition-all"
        )}
      >
        <IconPsychology className="h-4 w-4" color="#F5F5F7" />
        Psychologist
      </Link>
      <Link
        href="/dashboard-patient/manage-schedule"
        className={cn(
          pathname === "/dashboard-patient/manage-schedule",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary  hover:font-semibold  transition-all"
        )}
      >
        <Calendar size="32" className="h-4 w-4" color="#F5F5F7" />
        AI Analizer
      </Link>

      <Link
        href="/dashboard-patient/chat-room"
        className={cn(
          pathname === "/dashboard-patient/chat-room",
          "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary  hover:font-semibold  transition-all"
        )}
      >
        <IconChatroom className="h-4 w-4" />
        Chatroom
      </Link>
    </>
  );
}
