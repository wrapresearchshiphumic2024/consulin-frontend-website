import FormSchedule from "../_components/form-shedule";
import { auth } from "@/auth";
import { getSchedule } from "@/lib/services/psychologist/psychologist-service";

export default async function ManageSchedulePsycholog() {
  const session = await auth();
  const schedule = await getSchedule(session?.user.access_token);
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Edit Schedule
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Edit your availability for your appointment with patient
      </p>
      <div className="flex gap-5 flex-col lg:flex-row mt-10">
        <div className="bg-secondary-custom_secondary p-5 flex-1 rounded-3xl">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Set Consultations Schedule
            </h3>
          </center>
          <FormSchedule
            schedule={schedule}
            session={session?.user.access_token}
          />
        </div>
      </div>
    </>
  );
}
