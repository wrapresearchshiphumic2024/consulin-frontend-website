import CardFeature, { CardFeatureProps } from "../ui/card-feature";
import { Button } from "@/components/ui/button";

const feature: CardFeatureProps[] = [
  {
    icon: "/assets/icons/Mental Icon.png",
    title: "Mental WELLBEING",
  },
  {
    icon: "/assets/icons/Happy Icon.png",
    title: "Balanced Mood",
  },
  {
    icon: "/assets/icons/Mental Icon.png",
    title: "Self-Discovery",
  },
  {
    icon: "/assets/icons/Mental Icon.png",
    title: "Self-Discovery",
  },
];

export default function Feature() {
  return (
    <section className="relative md:pt-[100px] h-auto" id="about">
      <div className="hidden lg:inline-block absolute left-0 top-44 bg-accent-custom_accent w-[700px] h-[250px] rounded-r-[50px]"></div>
      <div className="container mx-auto px-5 md:px-24">
        <div className="flex md:justify-center justify-center items-center lg:items-start lg:mt-0 flex-col-reverse lg:flex-row">
          <div className="flex items-center md:flex-1">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 z-10 justify-items-center">
              {feature.map((feature, index) => (
                <CardFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                />
              ))}
            </div>
          </div>

          <div className="text-primary-custom_primary lg:text-end pt-[50px] ml-0 md:ml-10 flex-1 text-center mb-10 md:mb-0">
            <div className="relative">
              <h1 className="md:text-[64px] text-4xl font-bold z-10 mb-10">
                MAIN FEATURES
              </h1>
              <div className="w-[50px] h-[50px] bg-accent-custom_accent flex justify-center items-center rounded-3xl absolute top-[-20px] left-[120px] z-[-1]"></div>
            </div>

            <p className="z-10">
              We understand the importance of good mental health. With our
              features, you can connect with professional psychologists in
              real-time and AI-based assistance to help maintain your mental
              health.
            </p>
            <Button className="text-secondary-custom_secondary bg-primary-custom_primary rounded-3xl mt-4">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
