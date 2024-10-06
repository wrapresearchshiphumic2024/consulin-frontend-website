import CardFeature, { CardFeatureProps } from "../ui/card-feature";
import { Button } from "@/components/ui/button";

const feature: CardFeatureProps[] = [
  {
    icon: "/assets/icons/Ai Promt icon.png",
    title: "AI Assistant",
  },
  {
    icon: "/assets/icons/Booking Icon.png",
    title: "Booking",
  },
  {
    icon: "/assets/icons/Chat Icon.png",
    title: "Chatroom",
  },
  {
    icon: "/assets/icons/Free Icon.png",
    title: "Free to Use",
  },
];

export default function Feature() {
  return (
    <section className="relative md:pt-[200px] h-auto" id="features">
      <div className="hidden xl:inline-block absolute left-0 top-72 bg-accent-custom_accent w-[700px] h-[250px] rounded-r-[50px]"></div>
      <div className="container mx-auto px-5 md:px-24">
        <div className="flex md:justify-center justify-center items-center lg:items-start lg:mt-0 flex-col-reverse lg:flex-row">
          <div className="flex items-center md:flex-1">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 z-10 justify-items-center mt-5">
              {feature.map((feature, index) => (
                <CardFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                />
              ))}
            </div>
          </div>

          <div className="text-netral-primary lg:text-end md:pt-[50px] pt-[100px]  ml-0 lg:ml-10 flex-1 text-center mb-10 md:mb-0">
            <h1 className=" relative lg:text-[45px] text-4xl font-bold z-10 mb-10 ">
              MAIN FEATURES
              <div className="w-[30px] h-[30px] bg-accent-custom_accent flex justify-center items-center rounded-3xl absolute top-[-15px] left-[280px] z-[-1]"></div>
            </h1>

            <p className="z-10">
              We understand the importance of good mental health. With our
              features, you can connect with professional psychologists in
              real-time and AI-based assistance to help maintain your mental
              health.
            </p>
            <Button className="text-secondary-custom_secondary bg-primary-custom_primary rounded-3xl mt-4">
              Discover Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
