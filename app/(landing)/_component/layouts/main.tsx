import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Main() {
  return (
    <div>
      <section
        className="container mx-auto px-5 z-10 pt-32 md:px-24 lg:pt-12"
        id="home"
      >
        <div className="flex lg:justify-between justify-center lg:min-h-screen  items-center flex-col lg:flex-row ">
          <div
            className={`flex flex-col justify-center text-primary-custom_primary md:flex-1 `}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`md:w-[50px] md:h-[50px] w-[30px] h-[30px] bg-accent-custom_accent flex justify-center items-center rounded-3xl `}
              >
                AI
              </div>
              <div> - </div>
              <p>Powered Mental Health Consultation</p>
            </div>

            <div className="overflow-hidden w-[300px] lg:w-[400px] mt-[20px] mb-[20px] ">
              <Image
                src="/assets/images/ConsulifeLP1.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                alt="Consulin Dark"
              />
            </div>
            <p>
              Your mental well-being is our priority. Connect with professional
              psychologists and get an AI-powered assessment of your stress,
              anxiety, and depression.
            </p>
            <div>
              <Button className="text-secondary-custom_secondary bg-primary-custom_primary rounded-3xl mt-4">
                Free Consultation
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 justify-center items-center">
            <div className="overflow-hidden w-[300px]  lg:w-[400px]  lg:p-0 p-10  ">
              <Image
                src={"/assets/images/BG1.png"}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                alt="Psychologist Asset"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
