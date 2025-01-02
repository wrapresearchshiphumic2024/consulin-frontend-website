import Link from "next/link";
import NotificationCard from "../_components/ui/notification";
import { ScrollArea } from "@/components/ui/scroll-area";
import { auth } from "@/auth";
import { getAppointmentPatient } from "@/lib/services/patient/patient-service";
import { formatFullName } from "@/lib/helpers/string-helpers";

export default async function DetailAppointment() {
  const session = await auth();
  const { upcoming_appointments, history } = await getAppointmentPatient(
    session?.user.access_token
  );

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Hello, Welcome To Consulife!
      </h2>
      <p className="mt-3 text-netral-primary font-medium">Have a good day!</p>
      <div className="flex gap-5 flex-col lg:flex-row mt-10">
        {/* Upcoming Appointments Section */}
        <div className="bg-secondary-custom_secondary p-5 flex-1 rounded-3xl">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Your Upcoming Appointments
            </h3>
          </center>
          {upcoming_appointments.length === 0 ? (
            <div className="flex items-center justify-center h-full p-6">
              <div className="w-full bg-[#DEE7F9] h-20 flex justify-center items-center rounded-2xl text-netral-primary p-3 text-center">
                Your upcoming appointments will appear here
              </div>
            </div>
          ) : (
            <ScrollArea className="w-full mt-10 h-[450px]">
              <div className="p-2">
                {upcoming_appointments.map((appoint, index) => (
                  <div key={index}>
                    <Link
                      href={`/dashboard-patient/${appoint.id}/detail-appointment`}
                    >
                      <NotificationCard
                        name={formatFullName(
                          appoint.user.firstname,
                          appoint.user.lastname
                        )}
                        date={appoint.date}
                        time={`${appoint.start_time} - ${appoint.end_time}`}
                        status={appoint.status}
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

        {/* Appointment History Section */}
        <div className="bg-secondary-custom_secondary p-5 rounded-2xl flex-1 w-full">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Appointment History
            </h3>
          </center>

          {history.length === 0 ? (
            <div className="flex items-center justify-center h-full p-6">
              <div className="w-full bg-[#DEE7F9] h-20 flex justify-center items-center rounded-2xl text-netral-primary p-3 text-center">
                Your appointment history will appear here
              </div>
            </div>
          ) : (
            <ScrollArea className="w-full mt-10 h-[450px]">
              <div className="p-2">
                {history.map((appoint, index) => (
                  <div key={index}>
                    <Link
                      href={`/dashboard-patient/${appoint.id}/detail-appointment`}
                    >
                      <NotificationCard
                        name={formatFullName(
                          appoint.user.firstname,
                          appoint.user.lastname
                        )}
                        date={appoint.date}
                        time={`${appoint.start_time} - ${appoint.end_time}`}
                        status={appoint.status}
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
    </>
  );
}
