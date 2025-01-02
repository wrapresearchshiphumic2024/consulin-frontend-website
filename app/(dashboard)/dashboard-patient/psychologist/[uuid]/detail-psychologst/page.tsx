import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FormChooseDate from "./_components/form-choose-date";
import { auth } from "@/auth";
import { getDetailPsychologistPatient } from "@/lib/services/patient/patient-service";
import {
  formatCommaSeparated,
  formatFullName,
  getInitials,
} from "@/lib/helpers/string-helpers";
import { notFound } from "next/navigation";
import { Schedule } from "@/types/psychologist/psychologist-type-data";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function DetailPsycholog({
  params,
}: {
  params: { uuid: string };
}) {
  const session = await auth();
  const detail_psychologst = await getDetailPsychologistPatient(
    session?.user.access_token,
    params.uuid
  );

  if (
    detail_psychologst == null ||
    detail_psychologst.psychologist?.schedule?.status === "inactive"
  ) {
    return notFound();
  }

  return (
    <>
      <div className="flex mb-5 gap-3">
        <Link href="/dashboard-patient/psychologist">
          <Button className="p-2 rounded-[100px] bg-secondary-custom_secondary hover:bg-secondary-custom_secondary h-[35px] w-[35px] flex items-center justify-center">
            <Image
              src="/assets/icons/back.png"
              alt="Back"
              width={10}
              height={10}
            />
          </Button>
        </Link>
        <div>
          <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
            Detail Psikologist
          </h2>
          <p className="text-left text-[#1E034280] mb-8 mt-3">
            View psychologist details on this page
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_2fr] gap-3">
        <div className="flex flex-col rounded-[30px] mb-6 lg:mb-0 bg-secondary-custom_secondary ">
          <div
            className={cn(
              "Available" === "Available" ? "bg-[#272C4D]" : "bg-[#272C4D]/75",
              "w-full text-center text-secondary-custom_secondary font-semibold text-xl px-6 py-4 rounded-t-[30px]"
            )}
          >
            Available
          </div>
          <div className="flex flex-col items-center mt-10">
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
            <h3 className="text-xl font-bold mt-5 text-[#1E0342]">
              {formatFullName(
                detail_psychologst.firstname,
                detail_psychologst.lastname
              )}
            </h3>
          </div>
          <div className="p-6 text-[#1E0342] space-y-2">
            <p>Gender: {detail_psychologst.gender}</p>
            <p>Email: {detail_psychologst.email}</p>
            <p>
              Specialization:{" "}
              {formatCommaSeparated(
                detail_psychologst.psychologist?.specialization || []
              )}
            </p>
            <p>
              Experience: {detail_psychologst.psychologist?.work_experience}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="p-6 rounded-[30px] bg-secondary-custom_secondary text-[#1E0342]">
            <FormChooseDate
              session={session as Session}
              patient_id={session?.user.user_id}
              psychologist_id={detail_psychologst.id}
              schedules={detail_psychologst.psychologist?.schedule as Schedule}
              upcoming_schedules={
                detail_psychologst.psychologist?.upcoming_schedules || []
              }
            />
          </div>
          <div className="p-6 rounded-[30px] bg-secondary-custom_secondary text-[#1E0342]">
            <h2 className="text-2xl font-semibold">Note</h2>
            <p>
              Be sure to check the cancellation and reschedule policy before
              booking. If you have any further questions, feel free to contact
              the psychologist through the contact information provided.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
