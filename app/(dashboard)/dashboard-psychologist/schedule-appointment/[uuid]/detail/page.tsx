import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import ChatOne from "../../../../_components/layouts/chat-one";

import IconMeet from "@/components/icons/icon-meet";
import { auth } from "@/auth";
import {
  getAppointmentDetailPsychologst,
  getProfilePsychologist,
} from "@/lib/services/psychologist/psychologist-service";
import {
  formatFullName,
  formatHumanReadableDate,
  formatHumanReadableDateWithHour,
} from "@/lib/helpers/string-helpers";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import ButtonBack from "@/app/(dashboard)/_components/ui/button-back";
import TextSection from "@/app/(dashboard)/_components/ui/text-section";
import ManageButtonGroup from "../../_components/manage-button-group";

export default async function DetailP({
  params,
}: {
  params: { uuid: string };
}) {
  const session = await auth();
  const { appointment, analyzer } = await getAppointmentDetailPsychologst(
    session?.user.access_token,
    params.uuid
  );
  const user = await getProfilePsychologist(session?.user.access_token);
  const userName = formatFullName(user.firstname, user.lastname);
  console.log(analyzer?.createdAt);
  if (!appointment) {
    return notFound();
  }

  return (
    <>
      <div className="flex ">
        <ButtonBack />
        <div>
          <TextSection
            title="Detail Patient"
            subtitle="View patient details on this page"
          />
        </div>
      </div>
      {(appointment?.status === "ongoing" ||
        appointment?.status === "waiting") && (
        <div className="flex justify-end">
          <Link href={`/meet?room_id=${user.id}`} target="_blank">
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
                appointment?.status === "ongoing" && "bg-[#28A745]",
                appointment?.status === "completed" ||
                  appointment?.status === "waiting"
                  ? "bg-netral-primary"
                  : "",
                appointment?.status === "canceled" && "bg-red-500",
                "w-full  rounded-t-[30px] text-white text-center py-2 font-bold capitalize"
              )}
            >
              {appointment?.status}
            </div>
            <div className="flex flex-col p-4 space-y-3">
              <p className="text-netral-primary  font-medium">
                Name:{" "}
                {formatFullName(
                  appointment?.user.firstname as string,
                  appointment?.user.lastname as string
                )}
              </p>
              <p className="text-netral-primary  font-medium capitalize">
                Gender: {appointment?.user.gender}
              </p>
              <p className="text-netral-primary  font-medium ">
                Email: {appointment?.user.email}
              </p>
              <p className="text-netral-primary  font-medium">
                Phone: {appointment?.user.phone_number}
              </p>
              <p className="text-netral-primary  font-medium">
                Day & Time: {formatHumanReadableDate(appointment?.date)},{" "}
                {appointment?.start_time} -{appointment?.end_time}
              </p>
              {(appointment?.status === "ongoing" ||
                appointment?.status === "waiting") && (
                <div className="flex flex-row space-x-2 mt-4">
                  <ManageButtonGroup
                    id={appointment.id.toString()}
                    access_token={session?.user.access_token}
                    status={appointment.status}
                    detail={false}
                  />
                </div>
              )}
            </div>
          </Card>

          {/* AI Analysis Results Card */}
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white w-full">
            <h3 className="font-bold text-netral-primary text-lg md:text-xl mb-4">
              AI Analysis Results
            </h3>
            <hr className="my-3 border-gray-300 w-[120px]" />
            <p className="text-justify">{analyzer?.complaint}</p>
            <hr className="my-3 border-gray-300 w-[120px]" />
            <p className="text-netral-primary font-medium">
              Probability of Stress: {analyzer?.stress}%
            </p>
            <p className="text-netral-primary  font-medium">
              Probability of Anxiety: {analyzer?.anxiety}%
            </p>
            <p className="text-netral-primary  font-medium">
              Probability of Depression: {analyzer?.depression}%
            </p>
            <p className="text-netral-primary  font-medium">
              last analyzed:{" "}
              {formatHumanReadableDateWithHour(analyzer?.createdAt as string)}
            </p>
          </Card>

          <div className="w-full">
            <Link
              href={`/dashboard-psychologist/complaint/${appointment.user.id}`}
            >
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
              userName={userName}
              userId={user.id}
              channelId={appointment?.channel_id as string}
            />
            {appointment?.status !== "ongoing" &&
            appointment?.status !== "waiting" ? (
              <div className="absolute bg-primary-custom_primary text-white bottom-0 left-0 right-0 p-5 rounded-b-[30px] text-center">
                Cannot send message: Not in appointment schedule
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
