import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export default function ApprovePsychologist() {
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
      <h2 className="text-[#1E0342] text-4xl md:text-5xl font-bold mb-3">
        Approve Psychologist
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Review and manage psychologist who just registered
      </p>

      <div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-3 mt-10">
        {psychologists.map((psychologist) => (
          <Card
            key={psychologist.id}
            className="p-6 rounded-[30px] shadow-none  bg-[#FCFCFC] flex flex-col items-center  w-full"
          >
            <Image
              src={psychologist.imageUrl}
              alt={psychologist.name}
              width="0"
              height="0"
              sizes="100vw"
              className="rounded-full w-24 h-24 mb-4"
            />
            <div className="text-left w-full mb-4 px-4 text-[#27374D] space-y-3">
              <h2 className="text-xl font-semibold text-center mb-5">
                {psychologist.name}
              </h2>
              <p className="">SSP ID: {psychologist.sspId}</p>
              <p className="leading-tight break-words">
                Degree: {psychologist.degree}
              </p>
              <p className="">Specialist: {psychologist.specialist}</p>
              <p className="">Experience: {psychologist.experience}</p>
            </div>
            <div className="flex justify-center gap-2 w-full px-4 flex-wrap mt-5 space-x-3">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Accept
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-[#27374D] font-semibold">
                      Approve Confirmation
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-[#27374D]">
                      Are you sure you want to approve this psychologist?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                              Confirm
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-[#27374D] font-semibold">
                                Consulin Notification
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-[#27374D]">
                                Psychologist successfully approved!
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <Link href="/dashboard">
                                <AlertDialogAction className="bg-[#1E0342]">
                                  Close
                                </AlertDialogAction>
                              </Link>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-[#27374D] font-semibold">
                            Consulin Notification
                          </AlertDialogTitle>
                          <AlertDialogDescription className="text-[#27374D]">
                            Psychologist successfully approved!
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <Link href="/dashboard">
                            <AlertDialogAction className="bg-[#1E0342]">
                              Close
                            </AlertDialogAction>
                          </Link>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialogAction className="bg-white text-black px-6 py-2 rounded-lg">
                      Cancel
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    Reject
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-[#27374D] font-semibold">
                      Reject Confirmation
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-[#27374D]">
                      Are you sure you want to reject this psychologist?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="bg-[#DC3545] rounded-lg">
                          Confirm
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-[#27374D] font-semibold">
                            Consulin Notification
                          </AlertDialogTitle>
                          <AlertDialogDescription className="text-[#27374D]">
                            Psychologist successfully rejected!
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <Link href="/dashboard">
                            <AlertDialogAction className="bg-[#1E0342] rounded-lg">
                              Close
                            </AlertDialogAction>
                          </Link>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Link href="/dashboard/detail-approve">
                <Button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
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
