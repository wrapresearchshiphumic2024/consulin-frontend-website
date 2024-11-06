import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { getPsychologstData } from "@/services/global-service";
import PsychologistCard from "../../_components/ui/psychologist-card";

export default async function List() {
  const session = await auth();
  const psychologists = await getPsychologstData(
    session?.user.access_token,
    "/api/admin/psychologists"
  );
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        List Psychologist
      </h2>
      <p className="mt-3 text-netral-primary  font-medium ">
        List of Active Psychologists in Consulin
      </p>
      {psychologists.length === 0 ? (
        <div className="mt-10 text-[#1E0342] font-semibold flex justify-center items-center">
          Empty List Psychologist
        </div>
      ) : (
        <div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-3 mt-10">
          {psychologists.map((psychologist) => (
            <PsychologistCard
              key={psychologist.id}
              user_psychologist={psychologist}
            >
              <div className="w-full px-4 mt-auto flex justify-center">
                <Link
                  href={`/dashboard/list-psychologst/${psychologist.id}/detail`}
                >
                  <Button className="bg-gray-700 justify-center text-white px-4 py-2 rounded-md w-[200px]">
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
