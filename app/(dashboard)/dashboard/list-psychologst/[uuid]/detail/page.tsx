import { auth } from "@/auth";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getDetailPsychologst } from "@/lib/services/admin/admin-service";
import {
  formatCommaSeparated,
  formatFullName,
  getInitials,
} from "@/lib/helpers/string-helpers";
import { notFound } from "next/navigation";
import TextSection from "@/app/(dashboard)/_components/ui/text-section";

export default async function DetailList({
  params,
}: {
  params: { uuid: string };
}) {
  const session = await auth();
  const detail_psychologst = await getDetailPsychologst(
    session?.user.access_token,
    params.uuid
  );

  if (detail_psychologst == null) {
    return notFound();
  }

  return (
    <>
      <TextSection
        title="Detail Psikologist"
        subtitle="View psychologist details on this page"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <Card className="flex flex-col items-center p-6 rounded-[30px] bg-[#E0E9F9] h-[500px] border-[10px] border-white">
          <Avatar className="rounded-full w-24 h-24 mb-4">
            <AvatarImage
              src={detail_psychologst.profile_picture || ""}
              alt={`${detail_psychologst.firstname} ${detail_psychologst.lastname}`}
            />
            <AvatarFallback>
              {getInitials(
                detail_psychologst.firstname,
                detail_psychologst.lastname
              )}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-semibold text-[#1E0342]">
            {formatFullName(
              detail_psychologst.firstname,
              detail_psychologst.lastname
            )}
          </h2>
          <p className="text-[#1E0342] mt-2">
            Licence Number:{" "}
            {detail_psychologst.psychologist?.profesional_identification_number}
          </p>
        </Card>
        <div className="flex flex-col gap-6">
          <Card className="p-6 rounded-[30px] bg-white text-[#1E0342]">
            <h3 className="text-xl font-bold text-[#1E0342] mb-4">
              Psychologist Information Details
            </h3>
            <p>
              Name:{" "}
              {formatFullName(
                detail_psychologst.firstname,
                detail_psychologst.lastname
              )}
            </p>
            <p>Gender: {detail_psychologst.gender}</p>
            <p>Email: {detail_psychologst.email}</p>
            <p>Phone: {detail_psychologst.phone_number}</p>
          </Card>
          <Card className="p-6 rounded-[30px] bg-white text-[#1E0342]">
            <h3 className="text-xl font-bold text-[#1E0342] mb-4">
              Additional Information
            </h3>
            <p>Degree: {detail_psychologst.psychologist?.degree}</p>
            <p>University: {detail_psychologst.psychologist?.university}</p>
            <p>
              Graduation Year:{" "}
              {detail_psychologst.psychologist?.graduation_year}
            </p>
            <p>Language Major: {detail_psychologst.psychologist?.language}</p>
            <p>
              Experience Year:{" "}
              {detail_psychologst.psychologist?.work_experience}
            </p>
            <p>
              Specialist:{" "}
              {formatCommaSeparated(
                detail_psychologst.psychologist?.specialization || []
              )}
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
