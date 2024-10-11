import IconPsychology from "@/components/icons/icon-psychology";
import CardDashboard from "../_components/ui/card-dashboard";

import IconPatient from "@/components/icons/icon-patient";
import NotificationCard from "./_components/notification";
import IconConsultation from "@/components/icons/icon-consultation";
const notifications = [
  {
    name: "Maria Jhonson",
    time: "12 Oct 2024, 10:00",
    status: "ongoing",
  },
  {
    name: "John Doe",
    time: "11 Oct 2024, 15:30",
    status: "waiting",
  },
  {
    name: "Alice Smith",
    time: "10 Oct 2024, 09:15",
    status: "waiting",
  },
  {
    name: "Robert Brown",
    time: "09 Oct 2024, 14:45",
    status: "waiting",
  },
  {
    name: "Emily Davis",
    time: "08 Oct 2024, 11:20",
    status: "waiting",
  },
];

export default function DashboardPsychologist() {
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Hello, Consulin Psikologist!
      </h2>
      <p>Have a good day!</p>

      <div className="grid md:grid-cols-2 grid-rows-3 gap-4 mt-10">
        <div className="order-1 lg:order-1">
          <CardDashboard
            label="Total Weekly Consultation"
            total="10.1k"
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
              {notifications.map(({ name, time, status }, index) => (
                <NotificationCard
                  key={index}
                  name={name}
                  time={time}
                  status={status}
                  background="bg-[#DDE7F9]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-3">
          <CardDashboard
            label="Total Consultation"
            total="19.2k"
            status="Consultation"
            icon={<IconPsychology className="lg:w-16 lg:h-16 w-12 h-12 " />}
          />
        </div>
        <div className="order-3 lg:order-4">
          <CardDashboard
            label="Today On-Going Consultation"
            total="400"
            status="Consultation"
            icon={<IconConsultation className="md:w-16 md:h-16  w-12 h-12" />}
          />
        </div>
      </div>
    </>
  );
}
