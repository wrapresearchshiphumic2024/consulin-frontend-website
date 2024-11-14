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

export function NotVerified({
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
            Your account is currently in the verification process
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setNotVerified(false)}>
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
