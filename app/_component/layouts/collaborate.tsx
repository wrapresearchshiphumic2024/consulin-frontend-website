import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Collaborate() {
  return (
    <section className="container mx-auto px-5 md:px-24 z-10">
      <div className="relative flex justify-center items-center text-primary-custom_primary flex-col mt-10">
        <div className="overflow-hidden w-[200px] md:w-[500px] md:rounded-[100px] rounded-[50px] mt-10">
          <Image
            src={"/assets/images/Collab Vector.png"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt=""
          />
        </div>
        <h1 className="md:text-[64px] text-5xl font-bold mb-10 text-center">
          WHY CHOOSE US?
        </h1>
        <p className="text-center">
          Consulin supports your mental health journey
        </p>
        <Button className="text-secondary-custom_secondary bg-primary-custom_primary rounded-3xl mt-4">
          Free Consultation
        </Button>

        <div className=" absolute top-96 overflow-hidden  md:rounded-[100px] rounded-[50px] mt-10">
          <Image
            src={"/assets/icons/Group 52.png"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
