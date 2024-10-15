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
const gender = [
  {
    name: "Male",
  },
  {
    name: "Female",
  },
];

export default function FormSignUp() {
  const form = useForm<z.infer<typeof formSignUpSchema>>({
    mode: "all",
    resolver: zodResolver(formSignUpSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      gender: "",
      phone_number: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    shouldUnregister: false,
  });

  async function onSubmit(values: z.infer<typeof formSignUpSchema>) {
    console.log(values);
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
                  name="first_name"
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
                  name="last_name"
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
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {gender.map((gender) => (
                            <SelectItem key={gender.name} value={gender.name}>
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
              <Button type="submit" className="w-full bg-primary-custom_primary">
                Sign Up
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
