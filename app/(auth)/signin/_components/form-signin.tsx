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
import { PasswordInput } from "@/components/ui/password-input";
import { formLoginSchema } from "@/helpers/validations/validation-auth";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function FormSignIn() {
  const form = useForm<z.infer<typeof formLoginSchema>>({
    mode: "all",
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    shouldUnregister: false,
  });

  async function onSubmit(values: z.infer<typeof formLoginSchema>) {
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
                        placeholder="Email"
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput
                        placeholder="Password"
                        {...field}
                        className="border-primary-custom_primary border-2 placeholder:text-primary-custom_primary-foreground"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 flex justify-between items-center flex-wrap text-sm text-netral-primary font-semibold">
              <div className="flex items-center gap-2 ">
                <Checkbox /> <p>Remember me</p>
              </div>
              <Link href="/forgot-password">
                <p>Forgot Password?</p>
              </Link>
            </div>
            <div></div>
            <div className="col-span-2">
              <Button
                type="submit"
                className="w-full bg-primary-custom_primary"
              >
                Sign In
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
