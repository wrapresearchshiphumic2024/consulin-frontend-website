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
import { Button } from "@/components/ui/button";
export default function SidebarMobileBottom() {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="flex justify-start w-full">
            <Button 
              className="bg-[#27374D] flex items-center gap-2 text-white text-sm "
            >
              <IconSignOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </AlertDialogTrigger>
        
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Sign Out</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to exit this account?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Link href="/">
              <AlertDialogAction className="bg-red-500 text-white px-6 py-2 rounded-full">Sign Out</AlertDialogAction>
            </Link>
            <AlertDialogCancel className="bg-white text-black px-6 py-2 rounded-full">Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
