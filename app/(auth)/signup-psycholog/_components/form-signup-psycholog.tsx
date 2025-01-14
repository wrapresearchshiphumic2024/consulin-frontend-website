"use client";
import { isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { useEffect, useState, useTransition } from "react";

import { formRegisterSchema } from "@/lib/helpers/validations/validation-auth";

import { Form } from "@/components/ui/form";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import StepNavigation from "./step-navigation";
import TermsOfServiceDialog from "./ui/term-of-service-dialog";
import { registerPsycholog } from "@/lib/actions/auth/register";
import { toast } from "sonner";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";
import { useRouter } from "next/navigation";

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
    fields: [
      "degree",
      "university",
      "major",
      "graduation_year",
      "language",
      "certificate",
    ],
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
  const [pending, startTransaction] = useTransition();
  const router = useRouter();
  const savedData = localStorage.getItem("registerData");
  const parsedData = savedData ? JSON.parse(savedData) : {};
  const [page, setPage] = useState<page[]>([
    { number: 0, status: false },
    { number: 1, status: false },
    { number: 2, status: false },
  ]);

  const form = useForm<Inputs>({
    mode: "all",
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      firstname: parsedData.firstname || "",
      lastname: parsedData.lastname || "",
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
      certificate: parsedData.certificate || [],
      profesional_identification_number:
        parsedData.profesional_identification_number || "",
      spesialization: parsedData.spesialization || [],
      work_experience: parsedData.work_experience || "",
      cv: parsedData.cv || [],
      practice_license: parsedData.practice_license || [],
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem("registerData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        form.setValue(key as keyof Inputs, parsedData[key]);
      });
    }
  }, [form.setValue]);

  useEffect(() => {
    const formData = form.watch();
    const { cv, practice_license, certificate, ...filteredData } = formData;

    if (Object.keys(filteredData).length > 0) {
      localStorage.setItem("registerData", JSON.stringify(filteredData));
    }
  }, [form.watch()]);

  type FieldName = keyof Inputs;

  async function onSubmit(values: Inputs) {
    const isValid = await isValidFormPage();
    console.log("sebelum form data", values);
    if (!isValid) {
      return;
    }

    const formData = new FormData();

    // Menambahkan field ke FormData
    formData.append("firstname", values.firstname);
    formData.append("lastname", values.lastname);
    formData.append("gender", values.gender);
    formData.append("email", values.email);
    formData.append("phone_number", values.phone_number);
    formData.append("password", values.password);
    formData.append("degree", values.degree);
    formData.append("graduation_year", values.graduation_year);
    formData.append("major", values.major);
    formData.append("university", values.university);
    formData.append(
      "profesional_identification_number",
      values.profesional_identification_number
    );
    formData.append("work_experience", values.work_experience);

    values.language.forEach((lang) => formData.append("language[]", lang));
    values.spesialization.forEach((spec) =>
      formData.append("specialization[]", spec)
    );

    // Menambahkan file ke FormData
    if (Array.isArray(values.cv)) {
      values.cv.forEach((file) => formData.append("cv[]", file));
    }
    if (Array.isArray(values.practice_license)) {
      values.practice_license.forEach((file) =>
        formData.append("practice_license[]", file)
      );
    }
    if (Array.isArray(values.certificate)) {
      values.certificate.forEach((file) =>
        formData.append("certification[]", file)
      );
    }

    startTransaction(async () => {
      const { errors } = await registerPsycholog(formData);

      if (errors) {
        toast.custom((t) => <ToastFailed label={errors as string} t={t} />);
      } else {
        localStorage.removeItem("registerData");
        toast.custom((t) => (
          <ToastSuccess label="Account created successfully" t={t} />
        ));
        form.reset();
        localStorage.removeItem("registerData");
        router.push("/dashboard");
      }
    });
  }

  async function isValidFormPage() {
    const fields = steps[currentPage]?.fields;
    const isValid = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    return isValid;
  }

  async function onNextPage() {
    const isValid = await isValidFormPage();
    if (!isValid) {
      page[currentPage].status = false;
      setPage(page);
      return;
    }

    page[currentPage].status = true;
    setPage(page);
    setCurrentPage((step) => step + 1);
    return;
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
                  type="button"
                  onClick={onNextPage}
                  disabled={!isValidFormPage}
                >
                  Next
                </Button>
              ) : (
                <TermsOfServiceDialog onSubmit={onSubmit} pending={pending} />
              )}
              {currentPage > 0 && (
                <Button
                  onClick={previousPage}
                  className="w-full bg-secondary-custom_secondary mt-2 border-primary-custom_primary text-primary-custom_primary border-2 hover:text-secondary-custom_secondary"
                  type="button"
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
