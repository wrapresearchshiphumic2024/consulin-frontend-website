"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormAiAnalyzerSchema } from "@/lib/helpers/validations/validation-ai-analyzer";
import { useTransition } from "react";
import { aiAnalyzer } from "@/lib/actions/patient/ai_analyzer";
import { toast } from "sonner";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";
import { Loader2 } from "lucide-react";
import LoadingPage from "@/components/ui/Loading";

export function FormAiAnalyzer({
  session,
  ai_analyzer,
}: {
  session: string;
  ai_analyzer: string | undefined;
}) {
  const [pending, startTransaction] = useTransition();
  const form = useForm<z.infer<typeof FormAiAnalyzerSchema>>({
    mode: "all",
    resolver: zodResolver(FormAiAnalyzerSchema),
    defaultValues: {
      ai_analyzer: ai_analyzer || "",
    },
  });

  function onSubmit(data: z.infer<typeof FormAiAnalyzerSchema>) {
    const formData = new FormData();
    formData.append("text", data.ai_analyzer);
    startTransaction(async () => {
      const { status, message } = await aiAnalyzer(session, formData);
      if (status === "success") {
        toast.custom((t) => <ToastSuccess t={t} label={message} />);
      } else {
        toast.custom((t) => <ToastFailed t={t} label={message} />);
      }
    });
  }

  return (
    <>
      {pending && <LoadingPage />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-6 h-full"
        >
          <FormField
            control={form.control}
            name="ai_analyzer"
            render={({ field }) => (
              <FormItem className="h-full">
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your current mental state..."
                    className=" w-full  resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={!form.formState.isValid || pending}
            className="mr-4 bg-netral-primary"
          >
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Analyze
          </Button>
        </form>
      </Form>
    </>
  );
}
