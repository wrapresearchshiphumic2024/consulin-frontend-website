import Link from "next/link";
import TemplateAuth from "../_components/template-auth";
import FormForgotPassword from "./_components/form-forgot-password";

export default function forgotPassword() {
  return (
    <TemplateAuth image="/assets/images/amico2.png">
      <center className="text-netral-primary ">
        <h2 className="font-bold text-3xl">Forgot Password?</h2>
        <p>
          Enter your registered email address, and we’ll send you instructions
          to reset your password.
        </p>
      </center>
      <div className="mt-7 w-full">
        <FormForgotPassword />
        <center className="mt-5">
          <p className="text-netral-primary text-sm">
            Already have an account?
            <Link href={"/signin"}>
              <span className="text-[#2785FF] font-bold"> Sign in now</span>
            </Link>
          </p>
          <div className="flex justify-between items-center gap-1 px-11 my-2">
            <div className="h-[.5px]  w-9/12 bg-primary-custom_primary "></div>
            <p>or</p>
            <div className="h-[.5px] w-9/12 bg-primary-custom_primary "></div>
          </div>

          <p className="text-netral-primary text-sm">
            Sign up as
            <Link href={"/signup-psycholog"}>
              <span className="text-[#2785FF] font-bold"> Pyscholog </span>
            </Link>
            or
            <Link href={"/register"}>
              <span className="text-[#2785FF] font-bold"> Patient</span>
            </Link>
          </p>
        </center>
      </div>
    </TemplateAuth>
  );
}
