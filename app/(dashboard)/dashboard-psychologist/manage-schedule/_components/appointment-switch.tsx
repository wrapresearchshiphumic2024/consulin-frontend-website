"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  closeAppointment,
  openAppointment,
} from "@/lib/actions/psychologist/manage-schedule";
import { toast } from "sonner";
import { ToastSuccess } from "@/components/ui/toast-custom";

export default function AppointmentSwitch({
  session,
  appointmetStatus,
  empty,
}: {
  session: string;
  appointmetStatus: boolean;
  empty: boolean;
}) {
  const [isChecked, setChecked] = useState(appointmetStatus);

  const handleOnChange = async () => {
    if (isChecked) {
      setChecked(false);
      const { success } = await closeAppointment(session);
      if (success === "success") {
        toast.custom((t) => <ToastSuccess label={"Appointment close"} t={t} />);
      }
    } else {
      setChecked(true);
      const { success } = await openAppointment(session);
      if (success === "success") {
        toast.custom((t) => <ToastSuccess label={"Appointment open"} t={t} />);
      }
    }
  };
  return (
    <>
      {!empty ? (
        <div className="flex items-center my-3 justify-end ">
          <div className="flex items-center bg-secondary-custom_secondary rounded-full p-3 gap-3 ">
            <Label htmlFor="appointment">Open for Appointments</Label>
            <Switch
              id="appointment"
              checked={isChecked}
              onCheckedChange={handleOnChange}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
