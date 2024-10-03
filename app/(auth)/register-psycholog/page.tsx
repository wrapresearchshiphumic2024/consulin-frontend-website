import Link from "next/link";
import TemplateAuth from "../_components/template-auth";
import FormRegisterPsycholog from "./_components/form-register-psycholog";

export default function RegisterPsycholog() {
  return (
    <>
      <TemplateAuth image="/assets/images/amico.png">
        <center className="text-netral-primary ">
          <h2 className="font-bold text-3xl">Sign Up</h2>
          <p>Enter details to create your psycholog account</p>
        </center>
        <div className="mt-10 w-full">
          <FormRegisterPsycholog />
          <div className="flex justify-center gap-1 mt-5">
            <p className="text-netral-primary ">Already have an account?</p>
            <Link href={"/login"}>
              <p className="text-[#2785FF] font-bold">Sign in now</p>
            </Link>
          </div>
        </div>
      </TemplateAuth>
    </>
  );
}
