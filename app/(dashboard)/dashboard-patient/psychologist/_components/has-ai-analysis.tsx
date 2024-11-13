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

export function PatientHasAIAnalysis() {
  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>AI Analysis Required</AlertDialogTitle>
          <AlertDialogDescription>
            You need to complete the AI analysis before proceeding. Please go to
            your Ai Analyzer and fill out the required information.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Link href="/dashboard-patient/ai-analyzer">
            <AlertDialogAction>Go to Ai Analyzer</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
