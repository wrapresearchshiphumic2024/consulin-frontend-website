import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Collaborate() {
  return (
    <section className="container mx-auto px-5 md:px-24 z-10" id="collaborate">
      <div className="relative flex justify-center items-center text-primary-custom_primary flex-col md:pt-20 pt-10">
        <div className="overflow-hidden w-[200px] md:w-[400px] ">
          <Image
            src={"/assets/images/Collab Vector.png"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="Collab Vector"
          />
        </div>
        <h1 className=" lg:text-[45px] text-2xl font-bold my-10 text-center  ">
          COLLABORATE WITH US
        </h1>
        <p className="text-center">
          Consulin supports your mental health journey
        </p>
        <Link href={"/register-psycholog"}>
          <Button className="text-secondary-custom_secondary bg-primary-custom_primary rounded-3xl mt-4">
            Join Now
          </Button>
        </Link>

        <div className=" absolute md:top-96 top-72 overflow-hidden  w-auto lg:w-[900px]  mt-10 -z-10">
          <Image
            src={"/assets/icons/Group 52.png"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="Group 52"
          />
        </div>
      </div>
    </section>
  );
}
