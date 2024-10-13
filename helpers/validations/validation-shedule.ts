import { z } from "zod";
export const formScheduleSchema = z
  .object({
    schedule_day: z
      .array(z.string())
      .nonempty({ message: "Please select at least one day" }),
    schedule_time: z
      .array(z.string())
      .nonempty({ message: "Please select at least one time" }),
  });
 