import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Main() {
  return (
    <div className="bg-slate-200">
      <section
        className="container mx-auto px-5 z-10 pt-32 md:px-24 md:pt-12"
        id="main"
      >
        <div className="flex md:justify-between justify-center min-h-screen  items-center flex-col lg:flex-row ">
          <div className={`text-primary-custom_primary flex-1 `}>
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-[50px] h-[50px] bg-accent-custom_accent flex justify-center items-center rounded-3xl `}
              >
                AI
              </div>
              <p>- Powered Mental Health Consultation</p>
            </div>
            <Image
              src="/assets/images/Consulin Dark.png"
              width={500}
              height={500}
              alt="logo consulin"
            />
            <p>
              Your mental well-being is our priority. Connect with professional
              psychologists and get an AI-powered assessment of your stress,
              anxiety, and depression.
            </p>
            <Button className="text-secondary-custom_secondary bg-primary-custom_primary rounded-3xl mt-4">
              Free Consultation
            </Button>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <div className="overflow-hidden w-[300px]  md:w-[400px]  md:rounded-[100px] rounded-[50px]  ">
              <Image
                src={"/assets/images/Psychologist Asset.png"}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
