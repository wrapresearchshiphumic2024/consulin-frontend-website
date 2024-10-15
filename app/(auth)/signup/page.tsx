import Link from "next/link";
import FormSignUp from "./_components/form-signup";

import TemplateAuth from "../_components/template-auth";
export default function SignUp() {
  return (
    <>
      <TemplateAuth image="/assets/images/amico.png">
        <center className="text-netral-primary ">
          <h2 className="font-bold text-3xl">Sign Up</h2>
          <p>Enter details to create your psycholog account</p>
        </center>
        <div className="mt-10 w-full">
          <FormSignUp />
          <center className="mt-2">
            <p className="text-netral-primary text-sm">
              Are you a psychologist? Sign up as a Psychologist
              <Link href={"/signup"}>
                <span className="text-[#2785FF] font-bold"> Here</span>
              </Link>
            </p>
          </center>
        </div>
      </TemplateAuth>
    </>
  );
}
