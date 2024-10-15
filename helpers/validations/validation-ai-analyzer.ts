import { z } from "zod";
export const FormAiAnalyzerSchema = z.object({
    ai_analyzer: z
      .string()
      .min(10, {
        message: "Text must be at least 10 characters.",
      })
 
  });
  