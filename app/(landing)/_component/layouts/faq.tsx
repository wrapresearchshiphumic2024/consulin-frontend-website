import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="pt-[50px] bg-white" id="faq">
      <div className="container mx-auto px-5 md:px-24 z-10">
        <div className="flex pt-[100px] lg:mt-0 flex-col">
          <div className="relative text-[#1E0342]">
            <center>
              <h1 className="lg:text-[55px] text-3xl sm:text-2xl font-bold z-10 mb-5 md:mb-10">
                FREQUENTLY ASKED QUESTIONS
              </h1>
              <p className="text-sm sm:text-lg text-[#27374D] mb-10">
                Frequently asked questions to help you better understand our
                offerings.
              </p>
            </center>
          </div>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col-reverse lg:flex-row md:justify-center justify-center lg:mt-[-10px] md:h-auto">
          {/* Image on the left */}
          <div className="flex flex-1 justify-center lg:order-1 order-2">
            <div className="lg:flex lg:justify-start lg:items-center lg:text-start pt-[50px] md:ml-10 lg:ml-[-150px]">
              <div className="overflow-hidden w-[250px] sm:w-[300px] lg:w-[400px]">
                <Image
                  src="/assets/images/lima5.png"
                  sizes="100vw"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                  alt="FAQ illustration"
                />
              </div>
            </div>
          </div>

          {/* Accordion on the right */}
          <div className="flex flex-1 text-start lg:text-left order-1 lg:order-2 pt-[30px] lg:pt-[50px]">
            <div className="w-full lg:w-[90%] lg:ml-10 text-[#1E0342]">
              <Accordion type="single" collapsible>
                <div className="bg-white rounded-[20px] shadow p-3 mb-5">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Consulife?</AccordionTrigger>
                    <AccordionContent>
                      Consulife is a mental health platform that connects
                      patients with professional psychologists. We also use AI
                      technology to provide an initial assessment of your mental
                      health condition before connecting you with an expert.
                    </AccordionContent>
                  </AccordionItem>
                </div>
                <div className="bg-white rounded-[20px] shadow p-3 mb-5">
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Can an AI assessment replace a psychologist's diagnosis?
                    </AccordionTrigger>
                    <AccordionContent>
                    No, an AI assessment is not intended to replace a psychologist's diagnosis. 
                    It serves as a preliminary evaluation to help guide you towards the right professional support. 
                    A licensed psychologist will conduct a comprehensive assessment and provide an accurate diagnosis.
                    </AccordionContent>
                  </AccordionItem>
                </div>
                <div className="bg-white rounded-[20px] shadow p-3 mb-5">
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Is there a consultation fee at Consulife?
                    </AccordionTrigger>
                    <AccordionContent>
                    No, all services on Consulife are free of charge. We aim to provide accessible mental health support to everyone.
                    </AccordionContent>
                  </AccordionItem>
                </div>
                <div className="bg-white rounded-[20px] shadow p-3 mb-5">
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Can I choose my own psychologist?
                    </AccordionTrigger>
                    <AccordionContent>
                    Yes, you can choose your own psychologist from our list of qualified professionals. 
                    You can review their profiles, specializations, and experience before making your selection.
                    </AccordionContent>
                  </AccordionItem>
                </div>
                <div className="bg-white rounded-[20px] shadow p-3 mb-5">
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      Is Consulife available 24/7?
                    </AccordionTrigger>
                    <AccordionContent>
                    Yes, Consulife is available 24/7, especially for our AI Analyzer feature, which allows you to assess your mental health at any time. 
                    However, please note that consultations with psychologists are scheduled according to their availability. 
                    You can book an appointment based on the times set by the psychologists on our platform.
                    </AccordionContent>
                  </AccordionItem>
                </div>
                <div className="bg-white rounded-[20px] shadow p-3 mb-5">
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      Can I use Consulife on a mobile device?
                    </AccordionTrigger>
                    <AccordionContent>
                    Yes, Consulife is available 24/7, allowing you to access mental health support and resources at any time that suits you.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
