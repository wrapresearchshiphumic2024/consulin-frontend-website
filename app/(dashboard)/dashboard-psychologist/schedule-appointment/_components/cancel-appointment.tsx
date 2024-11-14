"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import LoadingPage from "@/components/ui/Loading";
import { cancelAppointment } from "@/actions/psychologist/manage-appointment";

const FormSchema = z.object({
  note: z.string().min(1, {
    message: "Cancelled reason is required",
  }),
});

export function CancelAppointment({
  session,
  uuid,
}: {
  session: string;
  uuid: string;
}) {
  const router = useRouter();
  const [pending, startTransaction] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "all",
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    formData.append("note", data.note);
    startTransaction(async () => {
      const { success } = await cancelAppointment(session, uuid, formData);
      if (success === "success") {
        toast.custom((t) => (
          <ToastSuccess t={t} label="Psychologist successfully approved" />
        ));
      } else {
        toast.custom((t) => (
          <ToastFailed t={t} label="Psychologist failed to approve" />
        ));
      }
      router.push("/dashboard/approve-psychologst");
    });
  }

  return (
    <>
      {pending && <LoadingPage />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Enter your cancellation reason here..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <AlertDialogFooter>
            <AlertDialogAction
              className=" text-white px-4 py-2 rounded-lg bg-green-500"
              type="submit"
              disabled={!form.formState.isValid}
            >
              Confirm
            </AlertDialogAction>
            <AlertDialogCancel className="bg-white text-black px-6 py-2 rounded-lg">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </form>
      </Form>
    </>
  );
}
