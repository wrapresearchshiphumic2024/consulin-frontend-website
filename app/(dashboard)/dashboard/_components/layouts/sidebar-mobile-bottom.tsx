import IconSignOut from "@/components/icons/icon-signout";
import Link from "next/link";
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

export default function SidebarMobileBottom() {
  return (
    <>
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

    </>
  );
}
