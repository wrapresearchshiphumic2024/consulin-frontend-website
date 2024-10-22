"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { formSignUpSchema } from "@/helpers/validations/validation-auth";
import { useTransition } from "react";
import { ArrowDown2 } from "iconsax-react";
import { register } from "@/actions/auth/register";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";

const gender = [
  {
    name: "Male",
    value: "male",
  },
  {
    name: "Female",
    value: "female",
  },
];

export default function FormSignUp() {
  const [pending, startTransaction] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSignUpSchema>>({
    mode: "all",
    resolver: zodResolver(formSignUpSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      gender: "",
      phone_number: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    shouldUnregister: false,
  });

  async function onSubmit(values: z.infer<typeof formSignUpSchema>) {
    const formData = new FormData();
    formData.append("firstname", values.firstname);
    formData.append("lastname", values.lastname);
    formData.append("gender", values.gender);
    formData.append("phone_number", values.phone_number);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("confirm_password", values.confirm_password);

    startTransaction(async () => {
      const { errors, success } = await register(formData);

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
          <div className="space-y-4 gap-3 w-full">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          {...field}
                          className="border-primary-custom_primary border-2 placeholder:text-primary-custom_primary-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Last Name"
                          {...field}
                          className="border-primary-custom_primary border-2 placeholder:text-primary-custom_primary-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-primary-custom_primary border-2 ">
                            <SelectValue
                              placeholder="Gender"
                              className="placeholder:text-primary-custom_primary"
                            />
                            <ArrowDown2 className="h-5 w-5" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {gender.map((gender) => (
                            <SelectItem key={gender.name} value={gender.value}>
                              {gender.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        type="number"
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
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput
                        placeholder="Confirm Password"
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
                Create Account
              </Button>
              <Link href="/">
                <Button
                  type="button"
                  className="w-full bg-white text-primary-custom_primary border-primary-custom_primary border-2 mt-4"
                >
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
