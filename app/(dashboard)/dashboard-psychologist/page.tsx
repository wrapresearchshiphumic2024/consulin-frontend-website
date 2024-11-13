import IconPsychology from "@/components/icons/icon-psychology";
import CardDashboard from "../_components/ui/card-dashboard";
import IconPatient from "@/components/icons/icon-patient";

import IconConsultation from "@/components/icons/icon-consultation";
import Link from "next/link";
import { auth } from "@/auth";
import { getConsultationDataPsychologist } from "@/services/psychologist/psychologist-service";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatFullName } from "@/helpers/string-helpers";
import NotificationCard from "../_components/ui/notification";

export default async function DashboardPsychologist() {
  const session = await auth();
  const {
    consultations,
    total_weekly_consultation,
    total_consultation,
    today_ongoing_consultation,
  } = await getConsultationDataPsychologist(session?.user.access_token);

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Hello, Consulife Psikologist!
      </h2>
      <p className="mt-3 text-netral-primary font-medium">Have a good day!</p>

      <div className="grid md:grid-cols-2 grid-rows-3 gap-4 mt-10">
        <div className="order-1 lg:order-1">
          <CardDashboard
            label="Total Weekly Consultation"
            total={String(total_weekly_consultation)}
            status="Consultation"
            icon={
              <IconPatient className="md:w-16 md:h-16 w-12 h-12 text-primary-custom_primary" />
            }
          />
        </div>

        <div className="md:row-span-3 order-4 md:order-2">
          <div className="bg-secondary-custom_secondary rounded-3xl md:p-5 p-3 h-full">
            <center>
              <h3 className="text-2xl font-semibold text-netral-primary">
                Notification
              </h3>
            </center>
            <div className="flex flex-col gap-4 mt-5">
              {consultations.length === 0 ? (
                <div className="flex items-center justify-center h-full p-6">
                  <div className="w-full bg-[#DEE7F9] h-20 flex justify-center items-center rounded-2xl text-netral-primary p-3 text-center">
                    Your schedule will appear here
                  </div>
                </div>
              ) : (
                <ScrollArea className="w-full mt-10 h-[450px]">
                  <div className="p-2">
                    {consultations.map((schedule, index) => (
                      <div key={index}>
                        <Link href="/dashboard-psychologist/detail-patient">
                          <NotificationCard
                            name={formatFullName(
                              schedule.user.firstname,
                              schedule.user.lastname
                            )}
                            date={schedule.date}
                            time={`${schedule.start_time} - ${schedule.end_time}`}
                            status={schedule.status}
                            background="bg-[#DDE7F9]"
                          />
                        </Link>
                        <br />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-3">
          <CardDashboard
            label="Total Consultation"
            total={String(total_consultation)}
            status="Consultation"
            icon={<IconPsychology className="lg:w-16 lg:h-16 w-12 h-12 " />}
          />
        </div>
        <div className="order-3 lg:order-4">
          <CardDashboard
            label="Today On-Going Consultation"
            total={String(today_ongoing_consultation)}
            status="Consultation"
            icon={<IconConsultation className="md:w-16 md:h-16  w-12 h-12" />}
          />
        </div>
      </div>
    </>
  );
}
