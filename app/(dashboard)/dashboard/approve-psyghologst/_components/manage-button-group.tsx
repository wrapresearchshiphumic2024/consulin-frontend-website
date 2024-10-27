"use client";

import {
  approvePsychologst,
  rejectPsychologst,
} from "@/actions/admin/manage-psychologst-status";
import { toast } from "sonner";
import { ToastSuccess } from "@/components/ui/toast-custom";
import ManageButton from "./ui/manage-button";
import { useRouter } from "next/navigation";

interface ManageButtonGroupProps {
  id: string;
  access_token: string;
}

export default function ManageButtonGroup({
  id,
  access_token,
}: ManageButtonGroupProps) {
  const router = useRouter();

  const handleApproveClick = async (session: string, uuid: string) => {
    const { success } = await approvePsychologst(session, uuid);
    if (success === "success") {
      toast.custom((t) => (
        <ToastSuccess t={t} label="Psychologist successfully approved" />
      ));
    }
    router.push("/dashboard/approve-psyghologst");
  };

  // Fungsi untuk menangani klik penolakan
  const handleRejectClick = async (session: string, uuid: string) => {
    const { success } = await rejectPsychologst(session, uuid);
    if (success === "success") {
      toast.custom((t) => (
        <ToastSuccess t={t} label="Psychologist successfully rejected" />
      ));
    }
    router.push("/dashboard/approve-psyghologst");
  };

  return (
    <>
      <ManageButton
        uuid={id}
        label="Approve"
        title="Approve Confirmation"
        description="Are you sure you want to approve this psychologist?"
        session={access_token}
        onApprove={handleApproveClick}
      />
      <ManageButton
        uuid={id}
        label="Reject"
        title="Reject Confirmation"
        description="Are you sure you want to reject this psychologist?"
        session={access_token}
        onApprove={handleRejectClick}
        danger
      />
    </>
  );
}
