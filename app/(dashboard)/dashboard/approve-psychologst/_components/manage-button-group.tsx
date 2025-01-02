"use client";

import {
  approvePsychologst,
  rejectPsychologst,
} from "@/lib/actions/admin/manage-psychologst-status";
import { toast } from "sonner";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";
import ManageButton from "../../../_components/ui/manage-button";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import LoadingPage from "@/components/ui/Loading";

interface ManageButtonGroupProps {
  id: string;
  detail?: boolean;
  access_token: string;
}

export default function ManageButtonGroup({
  id,
  access_token,
  detail = false,
}: ManageButtonGroupProps) {
  const router = useRouter();
  const [pending, startTransaction] = useTransition();
  const handleApproveClick = (session: string, uuid: string) => {
    startTransaction(async () => {
      const { success } = await approvePsychologst(session, uuid);
      if (success === "success") {
        toast.custom((t) => (
          <ToastSuccess t={t} label="Psychologist successfully approved" />
        ));
      } else {
        toast.custom((t) => (
          <ToastFailed t={t} label="Psychologist failed to approve" />
        ));
      }
      router.push("/dashboard/approve-psychologst");
    });
  };

  // Fungsi untuk menangani klik penolakan
  const handleRejectClick = (session: string, uuid: string) => {
    startTransaction(async () => {
      const { success } = await rejectPsychologst(session, uuid);
      if (success === "success") {
        toast.custom((t) => (
          <ToastSuccess t={t} label="Psychologist successfully rejected" />
        ));
      } else {
        toast.custom((t) => (
          <ToastFailed t={t} label="Psychologist failed to reject" />
        ));
      }
      router.push("/dashboard/approve-psychologst");
    });
  };

  return (
    <>
      {pending && <LoadingPage />}
      <ManageButton
        uuid={id}
        label="Approve"
        title="Approve Confirmation"
        detail={detail}
        description="Are you sure you want to approve this psychologist?"
        session={access_token}
        onApprove={handleApproveClick}
      />
      <ManageButton
        uuid={id}
        label="Reject"
        title="Reject Confirmation"
        detail={detail}
        description="Are you sure you want to reject this psychologist?"
        session={access_token}
        onApprove={handleRejectClick}
        danger
      />
    </>
  );
}
