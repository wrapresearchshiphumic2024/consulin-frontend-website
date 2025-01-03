"use client";

import { approvePsychologst } from "@/lib/actions/admin/manage-psychologst-status";
import { toast } from "sonner";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import LoadingPage from "@/components/ui/Loading";
import ManageButton from "@/app/(dashboard)/_components/ui/manage-button";

interface ManageButtonGroupProps {
  id: string;
  access_token: string;
  status: string;
  detail?: boolean;
}

export default function ManageButtonGroup({
  id,
  access_token,
  status,
  detail = false,
}: ManageButtonGroupProps) {
  const router = useRouter();
  const [pending, startTransaction] = useTransition();
  const handleDoneClick = (session: string, uuid: string) => {
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

  return (
    <>
      {pending && <LoadingPage />}
      {detail ? (
        <>
          {status === "ongoing" && (
            <ManageButton
              uuid={id}
              label="Done"
              title="Confirmation of Consultation Session"
              description="Are you sure you want to complete this session?
Once the session is completed, you cannot change or cancel this action."
              session={access_token}
              onApprove={handleDoneClick}
              full={false}
            />
          )}
          <ManageButton
            uuid={id}
            label="Cancel"
            title="Cancel Session"
            description={`Are you sure you want to cancel this session?\nPlease provide the reason for cancellation below:`}
            session={access_token}
            danger
            full
          />
        </>
      ) : (
        <>
          {status === "ongoing" && (
            <ManageButton
              uuid={id}
              label="Done"
              title="Confirmation of Consultation Session"
              description="Are you sure you want to complete this session?
Once the session is completed, you cannot change or cancel this action."
              session={access_token}
              onApprove={handleDoneClick}
              full
            />
          )}
          <ManageButton
            uuid={id}
            label="Cancel"
            title="Cancel Session"
            description={`Are you sure you want to cancel this session?\nPlease provide the reason for cancellation below:`}
            session={access_token}
            danger
            full
          />
        </>
      )}
    </>
  );
}
