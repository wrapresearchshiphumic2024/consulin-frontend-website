"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { DropzoneOptions } from "react-dropzone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/extension/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { formRegisterSchema } from "@/helpers/validations/validation-auth";
import { PasswordInput } from "@/components/ui/password-input";

import ButtonStep from "./button-step";
import FileUploadCustom from "@/components/ui/file-upload-custom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

interface page {
  number: number;
  status: boolean;
}

const language = [
  {
    name: "Indonesia",
  },
  {
    name: "English",
  },
];
const spesialization = [
  {
    name: "Clinical Psychology",
  },
  {
    name: "Educational Psychology",
  },
  {
    name: "Developmental Psychology",
  },
  {
    name: "General Psychology",
  },
];

const work_experience = [
  {
    name: "1 Years",
  },
  {
    name: "2 Years",
  },
  {
    name: "3 Years",
  },
  {
    name: "4 Years",
  },
];
const dropzone = {
  accept: {
    "image/*": [".jpg", ".jpeg", ".png"],
    "application/pdf": [".pdf"],
  },
  maxFiles: 1,
  maxSize: 4 * 1024 * 1024,
} satisfies DropzoneOptions;
const dropzone_serticate = {
  accept: {
    "image/*": [".jpg", ".jpeg", ".png"],
    "application/pdf": [".pdf"],
  },
  maxFiles: 5,
  maxSize: 4 * 1024 * 1024,
  multiple: true,
} satisfies DropzoneOptions;

