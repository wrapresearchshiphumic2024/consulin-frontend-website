import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
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
    <div className="p-6">
      <h1 className="text-3xl font-bold text-left mb-2 text-[#1E0342]">List Psychologist</h1>
      <p className="text-left text-[#1E034280] mb-8">List of Active Psychologists in Consulin</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {psychologists.map((psychologist) => (
          <Card 
            key={psychologist.id} 
            className="p-6 rounded-[30px] shadow-lg bg-white flex flex-col items-center max-w-sm mx-auto"
          >
            <img src={psychologist.imageUrl} alt={psychologist.name} className="rounded-full w-24 h-24 mb-4" />
            <div className="text-left w-full mb-4 px-4 text-[#27374D] space-y-2">
              <h2 className="text-xl font-semibold text-center mb-2">{psychologist.name}</h2>
              <p className="">SSP ID: {psychologist.sspId}</p>
              <p className="leading-tight break-words">
                Degree: {psychologist.degree}
              </p>
              <p className="">Specialist: {psychologist.specialist}</p>
              <p className="">Experience: {psychologist.experience}</p>
            </div>
            <div className="w-full px-4 mt-auto flex justify-start">
                <Link href='/dashboard/detail-list'>
                    <Button className="bg-gray-700 text-white px-4 py-2 rounded">Detail</Button>
                </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
