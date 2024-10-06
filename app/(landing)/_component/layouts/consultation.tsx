import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Consultation() {
  return (
    <div className="bg-primary-custom_primary mt-20">
      <section className="container mx-auto px-5 z-10  md:px-24 md:pt-12">
        <div className="flex md:justify-between justify-center items-center flex-col-reverse lg:flex-row py-10">
          <div className={`text-secondary-custom_secondary flex-1`}>
            <h1 className="md:text-[45px] text-2xl font-bold z-10 mb-10 leading-snug">
              Consultation with an Expert and Licensed Psychologist
            </h1>
            <p>
              We work with professionals who are experienced in providing mental
              health consultation services. We work with professionals who are
              experienced in providing mental health consultation services.
            </p>
            <Button className="bg-secondary-custom_secondary text-primary-custom_primary rounded-3xl mt-4">
              Consultation Now
            </Button>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <div className="overflow-hidden w-[200px] md:w-[400px] mt-10 md:mt-0">
              <Image
                src={"/assets/images/Psychologist Assets.png"}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                alt="Psychologist Assets"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
