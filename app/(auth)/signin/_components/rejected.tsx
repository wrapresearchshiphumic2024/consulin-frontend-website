import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export function Rejected({
  open,
  setNotVerified,
}: {
  open: boolean;
  setNotVerified: (value: boolean) => void;
}) {
  return (
    <AlertDialog open={open} onOpenChange={setNotVerified}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Account Information</AlertDialogTitle>
          <AlertDialogDescription>
            Your registration process has been rejected
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Link href={"/signup-psycholog"}>
            <AlertDialogAction onClick={() => setNotVerified(false)}>
              Register again
            </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
