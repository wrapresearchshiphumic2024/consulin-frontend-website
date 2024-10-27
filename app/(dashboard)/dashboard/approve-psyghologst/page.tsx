import { auth } from "@/auth";
import { getPsychologstData } from "@/services/admin/admin-service";
import PsychologistCard from "../_components/ui/psychologist-card";
import ManageButton from "./_components/manage-button";

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

      <div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-3 mt-10">
        {psychologists.map((psychologist) => (
          <PsychologistCard
            key={psychologist.id}
            user_psychologist={psychologist}
          >
            <div className="flex justify-center gap-2 w-full px-4 flex-wrap mt-5 space-x-3">
              <ManageButton
                uuid={psychologist.id as string}
                session={session?.user.access_token as string}
              />
            </div>
          </PsychologistCard>
        ))}
      </div>
    </>
  );
}
