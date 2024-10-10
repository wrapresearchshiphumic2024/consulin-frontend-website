"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button"; // Sesuaikan dengan path Button kamu
import { ScrollArea } from "@/components/ui/scroll-area"; // Sesuaikan dengan path ScrollArea kamu
import { Checkbox } from "@/components/ui/checkbox"; // Sesuaikan dengan path Checkbox kamu
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useFormContext } from "react-hook-form";
interface TermsOfServiceDialogProps {
  onSubmit: (values: any) => void;
}
export default function TermsOfServiceDialog({
  onSubmit,
}: TermsOfServiceDialogProps) {
  const [isAgree, setAgree] = useState(false);
  const form = useFormContext();
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="w-full"
        disabled={!form.formState.isValid}
        type="button"
      >
        <Button
          className="w-full bg-primary-custom_primary"
          disabled={!form.formState.isValid}
          type="button"
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
            <ScrollArea className="h-80 w-full">
              These Terms and Conditions govern the use of psychology
              consultation services through the Consulin platform. “Consulin” is
              a mental health platform that provides consultation services
              between patients and professional psychologists who are registered
              and have a valid license to practice. All information provided
              during registration, including work experience and certifications,
              must be accurate and verifiable. Consulin reserves the right to
              refuse or terminate the membership of psychologists who provide
              false information. <br /> <br />
              Psychologists are required to provide consultation services with
              high standards of professionalism in accordance with applicable
              psychological ethics and maintain the confidentiality of patient
              information. They are not allowed to provide medical diagnosis or
              treatment without valid authorization. All consultation sessions
              must be conducted according to an agreed schedule, whether online
              or face-to-face, and psychologists must maintain professional
              communication with patients.
              <br /> <br />
              Consulin is not liable for any losses arising from consultations
              between psychologists and patients. In the event of a dispute,
              Consulin will serve as a mediator. Consulin also reserves the
              right to suspend or terminate a psychologist's account if there is
              a violation of these Terms and Conditions. Changes to the Terms
              and Conditions may be made at any time, by notification via email
              or the platform, and psychologists who continue to use the
              platform are deemed to have agreed to such changes. <br /> <br />
              By registering, psychologists agree to comply with Consulin's
              Privacy Policy regarding the use and storage of patient personal
              data. All data must be stored securely and may not be shared with
              unauthorized third parties. These Terms and Conditions are subject
              to the applicable laws of Indonesia, and any disputes will be
              resolved through appropriate legal channels.
            </ScrollArea>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="terms"
                onCheckedChange={(checked) => setAgree(!!checked)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <Button
                type="submit"
                disabled={!isAgree}
                onClick={() => form.handleSubmit(onSubmit)()}
              >
                Agree
              </Button>

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
  );
}
