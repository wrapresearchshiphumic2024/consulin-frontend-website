import Link from "next/link";
import FormSignUp from "./_components/form-signup";
import Image from "next/image";
export default function SignUp() {
  return (
    <>
      <div className="relative flex lg:flex-row flex-col-reverse shadow-2xl drop-shadow-xl p-4 rounded-3xl bg-secondary-custom_secondary w-[900px] mx-auto">
        <div className="hidden flex-1 bg-gradient-to-r from-[#EBEBEB] rounded-3xl xl:flex items-center justify-center p-5 z-30 ">
          <div className="overflow-hidden w-[350px]">
            <Image
              src="/assets/images/amico.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              alt="Logo Consulin Dark"
            />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center flex-col p-2 z-30">
          <center className="text-netral-primary">
            <h2 className="font-bold text-3xl">Sign Up</h2>
            <p>Enter details to create your patient account</p>
          </center>
          <div className="mt-10 w-full">
            <FormSignUp />
            <center className="mt-2">
              <p className="text-netral-primary text-sm">
                Are you a psychologist? Sign up as a Psychologist
                <Link href={"/signup-psycholog"}>
                  <span className="text-[#2785FF] font-bold"> Here </span>
                </Link>
              </p>
            </center>
          </div>
        </div>
      </div>
      <div className="absolute bottom-20 left-64 w-24 h-24 bg-accent-custom_accent rounded-full -z-50"></div>
    </>
  );
}

