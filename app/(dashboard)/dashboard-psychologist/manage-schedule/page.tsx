import { ScrollArea } from "@/components/ui/scroll-area";
import FormSchedule from "./_components/form-shedule";

import { auth } from "@/auth";
import { getSchedule } from "@/services/psychologist/psychologist-service";
import ScheduleCard from "../../_components/ui/schedule-card";
import AppointmentSwitch from "./_components/appointment-switch";

export default async function ManageSchedulePsycholog() {
  const session = await auth();
  const schedule = await getSchedule(session?.user.access_token);
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Manage Schedule
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Set your availability for patients to book appointments
      </p>
      <div className="flex items-center my-3 justify-end ">
        <div className="flex items-center bg-secondary-custom_secondary rounded-full p-3 gap-3 ">
          <AppointmentSwitch
            appointmetStatus={schedule.status === "active"}
            session={session?.user.access_token}
            empty={schedule.days.length === 0}
          />
        </div>
      </div>
      <div className="flex gap-5 flex-col lg:flex-row ">
        <div className="bg-secondary-custom_secondary p-5 flex-1 rounded-3xl">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Set Consultations Schedule
            </h3>
          </center>
          <FormSchedule disabled={true} schedule={schedule} />
        </div>

        <div className="bg-secondary-custom_secondary p-5 rounded-2xl flex-1 lg:flex-none w-full lg:w-1/3">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Your Schedule
            </h3>
          </center>
          {schedule.days.length === 0 ? (
            <div className="flex items-center justify-center h-full p-6">
              <div className="w-full bg-[#DEE7F9] h-20 flex justify-center items-center rounded-2xl text-netral-primary p-3 text-center">
                Your schedule will appear here
              </div>
            </div>
          ) : (
            <ScrollArea className="w-full mt-10 h-[450px]">
              <div className="p-2">
                {schedule.days.map((day) =>
                  day.times.map((time) => (
                    <>
                      <ScheduleCard key={day.id} day={day.day} time={time} />
                      <br />
                    </>
                  ))
                )}
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
    </>
  );
}