export default function FormRegisterPsycholog() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAgree, setAgree] = useState(false);
  const [page, setPage] = useState<page[]>([
    {
      number: 0,
      status: false,
    },
    {
      number: 1,
      status: false,
    },
    {
      number: 2,
      status: false,
    },
  ]);
  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      confirm_password: "",
      degree: "",
      university: "",
      major: "",
      graduation_year: "",
      language: [],
      sertificate: [],
      profesional_identification_number: "",
      spesialization: [],
      work_experience: "",
      cv: [],
      practice_license: [],
    },
    shouldUnregister: false,
  });
  const validateCurrentPage = async (number: number) => {
    if (number === 0) {
      return await form.trigger([
        "first_name",
        "last_name",
        "email",
        "phone_number",
        "password",
        "confirm_password",
      ]);
    } else if (number === 1) {
      return await form.trigger([
        "degree",
        "university",
        "major",
        "graduation_year",
        "language",
      ]);
    } else if (number === 2) {
      return await form.trigger([
        "profesional_identification_number",
        "spesialization",
        "work_experience",
        "cv",
        "practice_license",
      ]);
    }
  };
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  async function onSubmit(values: z.infer<typeof formRegisterSchema>) {
    const isValid = await validateCurrentPage(2);
    if (!isValid) return;

    console.log(values);
  }
  async function onNextPage() {
    const isValid = await validateCurrentPage(currentPage);
    if (!isValid) {
      page[currentPage].status = false;
      setPage(page);
      return;
    }

    if (currentPage < 2) {
      page[currentPage].status = true;
      setPage(page);
      setCurrentPage(currentPage + 1);
    }
  }
  useEffect(() => {
    console.log(page);
  }, [page]);
  async function onClickPage(number: number) {
    if (number == 0) {
      if (page[number].status === true) {
        setCurrentPage(number);
      }
    } else {
      if (page[number - 1].status === true) {
        setCurrentPage(number);
      }
    }
  }

  return (
    <>
      <div className="absolute z-10 top-[-70px] left-0 right-0 flex justify-center items-center gap-2">
        <ButtonStep
          currentPage={currentPage}
          pageIndex={0}
          page={page}
          onClickPage={onClickPage}
          label="1"
        />
        <div className="bg-primary-custom_primary h-1 w-8"></div>
        <ButtonStep
          currentPage={currentPage}
          pageIndex={1}
          page={page}
          onClickPage={onClickPage}
          label="2"
        />
        <div className="bg-primary-custom_primary h-1  w-8"></div>
        <ButtonStep
          currentPage={currentPage}
          pageIndex={2}
          page={page}
          onClickPage={onClickPage}
          label="3"
        />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-primary-custom_primary"
        >
          <div className="grid grid-cols-2 gap-3 w-full">
            {currentPage === 0 && (
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
            )}
            {currentPage === 1 && (
              <>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="degree"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Degree"
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
                    name="university"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="University"
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
                    name="major"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Major"
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
                    name="graduation_year"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Graduation Year"
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
                    name="language"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <MultiSelector
                          onValuesChange={field.onChange}
                          values={field.value}
                        >
                          <MultiSelectorTrigger className="border-primary-custom_primary border-2 ">
                            <div className="flex justify-between items-center flex-1 ">
                              <MultiSelectorInput
                                placeholder="Languages Master"
                                className="placeholder:text-primary-custom_primary-foreground"
                              />
                            </div>
                          </MultiSelectorTrigger>
                          <MultiSelectorContent>
                            <MultiSelectorList>
                              {language.map((language) => (
                                <MultiSelectorItem
                                  key={language.name}
                                  value={language.name}
                                >
                                  <span>{language.name}</span>
                                </MultiSelectorItem>
                              ))}
                            </MultiSelectorList>
                          </MultiSelectorContent>
                        </MultiSelector>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="sertificate"
                    render={({ field }) => (
                      <FormItem>
                        <FileUploadCustom
                          value={field.value}
                          onValueChange={field.onChange}
                          dropzoneOptions={dropzone_serticate}
                          placeholder="Upload sertificate (optional)"
                          reSelect={false}
                        />

                        {field.value.length > 6 && (
                          <p className="text-red-500 text-sm">diisi</p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}
            {currentPage === 2 && (
              <>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="profesional_identification_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Professional Identification Number"
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
                    name="spesialization"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <MultiSelector
                          onValuesChange={field.onChange}
                          values={field.value}
                        >
                          <MultiSelectorTrigger className="border-primary-custom_primary border-2 ">
                            <div className="flex justify-between items-center flex-1 ">
                              <MultiSelectorInput
                                placeholder="Spesialization"
                                className="placeholder:text-primary-custom_primary-foreground"
                              />
                            </div>
                          </MultiSelectorTrigger>
                          <MultiSelectorContent>
                            <MultiSelectorList>
                              {spesialization.map((spesialization) => (
                                <MultiSelectorItem
                                  key={spesialization.name}
                                  value={spesialization.name}
                                >
                                  <span>{spesialization.name}</span>
                                </MultiSelectorItem>
                              ))}
                            </MultiSelectorList>
                          </MultiSelectorContent>
                        </MultiSelector>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="work_experience"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-primary-custom_primary border-2 ">
                              <SelectValue
                                placeholder="Work Experience"
                                className="placeholder:text-primary-custom_primary"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {work_experience.map((work_experience) => (
                              <SelectItem
                                key={work_experience.name}
                                value={work_experience.name}
                              >
                                {work_experience.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="cv"
                    render={({ field }) => (
                      <FormItem>
                        <FileUploadCustom
                          value={field.value}
                          onValueChange={field.onChange}
                          dropzoneOptions={dropzone}
                          placeholder="Upload CV"
                          reSelect={true}
                        />
                        {field.value.length < 1 && (
                          <p className="text-red-500 text-sm">CV is required</p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="practice_license"
                    render={({ field }) => (
                      <FormItem>
                        <FileUploadCustom
                          value={field.value}
                          onValueChange={field.onChange}
                          dropzoneOptions={dropzone}
                          placeholder="Upload Practice License"
                          reSelect={true}
                        />
                        {field.value.length < 1 && (
                          <p className="text-red-500 text-sm">
                            Practice License is required
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            <div className="col-span-2">
              {currentPage < 2 ? (
                <Button
                  className="w-full bg-primary-custom_primary"
                  onClick={onNextPage}
                >
                  Next
                </Button>
              ) : (
                // <Button
                //   type="submit"
                //   className="w-full bg-primary-custom_primary"
                // >
                //   Submit
                // </Button>
                <AlertDialog>
                  <AlertDialogTrigger
                    className="w-full"
                    disabled={
                      !form.formState.isValid ||
                      form.getValues("cv").length < 1 ||
                      form.getValues("practice_license").length < 1
                    }
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary-custom_primary"
                      disabled={
                        form.getValues("cv").length < 1 ||
                        form.getValues("practice_license").length < 1
                      }
                    >
                      Submit
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-center">
                        Terms Of Service
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-left">
                        <ScrollArea className="h-80 w-full ">
                          These Terms and Conditions govern the use of
                          psychology consultation services through the Consulin
                          platform. “Consulin” is a mental health platform that
                          provides consultation services between patients and
                          professional psychologists who are registered and have
                          a valid license to practice. All information provided
                          during registration, including work experience and
                          certifications, must be accurate and verifiable.
                          Consulin reserves the right to refuse or terminate the
                          membership of psychologists who provide false
                          information. Psychologists are required to provide
                          consultation services with high standards of
                          professionalism in accordance with applicable
                          psychological ethics and maintain the confidentiality
                          of patient information. They are not allowed to
                          provide medical diagnosis or treatment without valid
                          authorization. All consultation sessions must be
                          conducted according to an agreed schedule, whether
                          online or face-to-face, and psychologists must
                          maintain professional communication with patients.
                          Consulin is not liable for any losses arising from
                          consultations between psychologists and patients. In
                          the event of a dispute, Consulin will serve as a
                          mediator. Consulin also reserves the right to suspend
                          or terminate a psychologist's account if there is a
                          violation of these Terms and Conditions. Changes to
                          the Terms and Conditions may be made at any time, by
                          notification via email or the platform, and
                          psychologists who continue to use the platform are
                          deemed to have agreed to such changes. By registering,
                          psychologists agree to comply with Consulin's Privacy
                          Policy regarding the use and storage of patient
                          personal data. All data must be stored securely and
                          may not be shared with unauthorized third parties.
                          These Terms and Conditions are subject to the
                          applicable laws of Indonesia, and any disputes will be
                          resolved through appropriate legal channels.
                        </ScrollArea>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Checkbox
                            id="terms"
                            onCheckedChange={(checked) => {
                              setAgree(!!checked);
                            }}
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Accept terms and conditions
                          </label>
                        </div>
                        <div className="flex gap-2 items-center">
                          <AlertDialogAction type="submit" disabled={!isAgree}>
                            Agree
                          </AlertDialogAction>
                          <AlertDialogCancel className="m-0">
                            Cancel
                          </AlertDialogCancel>
                        </div>
                      </div>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
