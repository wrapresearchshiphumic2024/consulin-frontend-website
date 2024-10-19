"use client";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDown2 } from "iconsax-react";
const gender = [
  {
    name: "Male",
  },
  {
    name: "Female",
  },
];
export default function StepOne() {
  const form = useFormContext();
  return (
    <>
      <div>
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
      <div>
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
                       <ArrowDown2 className="h-5 w-5"/>
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
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
    </>
  );
}
