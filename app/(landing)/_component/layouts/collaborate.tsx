import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Collaborate() {
  return (
    <section className="container mx-auto px-5 md:px-24 z-10" id="collaborate">
      <div className="relative flex justify-center items-center text-primary-custom_primary flex-col md:pt-20 pt-10">
        <div className="overflow-hidden w-full md:w-[800px] ">
          <Image
            src={"/assets/images/Colab.png"}
            width={800}
            height={400}
            className="w-full h-auto rounded-2xl"
            alt="Collab Vector"
          />
        </div>

        <h1 className="lg:text-[45px] text-2xl font-bold text-center text-netral-primary mt-[50px]">
          COLLABORATE WITH US
        </h1>
        <p className="text-center text-[#1E034280] mt-2">
          Collaborate as Psychologist with Consulife
        </p>

        <Link href={"/signup-psycholog"}>
          <Button className="text-white bg-[#27374D] rounded-full px-8 py-3 mt-4">
            Join Now
          </Button>
        </Link>

        <div className="absolute md:top-96 top-72 overflow-hidden w-auto lg:w-[900px] -z-10 mt-[100px]">
          <Image
            src={"/assets/icons/Group 52.png"}
            width={900}
            height={500}
            className="w-full h-auto"
            alt="Floating Icons"
          />
        </div>
      </div>
    </section>
  );
}
