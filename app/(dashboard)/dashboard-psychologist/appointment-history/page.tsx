import { auth } from "@/auth";
import TableAppointmentHistory from "./_components/ui/table-appointment-history";
import { getAppointmentHistory } from "@/lib/services/psychologist/psychologist-service";
import TextSection from "../../_components/ui/text-section";

export default async function AppointmentHistory() {
  const session = await auth();
  const appointment = await getAppointmentHistory(session?.user.access_token);
  console.log(appointment);
  return (
    <>
      <TextSection
        title="Appointment History"
        subtitle="Tracking and Managing Your Consultation Sessions"
      />

      <div className="bg-secondary-custom_secondary p-5 mt-10 rounded-3xl w-full">
        <div className="w-72 sm:w-96 md:w-full overflow-auto">
          <TableAppointmentHistory appointment={appointment} />
        </div>
      </div>
    </>
  );
}
