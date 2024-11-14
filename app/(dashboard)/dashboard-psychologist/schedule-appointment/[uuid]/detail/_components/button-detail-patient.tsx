"use client";
import { toast } from "sonner";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";
import { Button } from "@/components/ui/button";
export default function ButtonDetailPatient() {
  return (
    <>
      <Button
        onClick={() =>
          toast.custom((t) => (
            <ToastSuccess label="Schedule Successfully created" t={t} />
          ))
        }
        className="bg-green-500 text-white py-3 rounded-lg w-full"
      >
        Done
      </Button>

      <Button
        onClick={() =>
          toast.custom((t) => <ToastFailed label="Session Cancelled" t={t} />)
        }
        className="bg-red-500 text-white py-3 rounded-lg w-full"
      >
        Reject
      </Button>
    </>
  );
}
