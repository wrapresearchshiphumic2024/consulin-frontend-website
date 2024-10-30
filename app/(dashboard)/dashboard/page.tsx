import IconPsychology from "@/components/icons/icon-psychology";
import CardDashboard from "../_components/ui/card-dashboard";
import IconPatient from "@/components/icons/icon-patient";
import IconConsultation from "@/components/icons/icon-consultation";
import IconCompletion from "@/components/icons/icon-completion";
import { auth } from "@/auth";
import { getDashboardAdminData } from "@/services/admin/admin-service";

export default async function Dashboard() {
  const session = await auth();
  const {
    psychologists,
    total_patient,
    ongoing_appointments,
    completed_appointments,
  } = await getDashboardAdminData(session?.user.access_token);
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Hello, Consulife Admins!
      </h2>
      <p className="mt-3 text-netral-primary  font-medium ">Have a good day!</p>

      <div className="grid md:grid-cols-2 grid-rows-2 gap-4 mt-10 ">
        <div className="order-1 lg:order-1">
          <CardDashboard
            label="Total Psychologists"
            total={String(psychologists)}
            status="Psychologists"
            icon={<IconPsychology className=" md:w-16 md:h-16 w-12 h-12 " />}
          />
        </div>

        <div className="md:row-span-2 order-3 md:order-2 ">
          <div className="bg-secondary-custom_secondary rounded-3xl md:p-5 p-3">
            <center>
              <h3 className="text-2xl font-semibold text-netral-primary">
                Total Consultation
              </h3>
            </center>
            <div className="flex flex-col gap-4 mt-5 fe">
              <CardDashboard
                label="On-Going Consultation"
                total={String(ongoing_appointments)}
                status="Psychologists"
                background="bg-[#DDE7F9]"
                icon={
                  <IconConsultation className="md:w-16 md:h-16 w-12 h-12" />
                }
                styleLabel="md:text-lg"
                styleTotal="md:text-2xl"
                styleStatus="md:text-lg"
              />
              <CardDashboard
                label="Completed Consultation"
                total={String(completed_appointments)}
                status="Psychologists"
                background="bg-[#DDE7F9]"
                icon={<IconCompletion className="md:w-16 md:h-16 w-12 h-12" />}
                styleLabel="md:text-lg"
                styleTotal="md:text-2xl"
                styleStatus="md:text-lg"
              />
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-3">
          <CardDashboard
            label="Total Patient"
            total={String(total_patient)}
            status="Patient"
            icon={<IconPatient className=" md:w-16 md:h-16 w-12 h-12" />}
          />
        </div>
      </div>
    </>
  );
}
