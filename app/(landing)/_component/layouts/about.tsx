import Image from "next/image";
export default function About() {
  return (
    <section className="pt-[100px]" id="about">
      <div className="container mx-auto px-5 md:px-24 z-10 ">
        <div className="flex md:justify-center justify-center md:h-[500px] lg:mt-0   flex-col-reverse lg:flex-row ">
          <div className="flex flex-1 justify-center">
            <div className="overflow-hidden w-[200px] md:w-[300px]  ">
              <Image
                src={"/assets/images/Logo Consulin Dark.png"}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                alt="Logo Consulin Dark"
              />
            </div>
          </div>
          <div
            className={` text-primary-custom_primary lg:text-end pt-[50px] ml-0 md:ml-10 flex-1 text-center `}
          >
            <div className="relative ">
              <h1 className=" lg:text-[45px] text-4xl	font-bold z-10 mb-10">
                ABOUT CONSULIN
              </h1>
              <div
                className={`w-[50px] h-[50px] bg-accent-custom_accent flex justify-center items-center rounded-3xl absolute top-[-20px] right-[-20px] z-[-1] `}
              ></div>
            </div>

            <p>
              Consulin is a mental health platform that provides quick and easy
              access to professional psychologists. Our mission is to help you
              maintain emotional balance and well-being through a modern
              approach that incorporates Artificial Intelligence (AI). With AI
              technology, Consulin offers an initial mental health assessment to
              help you understand your condition before connecting with a
              psychologist. We believe that everyone deserves the right mental
              health support, anytime and anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
