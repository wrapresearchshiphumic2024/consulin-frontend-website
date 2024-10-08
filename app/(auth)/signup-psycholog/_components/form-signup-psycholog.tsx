"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";

import { formRegisterSchema } from "@/helpers/validations/validation-auth";

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
import { Form } from "@/components/ui/form";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import StepNavigation from "./step-navigation";

interface page {
  number: number;
  status: boolean;
}
const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: [
      "first_name",
      "last_name",
      "gender",
      "email",
      "phone_number",
      "password",
      "confirm_password",
    ],
  },
  {
    id: "Step 2",
    name: "Education Information",
    fields: ["degree", "university", "major", "graduation_year", "language"],
  },
  {
    id: "Step 3",
    name: "Professional Information",
    fields: [
      "profesional_identification_number",
      "spesialization",
      "work_experience",
      "cv",
      "practice_license",
    ],
  },
];
const buttonSteps = [
  { label: "1", page: 0 },
  { label: "2", page: 1 },
  { label: "3", page: 2 },
];

type Inputs = z.infer<typeof formRegisterSchema>;

export default function FormSignUpPsycholog() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAgree, setAgree] = useState(false);
  const savedData = localStorage.getItem("registerData");
  const parsedData = savedData ? JSON.parse(savedData) : {};
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

  const form = useForm<Inputs>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      first_name: parsedData.first_name || "",
      last_name: parsedData.last_name || "",
      gender: parsedData.gender || "",
      email: parsedData.email || "",
      phone_number: parsedData.phone_number || "",
      password: parsedData.password || "",
      confirm_password: parsedData.confirm_password || "",
      degree: parsedData.degree || "",
      university: parsedData.university || "",
      major: parsedData.major || "",
      graduation_year: parsedData.graduation_year || "",
      language: parsedData.language || [],
      sertificate: parsedData.sertificate || [],
      profesional_identification_number:
        parsedData.profesional_identification_number || "",
      spesialization: parsedData.spesialization || [],
      work_experience: parsedData.work_experience || "",
      cv: parsedData.cv || [],
      practice_license: parsedData.practice_license || [],
    },
  });

  // useEffect(() => {
  //   const savedData = localStorage.getItem("registerData");
  //   if (savedData) {
  //     const parsedData = JSON.parse(savedData);
  //     Object.keys(parsedData).forEach((key) => {
  //       form.setValue(key as keyof Inputs, parsedData[key]);
  //     });
  //   }
  // }, [form.setValue]);

  useEffect(() => {
    const formData = form.watch();
    const { cv, practice_license, sertificate, ...filteredData } = formData;

    if (Object.keys(filteredData).length > 0) {
      localStorage.setItem("registerData", JSON.stringify(filteredData));
    }
  }, [form.watch()]);
  type FieldName = keyof Inputs;
  async function onSubmit(values: Inputs) {
    const fields = steps[currentPage]?.fields;
    const isValid = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    if (!isValid) return;
    localStorage.removeItem("registerData");

    // form.reset();
    // setCurrentPage(0);
    console.log(values);
  }
  async function onNextPage(e: React.MouseEvent<HTMLButtonElement>) {
    const fields = steps[currentPage]?.fields;
    const isValid = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!isValid) {
      page[currentPage].status = false;
      setPage(page);
      return;
    }

    if (currentPage < steps.length - 1) {
      if (currentPage === steps.length - 2) {
        await form.handleSubmit(onSubmit)();
      }
      page[currentPage].status = true;
      setPage(page);
      setCurrentPage((step) => step + 1);
      return;
    }
  }
  function previousPage() {
    setCurrentPage((step) => step - 1);
  }

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
      <StepNavigation
        buttonSteps={buttonSteps}
        currentPage={currentPage}
        page={page}
        onClickPage={onClickPage}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-primary-custom_primary"
        >
          <div className="grid grid-cols-2 gap-3 w-full">
            {currentPage === 0 && <StepOne />}
            {currentPage === 1 && <StepTwo />}
            {currentPage === 2 && <StepThree />}

            <div className="col-span-2">
              {currentPage < 2 ? (
                <Button
                  className="w-full bg-primary-custom_primary"
                  onClick={onNextPage}
                >
                  Next
                </Button>
              ) : (
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
                          information. <br /> <br />
                          Psychologists are required to provide consultation
                          services with high standards of professionalism in
                          accordance with applicable psychological ethics and
                          maintain the confidentiality of patient information.
                          They are not allowed to provide medical diagnosis or
                          treatment without valid authorization. All
                          consultation sessions must be conducted according to
                          an agreed schedule, whether online or face-to-face,
                          and psychologists must maintain professional
                          communication with patients.
                          <br /> <br />
                          Consulin is not liable for any losses arising from
                          consultations between psychologists and patients. In
                          the event of a dispute, Consulin will serve as a
                          mediator. Consulin also reserves the right to suspend
                          or terminate a psychologist's account if there is a
                          violation of these Terms and Conditions. Changes to
                          the Terms and Conditions may be made at any time, by
                          notification via email or the platform, and
                          psychologists who continue to use the platform are
                          deemed to have agreed to such changes. <br /> <br />
                          By registering, psychologists agree to comply with
                          Consulin's Privacy Policy regarding the use and
                          storage of patient personal data. All data must be
                          stored securely and may not be shared with
                          unauthorized third parties. These Terms and Conditions
                          are subject to the applicable laws of Indonesia, and
                          any disputes will be resolved through appropriate
                          legal channels.
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
                          <AlertDialogCancel
                            className="m-0"
                            onClick={() => setAgree(false)}
                          >
                            Cancel
                          </AlertDialogCancel>
                        </div>
                      </div>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              {currentPage > 0 && (
                <Button
                  onClick={previousPage}
                  className="w-full bg-secondary-custom_secondary mt-2 border-primary-custom_primary text-primary-custom_primary border-2 hover:text-secondary-custom_secondary"
                >
                  Back
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
