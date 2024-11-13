import { Button } from "@/components/ui/button";
import Link from "next/link";

import { auth } from "@/auth";

import PsychologistCard from "../../_components/ui/psychologist-card";
import { getPsychologstData } from "@/services/patient/patient-service";
import { PatientHasAIAnalysis } from "./_components/has-ai-analysis";
import SearchList from "../../_components/ui/search";
import Gender from "./_components/gender";

export default async function Psychologist(props: {
  searchParams?: {
    name?: string;
    gender?: string;
  };
}) {
  const searchParams = props.searchParams;
  const name = searchParams?.name || "";
  const gender = searchParams?.gender || "";

  const session = await auth();
  const { psychologists, patientHasAIAnalysis } = await getPsychologstData(
    session?.user.access_token,
    name,
    gender
  );

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Psychologist
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Explore and book an appointment with a psychologist to get the support
        you need.
      </p>
      <div className="mt-10 flex justify-between">
        <Gender />
        <SearchList placeholder="Search psychologist by name" />
      </div>

      {!patientHasAIAnalysis && <PatientHasAIAnalysis />}

      {psychologists.length === 0 ? (
        <div className="mt-10 text-[#1E0342] font-semibold flex justify-center items-center">
          Empty List Psychologist
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-3">
          {psychologists.map((psychologist) => (
            <PsychologistCard
              key={psychologist.id}
              user_psychologist={psychologist}
              available
            >
              <div className="w-full px-4 mt-auto flex justify-center">
                <Link
                  href={`/dashboard-patient/psychologist/${psychologist.id}/detail-psychologst`}
                >
                  <Button className="bg-gray-700 text-white px-4 py-2 rounded-md w-[200px]">
                    Detail
                  </Button>
                </Link>
              </div>
            </PsychologistCard>
          ))}
        </div>
      )}
    </>
  );
}
