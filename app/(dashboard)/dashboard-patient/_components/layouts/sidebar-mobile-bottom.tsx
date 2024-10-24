"use client";
import SignOut from "@/app/(dashboard)/_components/ui/signout";
import IconSetting from "@/components/icons/icon-setting";

import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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

<<<<<<< HEAD
      <AlertDialog>
      <AlertDialogTrigger className="flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:text-foreground mx-[-0.65rem]">
        <IconSignOut className="h-4 w-4" />
        Sign Out
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-xs max-w-md"> {/* Set maximum width */}
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg md:text-xl">Confirm Sign Out</AlertDialogTitle>
          <AlertDialogDescription className="text-sm md:text-base">
            Are you sure you want to exit this account?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col sm:flex-row sm:space-x-4">
          <Link href="/">
            <AlertDialogAction className="bg-red-500 text-white px-6 py-2 rounded-full w-full sm:w-auto mb-2 sm:mb-0">
              Sign Out
            </AlertDialogAction>
          </Link>
          <AlertDialogCancel className="bg-white text-black px-6 py-2 rounded-full w-full sm:w-auto">
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
=======
      <SignOut />
>>>>>>> 407d4264fad6f71c3cdb60fe41f93ff98c2829f0
    </>
  );
}
