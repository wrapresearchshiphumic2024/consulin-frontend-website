import Link from "next/link";
import TemplateAuth from "../_components/template-auth";
import FormLogin from "./_components/form-login";

export default function Login() {
  return (
    <TemplateAuth image="/assets/images/amico2.png">
      <center className="text-netral-primary ">
        <h2 className="font-bold text-3xl">Sign In</h2>
        <p>Enter details to create your psycholog account</p>
      </center>
      <div className="mt-10 w-full">
        <FormLogin />
        <div className="flex justify-center gap-1 mt-5">
          <p className="text-netral-primary ">Dont have an account?</p>
          <Link href={"/register"}>
            <p className="text-[#2785FF] font-bold">Create account</p>
          </Link>
        </div>
      </div>
    </TemplateAuth>
  );
}
