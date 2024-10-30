import Link from "next/link";
import TemplateAuth from "../_components/template-auth";
import dynamic from "next/dynamic";
const FormSignUpPsycholog = dynamic(
  () => import("./_components/form-signup-psycholog"),
  {
    ssr: false,
  }
);

export default function RegisterPsycholog() {
  return (
    <>
      <TemplateAuth image="/assets/images/signuppsi.png">
        <center className="text-netral-primary ">
          <h2 className="font-bold text-3xl">Sign Up</h2>
          <p>Enter details to create your psycholog account</p>
        </center>
        <div className="mt-10 w-full">
          <FormSignUpPsycholog />
          <center className="mt-2">
            <p className="text-netral-primary text-sm">
            Already have an account?
              <Link href={"/signin"}>
                <span className="text-[#2785FF] font-bold"> Sign in now</span>
              </Link>
            </p>
          </center>
        </div>
      </TemplateAuth>
    </>
  );
}
