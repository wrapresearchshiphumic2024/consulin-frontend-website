"use client";
import IconSignOut from "@/components/icons/icon-signout";
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
import { logout } from "@/lib/actions/auth/logout";
import { toast } from "sonner";
import { ToastSuccess } from "@/components/ui/toast-custom";
export default function SignOutMobile() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:font-semibold transition-all ">
        <IconSignOut className="h-4 w-4" />
        Sign Out
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Sign Out</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to exit this account?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2">
          <form
            action={async () => {
              await logout();
              toast.custom((t) => (
                <ToastSuccess label="Sign out successfully" t={t} />
              ));
            }}
          >
            <AlertDialogAction
              className="bg-red-500 text-white px-6 py-2  w-full"
              type="submit"
            >
              Sign Out
            </AlertDialogAction>
          </form>

          <AlertDialogCancel className="bg-white text-black px-6 py-2 ">
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
