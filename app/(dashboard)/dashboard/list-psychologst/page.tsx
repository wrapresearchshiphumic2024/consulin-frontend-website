import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { getPsychologstData } from "@/lib/services/global-service";
import PsychologistCard from "../../_components/ui/psychologist-card";
import SearchList from "../../_components/ui/search";
import TextSection from "../../_components/ui/text-section";

export default async function List(props: {
  searchParams?: {
    name?: string;
    gender?: string;
  };
}) {
  const session = await auth();
  const searchParams = props.searchParams;
  const name = searchParams?.name || "";
  const psychologists = await getPsychologstData(
    session?.user.access_token,
    "/api/admin/psychologists",
    name
  );
  return (
    <>
      <TextSection
        title="List Psychologist"
        subtitle="List of Active Psychologists in Consulin"
      />
      <div className="flex justify-end">
        <SearchList placeholder="Search by name of psychologist" />
      </div>
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
