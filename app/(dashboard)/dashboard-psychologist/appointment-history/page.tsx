import { auth } from "@/auth";
import TableAppointmentHistory from "./_components/ui/table-appointment-history";
import { getAppointmentHistory } from "@/services/psychologist/psychologist-service";

export default async function AppointmentHistory() {
  const session = await auth();
  const appointment = await getAppointmentHistory(session?.user.access_token);
  console.log(appointment);
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Appointment History
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Tracking and Managing Your Consultation Sessions
      </p>

      <div className="bg-secondary-custom_secondary p-5 mt-10 rounded-3xl w-full">
        <div className="w-72 sm:w-96 md:w-full overflow-auto">
          <TableAppointmentHistory appointment={appointment} />
        </div>
      </div>
    </>
  );
}
