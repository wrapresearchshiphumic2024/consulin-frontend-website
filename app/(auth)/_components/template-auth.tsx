import Image from "next/image";
export default function TemplateAuth({
  children,
  image,
}: {
  children: React.ReactNode;
  image: string;
}) {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse shadow-2xl drop-shadow-xl p-4 rounded-3xl z-10 ">
        <div className="hidden flex-1 bg-gradient-to-r from-[#EBEBEB] rounded-3xl xl:flex items-center justify-center p-5">
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

        <div className="flex flex-1 justify-center items-center flex-col p-2">
          {children}
        </div>
      </div>
    </>
  );
}
