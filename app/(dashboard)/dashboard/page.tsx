import IconPsychology from "@/components/icons/icon-psychology";
import CardDashboard from "../_components/ui/card-dashboard";
import IconPatient from "@/components/icons/icon-patient";
import IconConsultation from "@/components/icons/icon-consultation";
import IconCompletion from "@/components/icons/icon-completion";
import { auth } from "@/auth";
import { getDashboardAdminData } from "@/services/admin/admin-service";
import { MultipleChart } from "./_components/ui/multiple-chart";
import { SingleChart } from "./_components/ui/single-chart";

export default async function Dashboard() {
  const session = await auth();
  const {
    psychologists,
    total_patient,
    ongoing_appointments,
    monthly_data_patient,
    monthly_data_psychologist,
    completed_appointments,
  } = await getDashboardAdminData(session?.user.access_token);

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Hello, Consulife Admins!
      </h2>
      <p className="mt-3 text-netral-primary font-medium">Have a good day!</p>

      <div className=" flex flex-col md:grid  md:grid-cols-2 gap-4 mt-10">
        {/* Grafik Data Bulanan */}
        <div className="order-1 lg:order-1 w-full">
          <MultipleChart data={monthly_data_psychologist} />
        </div>
        <div className="order-2 lg:order-2 w-full">
          <SingleChart data={monthly_data_patient} />
        </div>

        {/* Kartu Total Psychologists */}
        <div className="order-3 lg:order-3 w-full">
          <div className="flex flex-col gap-4 h-full justify-between">
            <CardDashboard
              label="Total Psychologists"
              total={String(psychologists)}
              status="Psychologists"
              icon={<IconPsychology className="md:w-12 md:h-12 w-8 h-8" />}
              styleLabel="text-sm"
              styleTotal="text-lg"
            />
            <CardDashboard
              label="Total Patient"
              total={String(total_patient)}
              status="Patient"
              icon={<IconPatient className="md:w-16 md:h-16 w-12 h-12" />}
            />
          </div>
        </div>

        {/* Total Consultation Card with Larger Size */}
        <div className="md:row-span-2 md:order-4 order-4 lg:order-4 col-span-2 md:col-span-1 w-full">
          <div className="bg-secondary-custom_secondary rounded-3xl md:p-6 p-4 h-full">
            <h3 className="text-center text-2xl font-semibold text-netral-primary mb-4">
              Total Consultation
            </h3>
            <div className="flex flex-col gap-6">
              {/* Sub-Kartu On-Going Consultation */}
              <CardDashboard
                label="On-Going Consultation"
                total={String(ongoing_appointments)}
                status="On-Going"
                background="bg-[#DDE7F9]"
                icon={
                  <IconConsultation className="md:w-16 md:h-16 w-12 h-12" />
                }
                styleLabel="text-lg "
                styleTotal="text-2xl "
                styleStatus="text-lg"
              />
              {/* Sub-Kartu Completed Consultation */}
              <CardDashboard
                label="Completed Consultation"
                total={String(completed_appointments)}
                status="Completed"
                background="bg-[#DDE7F9]"
                icon={<IconCompletion className="md:w-16 md:h-16 w-12 h-12" />}
                styleLabel="text-lg "
                styleTotal="text-2xl "
                styleStatus="text-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
