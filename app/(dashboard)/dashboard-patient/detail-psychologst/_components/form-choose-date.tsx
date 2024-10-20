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

export default function FormChooseDate() {
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
                              "w-[280px] justify-start text-left font-normal mt-2",
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
                            const day = date.getDay();
                            const today = new Date();
                            const twoWeeksLater = new Date();
                            twoWeeksLater.setDate(today.getDate() + 14);

                            return (
                              (day !== 1 && day !== 2) ||
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
