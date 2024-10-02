import CardReason, { CardReasonProps } from "../ui/card-reason";

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
      <div className=" flex pt-[100px]    lg:mt-0  text-primary-custom_primary flex-col ">
        <center>
          <h1 className=" lg:text-[44px] text-4xl font-bold  md:mb-10">
            WHY CHOOSE US?
          </h1>
          <p>Consulin supports your mental health journey</p>
        </center>
        <div className="flex justify-center items-center gap-2 md:mt-20 mt-10 flex-col xl:flex-row">
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
