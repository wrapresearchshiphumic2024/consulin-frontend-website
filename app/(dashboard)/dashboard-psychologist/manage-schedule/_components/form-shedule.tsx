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

export default function FormSchedule() {
  const form = useForm<z.infer<typeof formScheduleSchema>>({
    mode: "all",
    resolver: zodResolver(formScheduleSchema),
    defaultValues: {
      schedule_day: [],
      schedule_time: [],
    },
    shouldUnregister: false,
  });

  async function onSubmit(values: z.infer<typeof formScheduleSchema>) {
    console.log(values);
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
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full bg-primary-custom_primary">
            Sign In
          </Button>
        </form>
      </Form>
    </>
  );
}
