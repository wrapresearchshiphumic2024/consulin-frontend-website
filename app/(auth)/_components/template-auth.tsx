import Image from "next/image";
import BackButton from "../signup-psycholog/_components/ui/back-button";
export default function TemplateAuth({
  children,
  image,
}: {
  children: React.ReactNode;
  image: string;
}) {
  return (
    <>
      <div className=" flex lg:flex-row flex-col-reverse shadow-2xl drop-shadow-xl p-4 rounded-3xl bg-secondary-custom_secondary">
        <BackButton />

        <div className="hidden flex-1 bg-gradient-to-r from-[#EBEBEB] rounded-3xl xl:flex items-center justify-center p-5 z-30 ">
          <div className="overflow-hidden w-[350px]">
            <Image
              src={image}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              alt="Logo Consulin Dark"
            />
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center flex-col p-2 z-30">
          {children}
        </div>
      </div>
      <div className="absolute bottom-20 left-64 w-24 h-24 bg-accent-custom_accent rounded-full -z-50"></div>
    </>
  );
}
