import { AlertDialog, AlertDialogContent } from "./alert-dialog";

export default function LoadingPage() {
  return (
    <AlertDialog open>
      <AlertDialogContent className="top-[50%] w-20 h-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary-custom_primary"></div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
