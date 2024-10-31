import { auth } from "@/auth";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getDetailPsychologst } from "@/services/admin/admin-service";
import {
  formatCommaSeparated,
  formatFullName,
  getInitials,
} from "@/helpers/string-helpers";
import { notFound } from "next/navigation";

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
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Detail Psikologist
      </h2>
      <p className="mt-3 text-netral-primary  font-medium ">
        View psychologist details on this page
      </p>
      <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start lg:justify-cente mt-10">
        <Card className="flex flex-col items-center p-6 rounded-[30px] shadow-lg bg-[#E0E9F9] mb-6 h-[500px] lg:mb-0 w-full lg:w-1/3 border-[10px] border-white">
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
        <div className="flex flex-col space-y-6 w-full lg:w-2/3 text-semibold">
          <Card className="p-6 rounded-[30px] shadow-lg bg-white text-[#1E0342] space-y-[5px]">
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
          <Card className="p-6 rounded-[30px] shadow-lg bg-white text-[#1E0342] space-y-[5px]">
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