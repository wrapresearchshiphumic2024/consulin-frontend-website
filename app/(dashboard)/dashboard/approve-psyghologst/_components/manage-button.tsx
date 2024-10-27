"use client";
import { Button } from "@/components/ui/button";
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
import {
  approvePsychologst,
  rejectPsychologst,
} from "@/actions/admin/manage-psychologst-status";
import { toast } from "sonner";
import { ToastSuccess } from "@/components/ui/toast-custom";

// 1. Buat tipe untuk props
interface ManageButtonProps {
  session: string;
  uuid: string;
}

export default function ManageButton({ session, uuid }: ManageButtonProps) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Accept
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#27374D] font-semibold">
              Approve Confirmation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#27374D]">
              Are you sure you want to approve this psychologist?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="bg-green-500 text-white px-6 py-2 rounded-lg"
              type="button"
              onClick={async () => {
                const { success } = await approvePsychologst(session, uuid);
                if (success == "success") {
                  toast.custom((t) => (
                    <ToastSuccess
                      t={t}
                      label="Psychologst successfully approved"
                    />
                  ));
                }
              }}
            >
              Confirm
            </AlertDialogAction>
            <AlertDialogCancel className="bg-white text-black px-6 py-2 rounded-lg">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Reject
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#27374D] font-semibold">
              Reject Confirmation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#27374D]">
              Are you sure you want to reject this psychologist?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="bg-red-500 text-white px-6 py-2 rounded-lg"
              type="button"
              onClick={async () => {
                const { success } = await rejectPsychologst(session, uuid);
                if (success == "success") {
                  toast.custom((t) => (
                    <ToastSuccess
                      t={t}
                      label="Psychologst successfully rejected"
                    />
                  ));
                }
              }}
            >
              Confirm
            </AlertDialogAction>
            <AlertDialogCancel className="bg-white text-black px-6 py-2 rounded-lg">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Link href={`/dashboard/approve-psyghologst/${uuid}/detail-approve`}>
        <Button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
          Detail
        </Button>
      </Link>
    </>
  );
}
