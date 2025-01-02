import App from "../../../_components/layouts/chat";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import IconMeet from "@/components/icons/icon-meet";
import { auth } from "@/auth";
import {
  getAppointmentDetailPatient,
  getProfilePatient,
} from "@/lib/services/patient/patient-service";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  formatCommaSeparated,
  formatFullName,
  getInitials,
} from "@/lib/helpers/string-helpers";
import { cn } from "@/lib/utils";
import ChatOne from "@/app/(dashboard)/_components/layouts/chat-one";

export default async function DetailAppointment({
  params,
}: {
  params: { uuid: string };
}) {
  const session = await auth();
  const detailAppointmentPatient = await getAppointmentDetailPatient(
    session?.user.access_token,
    params.uuid
  );
  const userProfile = await getProfilePatient(session?.user.access_token);

  const userId = userProfile.id;
  const userName = formatFullName(userProfile.firstname, userProfile.lastname);

  if (!detailAppointmentPatient) {
    return notFound();
  }

  const { status, channel_id, user, date, start_time, end_time, duration } =
    detailAppointmentPatient;

  return (
    <>
      {/* Header Section */}
      <div className="grid grid-cols-[auto_1fr] gap-3 mb-5">
        <Link href="/dashboard-patient">
          <Button className="p-2 rounded-full bg-secondary-custom_secondary hover:bg-white shadow-md h-[35px] w-[35px] flex items-center justify-center">
            <Image
              src="/assets/icons/back.png"
              alt="Back"
              width={10}
              height={10}
            />
          </Button>
        </Link>
        <div className="pl-3">
          <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
            Detail Appointment
          </h2>
          <p className="mt-1 text-[#1E034280] font-semibold">
            View appointment details on this page and chat with psychologist
          </p>
        </div>
      </div>

      {/* Meet Button for Ongoing Status */}
      {status === "ongoing" && (
        <div className="flex justify-end my-3">
          <Link href={`/meet?room_id=${user.id}`} target="_blank">
            <Button className="bg-primary-custom_primary rounded-full">
              Start a Meet
              <IconMeet className="ml-2" />
            </Button>
          </Link>
        </div>
      )}

      <div
        className={cn(
          status === "ongoing" ? "lg:grid-cols-3" : "xl:grid-cols-[1.2fr_2fr]",
          "grid grid-cols-1 gap-5"
        )}
      >
        {/* User and Appointment Details */}
        <div className={cn(status !== "ongoing" && "space-y-4 col-span-1")}>
          <div className="flex flex-col rounded-2xl bg-secondary-custom_secondary">
            {/* Status Header */}
            <div
              className={cn(
                status === "ongoing" && "bg-[#28A745]",
                (status === "complete" || status == "waiting") &&
                  "bg-primary-custom_primary",
                status === "canceled" && "bg-[#DC3545]",
                "w-full rounded-t-2xl text-white text-center py-3 font-bold text-lg capitalize "
              )}
            >
              {status}
            </div>

            {/* Avatar and User Info */}
            {status !== "ongoing" && (
              <div className="flex flex-col items-center mt-4">
                <Avatar className="rounded-full w-20 h-20 md:w-32 md:h-32 mb-4 border-4 border-white shadow-md">
                  <AvatarImage
                    src={user.profile_picture || ""}
                    alt={`${user.firstname} ${user.lastname}`}
                  />
                  <AvatarFallback>
                    {getInitials(user.firstname, user.lastname)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mt-5 text-[#1E0342]">
                  {formatFullName(user.firstname, user.lastname)}
                </h3>
              </div>
            )}

            {/* Appointment Information */}
            <div className="flex flex-col p-6 space-y-3">
              {status === "ongoing" && (
                <h3 className="font-bold text-lg text-[#1E0342]">
                  Personal Information
                </h3>
              )}
              <p className="text-[#1E0342]">
                Name: {formatFullName(user.firstname, user.lastname)}
              </p>
              <p className="text-[#1E0342]">Gender: {user.gender}</p>
              <p className="text-[#1E0342]">Email: {user.email}</p>
              <p className="text-[#1E0342]">
                Specialization:{" "}
                {formatCommaSeparated(user.psychologist?.specialization || [])}
              </p>
              <p className="text-[#1E0342]">Experience: 4 years</p>
            </div>
          </div>

          {/* Appointment Information for Ongoing Status */}
          {status === "ongoing" && (
            <div className="flex flex-col p-6 bg-secondary-custom_secondary rounded-2xl space-y-3">
              <h3 className="font-bold text-lg text-[#1E0342]">
                Appointment Information
              </h3>
              <p className="text-[#1E0342]">Date: {date}</p>
              <p className="text-[#1E0342]">
                Time: {start_time} - {end_time}
              </p>
              <p className="text-[#1E0342]">
                Status: <span className="capitalize">{status}</span>
              </p>
              <p className="text-[#1E0342]">Duration: {duration}</p>
            </div>
          )}
        </div>
        {/* Right Column for Appointment Details */}

        {status === "ongoing" ? (
          <div className="lg:col-span-2">
            <div className="p-4 md:p-6 rounded-2xl bg-white h-[530px]">
              <ChatOne
                userName={userName}
                userId={user.id}
                channelId={channel_id as string}
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            <div className="p-6 bg-secondary-custom_secondary rounded-2xl space-y-3">
              <h3 className="font-bold text-lg text-[#1E0342]">
                Appointment Information
              </h3>
              <p className="text-[#1E0342]">Date: {date}</p>
              <p className="text-[#1E0342]">
                Time: {start_time} - {end_time}
              </p>
              <p className="text-[#1E0342]">
                Status: <span className="capitalize">{status}</span>
              </p>
              <p className="text-[#1E0342]">Duration: {duration}</p>
            </div>
            <div className="p-6 bg-secondary-custom_secondary rounded-2xl space-y-3">
              <h3 className="font-bold text-lg text-[#1E0342]">Note</h3>
              <p className="text-[#1E0342]">{detailAppointmentPatient.note}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
