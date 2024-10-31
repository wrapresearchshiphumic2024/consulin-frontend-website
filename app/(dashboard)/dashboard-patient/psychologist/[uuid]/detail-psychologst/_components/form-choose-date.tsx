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
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import ScheduleComponentTime from "@/app/(dashboard)/_components/ui/schedule-component-time";
import { Schedule } from "@/types/psychologist/psychologist-type-data";

export default function FormChooseDate({ schedules }: { schedules: Schedule }) {
  const activeDays = schedules.days
    .filter((day) => day.status === "active")
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

  async function onSubmit(values: z.infer<typeof formChooseDateSchema>) {
    console.log(values);
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
                          disabled={(date) => {
                            const day = date.getDay() as
                              | 0
                              | 1
                              | 2
                              | 3
                              | 4
                              | 5
                              | 6;
                            const today = new Date();
                            const twoWeeksLater = new Date();
                            twoWeeksLater.setDate(today.getDate() + 14);
                            return (
                              !activeDays.includes(day) ||
                              date < today ||
                              date > twoWeeksLater
                            );
                          }}
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

          <Button type="submit" className=" bg-green-500 mr-3">
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
