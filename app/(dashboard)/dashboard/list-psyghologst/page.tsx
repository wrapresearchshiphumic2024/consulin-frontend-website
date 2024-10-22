import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
export default function List() {
  const psychologists = [
    {
      id: 1,
      name: "David Williams",
      sspId: "12345678",
      degree: "Bachelor of Mental Health",
      specialist: "Addiction Therapy",
      experience: "6 years",
      imageUrl: "/assets/images/satu.png",
    },
    {
      id: 2,
      name: "Sarah Thompson",
      sspId: "12345121",
      degree: "Master of Counseling Psychology",
      specialist: "Adolescent Counseling",
      experience: "5 years",
      imageUrl: "/assets/images/dua.png",
    },
    {
      id: 3,
      name: "Andrew Smith",
      sspId: "12461287",
      degree: "PhD in Psychiatry",
      specialist: "Depression and Anxiety Disorders",
      experience: "12 years",
      imageUrl: "/assets/images/tiga.png",
    },
    {
      id: 4,
      name: "Amanda Lee",
      sspId: "124612497",
      degree: "Bachelor of Psychology",
      specialist: "Clinical Psychology",
      experience: "8 years",
      imageUrl: "/assets/images/empat.png",
    },
    {
      id: 5,
      name: "Jessica Nguyen",
      sspId: "12460172",
      degree: "PhD in CBT",
      specialist: "Cognitive Behavioral Therapy",
      experience: "7 years",
      imageUrl: "/assets/images/lima.png",
    },
    {
      id: 6,
      name: "Michael Kevin",
      sspId: "01261287",
      degree: "Master of Clinical Psychology",
      specialist: "Family Therapy",
      experience: "10 years",
      imageUrl: "/assets/images/enam.png",
    },
  ];
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        List Psychologist
      </h2>
      <p className="mt-3 text-netral-primary  font-medium ">
        List of Active Psychologists in Consulin
      </p>
      <div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-3 mt-10">
        {psychologists.map((psychologist) => (
          <Card
            key={psychologist.id}
            className="p-6 rounded-[30px] shadow-none  bg-[#FCFCFC] flex flex-col items-center w-full"
          >
            <Image
              src={psychologist.imageUrl}
              alt={psychologist.name}
              sizes="100vw"
              width={0}
              height={0}
              className="rounded-full w-24 h-24 mb-4"
            />
            <div className="text-left w-full mb-4 px-4 text-[#27374D] space-y-2">
              <h2 className="text-xl font-bold text-center mb-[30px]">
                {psychologist.name}
              </h2>
              <p className="">SSP ID: {psychologist.sspId}</p>
              <p className="leading-tight break-words ">
                Degree: {psychologist.degree}
              </p>
              <p className="">Specialist: {psychologist.specialist}</p>
              <p className="">Experience: {psychologist.experience}</p>
            </div>
            <div className="w-full px-4 mt-auto flex justify-center">
              <Link href="/dashboard/detail-list">
                <Button className="bg-gray-700 justify-center text-white px-4 py-2 rounded-md w-[200px]">
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
