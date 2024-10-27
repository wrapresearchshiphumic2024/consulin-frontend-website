import { Card } from "@/components/ui/card";

import { auth } from "@/auth";
import { getDetailPsychologst } from "@/services/admin/admin-service";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  formatCommaSeparated,
  formatFullName,
  getInitials,
} from "@/helpers/string-helpers";
import ViewPdf from "../../_components/ui/view-pdf";

import ManageButtonGroup from "../../_components/manage-button-group";

export default async function DetailApp({
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
        Detail Applicant Psychologist
      </h2>
      <p className="mt-3 text-netral-primary  font-medium ">
        View applicant psychologist details on this page
      </p>

      <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start lg:justify-center mt-10">
        <div className="flex flex-col w-full lg:w-[500px] space-y-1 mb-10 lg:mb-0">
          <Card className="flex flex-col items-center p-4 md:p-6 rounded-[30px] h-auto md:h-[400px] shadow-lg bg-white mb-6 w-full">
            <Avatar className="rounded-full w-20 h-20 md:w-32 md:h-32 mb-4 border-4 border-white shadow-md">
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
            <h2 className="text-lg md:text-2xl font-semibold text-[#1E0342]">
              {getInitials(
                detail_psychologst.firstname,
                detail_psychologst.lastname
              )}
            </h2>
            <p className="text-[#1E0342] mt-2 text-xs md:text-base font-semibold">
              Licence Number:{" "}
              {
                detail_psychologst.psychologist
                  ?.profesional_identification_number
              }
            </p>
            <div className="w-full text-center mt-4">
              <div className="flex items-center justify-center mb-2 mt-[30px]">
                <div className="h-px bg-gray-400 w-1/6"></div>
                <p className="text-gray-500 mx-4 text-xs md:text-base">
                  Click to see attachment
                </p>
                <div className="h-px bg-gray-400 w-1/6"></div>
              </div>
              <div className="flex justify-center space-x-5">
                <ViewPdf
                  label="CV"
                  url_pdf={`${process.env.API_URL}/${
                    detail_psychologst.psychologist?.cv?.[0] || ""
                  }`}
                />
                <ViewPdf
                  label="Certificate"
                  url_pdf={`${process.env.API_URL}/${
                    detail_psychologst.psychologist?.certification?.[0] || ""
                  }`}
                />
                <ViewPdf
                  label="License"
                  url_pdf={`${process.env.API_URL}/${
                    detail_psychologst.psychologist?.practice_license?.[0] || ""
                  }`}
                />
              </div>
            </div>
          </Card>
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white w-full mb-[10px]">
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 ">
              <ManageButtonGroup
                id={detail_psychologst.id}
                access_token={session?.user.access_token}
              />
            </div>
          </Card>
        </div>
        <div className="flex flex-col space-y-6 w-full lg:w-2/3">
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white">
            <h3 className="text-md md:text-xl font-bold text-[#1E0342] mb-4">
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
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white">
            <h3 className="text-md md:text-xl font-bold text-[#1E0342] mb-4">
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
