import Link from "next/link";
import NotificationCard from "./_components/notification";

import { ScrollArea } from "@/components/ui/scroll-area";

const notifications = [
  {
    name: "Maria Jhonson",
    time: "12 Oct 2024, 10:00",
    status: "On-going",
  },
  {
    name: "John Doe",
    time: "11 Oct 2024, 15:30",
    status: "waiting",
  },
  {
    name: "Alice Smith",
    time: "10 Oct 2024, 09:15",
    status: "Cancelled",
  },
  {
    name: "Robert Brown",
    time: "09 Oct 2024, 14:45",
    status: "waiting",
  },
  {
    name: "Emily Davis",
    time: "08 Oct 2024, 11:20",
    status: "Cancelled",
  },
];

export default function DetailAppointment() {
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Hello, Welcome To Consulin!
      </h2>
      <p className="mt-3">Have a good day!</p>
      <div className="flex gap-5 flex-col lg:flex-row mt-10">
        <div className="bg-secondary-custom_secondary p-5 flex-1 rounded-3xl">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Your Appointment
            </h3>
          </center>
          <div className="flex flex-col gap-2 ">
            <ScrollArea className="w-full mt-10 h-[450px]">
              <div className="p-2">
                {notifications.map(({ name, time, status }, index) => (
                  <>
                    <Link href="/dashboard-patient/detail-appointment">
                      <NotificationCard
                        key={index}
                        name={name}
                        time={time}
                        status={status}
                        background="bg-[#DDE7F9]"
                      />
                    </Link>
                    <br />
                  </>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className="bg-secondary-custom_secondary p-5 rounded-2xl flex-1 w-full ">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Appointment History
            </h3>
          </center>
          <div className="flex flex-col gap-4 ">
            <ScrollArea className="w-full mt-10 h-[450px]">
              <div className="p-2">
                {notifications.map(({ name, time, status }, index) => (
                  <>
                    <NotificationCard
                      key={index}
                      name={name}
                      time={time}
                      status={status}
                      background="bg-[#DDE7F9]"
                    />
                    <br />
                  </>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
}
