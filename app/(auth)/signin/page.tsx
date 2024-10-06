import Link from "next/link";
import TemplateAuth from "../_components/template-auth";

import FormSignIn from "./_components/form-signin";

export default function Login() {
  return (
    <TemplateAuth image="/assets/images/amico2.png">
      <center className="text-netral-primary ">
        <h2 className="font-bold text-3xl">Sign In</h2>
        <p>Enter details to create your psycholog account</p>
      </center>
      <div className="mt-10 w-full">
        <FormSignIn />
        <center className="mt-5">
          <p className="text-netral-primary ">
            Create an account as
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
