import Image from "next/image";
export interface CardReasonProps {
  icon: string;
  title: string;
  description: string;
}
export default function CardReason({
  icon,
  title,
  description,
}: CardReasonProps) {
  return (
    <div className="flex gap-4 items-center flex-col md:flex-row ">
      <div className="relative flex justify-center items-center  bg-primary-custom_primary w-[100px] h-[100px] md:h-[130px]  md:w-[300px] rounded-[24px]">
        <div className="overflow-hidden w-[20px] md:w-[50px] ">
          <Image
            src={icon}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full "
            alt={title}
          />
        </div>

        <div
          className={`absoute md:w-[50px] md:h-[50px] w-[30px] h-[30px]   bg-accent-custom_accent flex justify-center items-center rounded-3xl absolute md:top-[-20px] top-[-10px] right-[-20px] z-[-1] `}
        ></div>
      </div>
      <div className="text-netral-primary">
        <h2 className="text-2xl font-bold text-center md:text-left">{title}</h2>
        <p className="text-center md:text-left">{description}</p>
      </div>
    </div>
  );
}
