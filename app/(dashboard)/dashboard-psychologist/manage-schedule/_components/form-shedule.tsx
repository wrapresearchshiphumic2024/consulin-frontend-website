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

import { formScheduleSchema } from "@/helpers/validations/validation-shedule";
import ScheduleComponentDay from "@/app/(dashboard)/_components/ui/schedule-component-day";
import ScheduleComponentTime from "@/app/(dashboard)/_components/ui/schedule-component-time";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ToastSuccess } from "@/components/ui/toast-custom";
import { Schedule } from "@/types/psychologist/psychologist-type-data";

export default function FormSchedule({
  disabled = false,
  schedule,
}: {
  disabled?: boolean;
  schedule: Schedule;
}) {
  const router = useRouter();
  const schedule_day =
    schedule.days.map((day) => {
      return day.day.charAt(0).toUpperCase() + day.day.slice(1);
    }) || [];
  const schedule_time =
    schedule.days[0]?.times?.map((time) => ({
      start: time.start,
      end: time.end,
    })) || []; // Mengembalikan array kosong jika tidak ada

  const form = useForm<z.infer<typeof formScheduleSchema>>({
    mode: "all",
    resolver: zodResolver(formScheduleSchema),
    defaultValues: {
      schedule_day: schedule_day,
      schedule_time: schedule_time,
    },
    shouldUnregister: false,
  });

  async function onSubmit(values: z.infer<typeof formScheduleSchema>) {
    console.log(values);
    toast.custom((t) => (
      <ToastSuccess label={"Schedule successfully update"} t={t} />
    ));
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-primary-custom_primary mt-10"
        >
          <div>
            <FormField
              control={form.control}
              name="schedule_day"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ScheduleComponentDay
                      value={field.value}
                      onChange={field.onChange}
                      disabled={disabled}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="schedule_time"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ScheduleComponentTime
                      value={field.value}
                      onChange={field.onChange}
                      disabled={disabled}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {disabled ? (
            <Link
              href={"/dashboard-psychologist/manage-schedule/edit-schedule"}
            >
              <Button
                type="button"
                className=" bg-primary-custom_primary mr-3 mt-10"
              >
                Edit
              </Button>
            </Link>
          ) : (
            <>
              <Button type="submit" className=" bg-green-500 mr-3">
                Save
              </Button>
              <Button type="button" variant={"destructive"} className=" mr-3">
                Cancel
              </Button>
            </>
          )}
        </form>
      </Form>
    </>
  );
}
