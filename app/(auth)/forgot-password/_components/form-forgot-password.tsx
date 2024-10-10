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
import { Input } from "@/components/ui/input";

import { formForgotPasswordSchema } from "@/helpers/validations/validation-auth";

export default function FormForgotPassword() {
  const form = useForm<z.infer<typeof formForgotPasswordSchema>>({
    mode: "all",
    resolver: zodResolver(formForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    shouldUnregister: false,
  });

  async function onSubmit(values: z.infer<typeof formForgotPasswordSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-primary-custom_primary"
        >
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your registered email address"
                        {...field}
                        className="border-primary-custom_primary border-2 placeholder:text-primary-custom_primary-foreground"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-2">
              <Button
                type="submit"
                className="w-full bg-primary-custom_primary"
              >
                Send Reset Link
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
