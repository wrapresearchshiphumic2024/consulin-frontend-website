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
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/actions/auth/login";
import { toast } from "sonner";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";

export default function FormSignIn() {
  const [pending, startTransaction] = useTransition();
  const router = useRouter();
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
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    startTransaction(async () => {
      const { errors, success } = await loginAction(formData);
      console.log("errors", errors);
      console.log("success", success);
      if (errors) {
        toast.custom((t) => <ToastFailed label={errors as string} t={t} />);
      } else {
        toast.custom((t) => (
          <ToastSuccess label="Account created successfully" t={t} />
        ));
        router.push("/signin");
      }
    });
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
