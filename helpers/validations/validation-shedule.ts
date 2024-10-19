import { z } from "zod";
export const formScheduleSchema = z
  .object({
    schedule_day: z
      .array(z.string())
      .nonempty({ message: "Please select at least one day" }),
    schedule_time: z
      .array(z.object({
        start: z.string(),
        end: z.string(),
      }))
      .nonempty({ message: "Please select at least one time" }),
  });

  export const formChooseDateSchema = z
  .object({
    schedule_date: z
      .array(z.string())
      .nonempty({ message: "Please select at least one date" }),

  });
 