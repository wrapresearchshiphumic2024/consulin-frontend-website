"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { formChooseDateSchema } from "@/helpers/validations/validation-shedule";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import ScheduleComponentTime from "@/app/(dashboard)/_components/ui/schedule-component-time";
import { Schedule } from "@/types/psychologist/psychologist-type-data";
import { addAppointment } from "@/actions/patient/add_appointment";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";
import { UpcomingSchedule } from "@/types/patient/patient-type-data";

export default function FormChooseDate({
  session,
  patient_id,
  psychologist_id,
  schedules,
  upcoming_schedules,
}: {
  session: Session;
  patient_id: string;
  psychologist_id: string;
  schedules: Schedule;
  upcoming_schedules?: UpcomingSchedule[];
}) {
  const router = useRouter();
  const [pending, startTransaction] = useTransition();
  const activeDays = schedules.days

    .map((day) => {
      switch (day.day.toLowerCase()) {
        case "sunday":
          return 0;
        case "monday":
          return 1;
        case "tuesday":
          return 2;
        case "wednesday":
          return 3;
        case "thursday":
          return 4;
        case "friday":
          return 5;
        case "saturday":
          return 6;
        default:
          return -1;
      }
    })
    .filter((index) => index >= 0) as (0 | 1 | 2 | 3 | 4 | 5 | 6)[];
  const form = useForm<z.infer<typeof formChooseDateSchema>>({
    mode: "all",
    resolver: zodResolver(formChooseDateSchema),
    shouldUnregister: false,
  });
  const isDateDisabled = (date: Date) => {
    const day = date.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    const oneWeeksLater = new Date(today);
    oneWeeksLater.setDate(today.getDate() + 7);

    // Cek apakah tanggal yang diperiksa ada dalam upcoming_schedules
    // const upcomingSchedule = upcoming_schedules?.find((schedule) => {
    //   return schedule.date === checkDate.toISOString().split("T")[0]; // Format YYYY-MM-DD
    // });

    // Jika bukan hari aktif, di luar rentang, atau tidak ada jadwal terbooking, maka return true
    if (
      !activeDays.includes(day) ||
      checkDate < today ||
      checkDate > oneWeeksLater
    ) {
      return true; // Disable if it's not an active day or outside the range
    }
    return false;

    // // Jika tidak ada upcoming schedule untuk tanggal tersebut
    // if (!upcomingSchedule) {
    //   return false; // Tidak disable jika tidak ada jadwal
    // }

    // // Ambil waktu yang terbooking
    // const bookedTimes = upcomingSchedule.times;

    // // Ambil waktu dari schedules.days[0].times
    // const availableTimes = schedules.days[0].times;

    // // Cek tumpang tindih
    // const hasActiveBooking = bookedTimes.some(({ start, end }) => {
    //   return availableTimes.some(
    //     ({ start: availableStart, end: availableEnd }) => {
    //       return (
    //         (availableStart >= start && availableStart < end) || // Waktu mulai tumpang tindih
    //         (availableEnd > start && availableEnd <= end) || // Waktu akhir tumpang tindih
    //         (availableStart <= start && availableEnd >= end) // Waktu sepenuhnya mencakup waktu terbooking
    //       );
    //     }
    //   );
    // });

    // // Jika ada booking aktif, return true (disable), jika tidak ada booking aktif, return false
    // return hasActiveBooking; // Jika ada booking aktif, return true
  };

  async function onSubmit(values: z.infer<typeof formChooseDateSchema>) {
    const formData = new FormData();
    const dateStr = values.schedule_date;
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString("en-CA");
    formData.append("date", formattedDate);
    formData.append("start_time", values.schedule_time[0].start);
    formData.append("end_time", values.schedule_time[0].end);

    startTransaction(async () => {
      const response_channel = await fetch("/api/create-channel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patient_id, psychologist_id }),
      });
      const channel = await response_channel.json();
      console.log(channel);
      formData.append("channel_id", channel.channel_id);
      const response = await addAppointment(
        session?.user.access_token,
        psychologist_id,
        formData
      );
      if (response?.status == "success") {
        toast.custom((t) => <ToastSuccess label={"berhasil"} t={t} />);
        router.push("/dashboard-patient/");
      } else {
        toast.custom((t) => <ToastFailed label={response.message} t={t} />);
      }
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-primary-custom_primary "
        >
          <div>
            <h2 className="text-2xl font-semibold text-[#1E0342]">
              Pick a Date
            </h2>
            <FormField
              control={form.control}
              name="schedule_date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[280px] justify-start text-left font-normal mt-2 items-center flex gap-2",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className=" h-4 w-4 opacity-50" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 border-netral-primary"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={isDateDisabled}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E0342]">Time</h2>
            <FormField
              control={form.control}
              name="schedule_time"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ScheduleComponentTime
                      isSingleSelect
                      value={field.value}
                      onChange={field.onChange}
                      times={schedules.days[0].times}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={pending}
            className=" bg-green-500 mr-3"
          >
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Save
          </Button>
          <Button type="button" className=" bg-red-500">
            Cancel
          </Button>
        </form>
      </Form>
    </>
  );
}
