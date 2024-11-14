import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import ChatOne from "./_components/chat-one";

import Image from "next/image";
import ButtonDetailPatient from "./_components/button-detail-patient";
import IconMeet from "@/components/icons/icon-meet";
import { auth } from "@/auth";
import {
  getAppointmentDetailPsychologst,
  getProfilePsychologist,
} from "@/services/psychologist/psychologist-service";
import { formatFullName } from "@/helpers/string-helpers";
import { cn } from "@/lib/utils";

export default async function DetailP({
  params,
}: {
  params: { uuid: string };
}) {
  const session = await auth();
  const detailAppointmentPsychologt = await getAppointmentDetailPsychologst(
    session?.user.access_token,
    params.uuid
  );
  const user = await getProfilePsychologist(session?.user.access_token);
  console.log(detailAppointmentPsychologt);

  return (
    <>
      <div className="flex ">
        <Link href="/dashboard-psychologist/schedule-appointment">
          <Button className="p-2 rounded-full bg-secondary-custom_secondary hover:bg-white shadow-md h-[40px] w-[40px] flex items-center justify-center mr-4 mb-7">
            <Image
              src="/assets/icons/back.png"
              alt="Back"
              width={10}
              height={10}
            />
          </Button>
        </Link>
        <div>
          <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-left  lg:mb-4 text-[#1E0342]">
            Detail Patient
          </h1>
          <p className="text-left text-[#1E034280] font-semibold">
            View patient details on this page
          </p>
        </div>
      </div>
      {detailAppointmentPsychologt?.status === "ongoing" && (
        <div className="flex justify-end">
          <Link href={"/meet?room_id=raya-124"} target="_blank">
            <Button className="bg-primary-custom_primary rounded-full">
              Start a Meet
              <IconMeet className="ml-2" />
            </Button>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
        <div className="space-y-4 col-span-1">
          <Card className="flex flex-col rounded-[30px] shadow-lg bg-white w-full">
            <div
              className={cn(
                detailAppointmentPsychologt?.status === "ongoing" &&
                  "bg-[#28A745]",
                detailAppointmentPsychologt?.status === "completed" ||
                  detailAppointmentPsychologt?.status === "waiting"
                  ? "bg-netral-primary"
                  : "",
                detailAppointmentPsychologt?.status === "canceled" &&
                  "bg-red-500",
                "w-full  rounded-t-[30px] text-white text-center py-2 font-bold capitalize"
              )}
            >
              {detailAppointmentPsychologt?.status}
            </div>
            <div className="flex flex-col p-4 space-y-3">
              <p className="text-netral-primary  font-medium">
                Name:{" "}
                {formatFullName(
                  detailAppointmentPsychologt?.user.firstname as string,
                  detailAppointmentPsychologt?.user.lastname as string
                )}
              </p>
              <p className="text-netral-primary  font-medium">
                Gender: {detailAppointmentPsychologt?.user.gender}
              </p>
              <p className="text-netral-primary  font-medium">
                Email: {detailAppointmentPsychologt?.user.email}
              </p>
              <p className="text-netral-primary  font-medium">
                Phone: {detailAppointmentPsychologt?.user.phone_number}
              </p>
              <p className="text-netral-primary  font-medium">
                Day & Time: {detailAppointmentPsychologt?.date},{" "}
                {detailAppointmentPsychologt?.start_time} -
                {detailAppointmentPsychologt?.end_time}
              </p>
              {detailAppointmentPsychologt?.status === "ongoing" && (
                <div className="flex flex-row space-x-2 mt-4">
                  <ButtonDetailPatient />
                </div>
              )}
            </div>
          </Card>

          {/* AI Analysis Results Card */}
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white w-full">
            <h3 className="font-bold text-netral-primary text-lg md:text-xl mb-4">
              AI Analysis Results
            </h3>
            <p className="text-netral-primary font-medium">
              Probability of Stress: 65%
            </p>
            <p className="text-netral-primary  font-medium">
              Probability of Anxiety: 40%
            </p>
            <p className="text-netral-primary  font-medium">
              Probability of Depression: 70%
            </p>
            <p className="text-netral-primary  font-medium">
              last analyzed: 01 Oct, 2024
            </p>
          </Card>

          <div className="w-full">
            <Link href="/dashboard-psychologist/complaint">
              <Button className="bg-[#27374D] text-white px-4 py-3 rounded-full w-full">
                See Patient Complaint
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column (Chat Section) */}
        <div className="flex flex-col  w-full ">
          <div className="relative p-4 md:p-6 rounded-[30px]  bg-white w-full h-[530px]">
            <ChatOne
              userName={user.firstname + user.lastname}
              userId={user.id}
              channelId={detailAppointmentPsychologt?.channel_id as string}
            />
            {detailAppointmentPsychologt?.status !== "ongoing" && (
              <div className="absolute bg-primary-custom_primary text-white bottom-0 left-0 right-0 p-5 rounded-b-[30px] text-center">
                Cant sent messsage not in appointment schedule
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
