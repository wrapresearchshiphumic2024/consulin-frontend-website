import { auth } from "@/auth";
import { getPsychologstData } from "@/services/admin/admin-service";
import PsychologistCard from "../_components/ui/psychologist-card";

import ManageButtonGroup from "./_components/manage-button-group";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import LoadingPage from "@/components/ui/Loading";

export default async function ApprovePsychologist() {
  const session = await auth();
  const psychologists = await getPsychologstData(
    session?.user.access_token,
    "/api/admin/psychologists-notverified"
  );

  return (
    <>
      <h2 className="text-[#1E0342] text-3xl md:text-5xl  font-bold mb-3">
        Approve Psychologist
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Review and manage psychologist who just registered
      </p>

      {psychologists.length === 0 ? (
        <div className="mt-10 text-[#1E0342] font-semibold flex justify-center items-center">
          No psychologist to approve
        </div>
      ) : (
        <div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-3 mt-10">
          {psychologists.map((psychologist) => (
            <PsychologistCard
              key={psychologist.id}
              user_psychologist={psychologist}
            >
              <div className="flex justify-center gap-2 w-full px-4 flex-wrap mt-5 ">
                <ManageButtonGroup
                  id={psychologist.id}
                  access_token={session?.user.access_token}
                />
                <Link
                  href={`/dashboard/approve-psyghologst/${psychologist.id}/detail-approve`}
                  className="flex-1"
                >
                  <Button className="bg-gray-700 text-white px-4 py-2 rounded-lg ">
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
