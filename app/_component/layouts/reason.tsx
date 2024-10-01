import CardReason, { CardReasonProps } from "@/app/_component/ui/card-reason";

const reasons: CardReasonProps[] = [
  {
    icon: "/assets/icons/Mental Icon.png",
    title: "Mental WELLBEING",
    description:
      "Get support to manage stress, anxiety and other emotional challenges",
  },
  {
    icon: "/assets/icons/Happy Icon.png",
    title: "Balanced Mood",
    description:
      "Get support to manage stress, anxiety and other emotional challenges",
  },
  {
    icon: "/assets/icons/Mental Icon.png",
    title: "Self-Discovery",
    description:
      "Get support to manage stress, anxiety and other emotional challenges",
  },
];
export default function Reason() {
  return (
    <section className="container mx-auto px-5 md:px-24 z-10 ">
      <div className="h-[800px] xl:h-[600px] flex justify-center items-center lg:mt-0  text-primary-custom_primary flex-col ">
        <center>
          <h1 className="md:text-[64px] text-4xl font-bold  mb-10">
            WHY CHOOSE US?
          </h1>
          <p>Consulin supports your mental health journey</p>
        </center>
        <div className="flex justify-center items-center gap-2 mt-20 flex-col xl:flex-row">
          {reasons.map((reason, index) => (
            <CardReason
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
