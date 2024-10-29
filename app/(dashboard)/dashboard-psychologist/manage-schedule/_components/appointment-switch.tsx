"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  closeAppointment,
  openAppointment,
} from "@/actions/psychologist/manage-schedule";
import { toast } from "sonner";
import { ToastSuccess } from "@/components/ui/toast-custom";

export default function AppointmentSwitch({
  session,
  appointmetStatus,
}: {
  session: string;
  appointmetStatus: boolean;
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
      <Label htmlFor="appointment">Open for Appointments</Label>
      <Switch
        id="appointment"
        checked={isChecked}
        onCheckedChange={handleOnChange}
      />
    </>
  );
}
