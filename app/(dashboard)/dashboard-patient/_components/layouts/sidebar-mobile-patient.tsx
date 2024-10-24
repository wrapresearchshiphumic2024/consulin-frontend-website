"use client";
import IconChatroom from "@/components/icons/icon-chatroom";

import IconPsychology from "@/components/icons/icon-psychology";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Calendar } from "iconsax-react";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMobilePatient() {
  const pathname = usePathname();

  // Data sidebar items dengan komponen ikon langsung
  const sidebarItems = [
    {
      href: "/dashboard-patient",
      label: "Home",
      icon: <Home className="h-5 w-5" />,
    },
    {
      href: "/dashboard-patient/psychologist",
      label: "Psychologist",
      icon: <IconPsychology className="h-4 w-4" color="#F5F5F7" />,
    },
    {
      href: "/dashboard-patient/ai-analyzer",
      label: "AI Analyzer",
      icon: <Calendar size="32" className="h-4 w-4" color="#F5F5F7" />,
    },
    {
      href: "/dashboard-patient/chat-room",
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
