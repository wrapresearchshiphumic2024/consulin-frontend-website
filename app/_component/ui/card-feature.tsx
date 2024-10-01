import Image from "next/image";
export interface CardFeatureProps {
  icon: string;
  title: string;
}
export default function CardFeature({ icon, title }: CardFeatureProps) {
  return (
    <div className="flex justify-center items-center flex-col bg-primary-custom_primary  h-[200px] w-[200px] rounded-[24px]">
      <div className="overflow-hidden w-[30px] md:w-[50px]  ">
        <Image
          src={icon}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full "
          alt="logo consulin"
        />
      </div>
      <center className="mt-4">
        <h3 className="text-secondary-custom_secondary">{title}</h3>
      </center>
    </div>
  );
}
