import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Psychologist() {
  const psychologists = [
    {
      id: 1,
      name: "David Williams",
      sspId: "12345678",
      status: "Available",
      gender: "Male",
      degree: "Bachelor of Mental Health",
      specialist: "Addiction Therapy",
      experience: "6 years",
      imageUrl: "/assets/images/satu.png",
    },
    {
      id: 2,
      name: "Sarah Thompson",
      status: "Full Booked",
      sspId: "12345121",
      gender: "Female",
      degree: "Master of Counseling Psychology",
      specialist: "Adolescent Counseling",
      experience: "5 years",
      imageUrl: "/assets/images/dua.png",
    },
    {
      id: 3,
      name: "Andrew Smith",
      status: "Available",
      sspId: "12461287",
      gender: "Male",
      degree: "PhD in Psychiatry",
      specialist: "Depression and Anxiety Disorders",
      experience: "12 years",
      imageUrl: "/assets/images/tiga.png",
    },
    {
      id: 4,
      name: "Amanda Lee",
      status: "Available",
      sspId: "124612497",
      gender: "Female",
      degree: "Bachelor of Psychology",
      specialist: "Clinical Psychology",
      experience: "8 years",
      imageUrl: "/assets/images/empat.png",
    },
    {
      id: 5,
      name: "Jessica Nguyen",
      status: "Available",
      sspId: "12460172",
      gender: "Female",
      degree: "PhD in CBT",
      specialist: "Cognitive Behavioral Therapy",
      experience: "7 years",
      imageUrl: "/assets/images/lima.png",
    },
    {
      id: 6,
      name: "Michael Kevin",
      status: "Available",
      sspId: "01261287",
      gender: "Male",
      degree: "Master of Clinical Psychology",
      specialist: "Family Therapy",
      experience: "10 years",
      imageUrl: "/assets/images/enam.png",
    },
  ];

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Psychologist
      </h2>
      <p className="text-left text-netral-primary mb-8 mt-3">
        Explore and book an appointment with a psychologist to get the support
        you need.
      </p>
      <div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-3 mt-10">
        {psychologists.map((psychologist) => (
          <Card
            key={psychologist.id}
            className=" rounded-[30px] shadow-none  bg-[#FCFCFC] flex flex-col items-center w-full justify-center pb-10"
          >
            <div
              className={cn(
                psychologist.status === "Available"
                  ? "bg-[#272C4D]"
                  : "bg-[#272C4D]/75 ",
                " w-full text-center text-secondary-custom_secondary font-semibold text-xl px-6 py-4 rounded-t-[30px] "
              )}
            >
              {psychologist.status}
            </div>
            <div className="flex p-6 flex-col items-center w-full">
              <Image
                src={psychologist.imageUrl}
                alt={psychologist.name}
                sizes="100vw"
                width={0}
                height={0}
                className="rounded-full w-24 h-24 mb-4"
              />
              <div className="text-left w-full mb-4 px-4 text-[#27374D] space-y-2">
                <h2 className="text-xl font-semibold text-center mb-2">
                  {psychologist.name}
                </h2>
                <p className="">Gender: {psychologist.gender}</p>
                <p className="">Specialization: {psychologist.specialist}</p>
                <p className="">Experience: {psychologist.experience}</p>
              </div>
            </div>
            <div className="w-full mt-auto flex justify-center">
              <Link href="/dashboard-patient/detail-psychologst">
                <Button
                  className="bg-primary-custom_primary text-white px-24 py-2 rounded w-full"
                  type="button"
                >
                  Detail
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
