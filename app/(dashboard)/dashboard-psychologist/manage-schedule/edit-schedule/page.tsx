import TextSection from "@/app/(dashboard)/_components/ui/text-section";
import FormSchedule from "../_components/form-shedule";
import { auth } from "@/auth";
import { getSchedule } from "@/lib/services/psychologist/psychologist-service";

export default async function ManageSchedulePsycholog() {
  const session = await auth();
  const schedule = await getSchedule(session?.user.access_token);
  return (
    <>
      <TextSection
        title="Edit Schedule"
        subtitle="Edit your availability for your appointment with patient"
      />
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
