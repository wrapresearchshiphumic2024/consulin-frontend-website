import TableAppointmentHistory from "./_components/ui/table-appointment-history";

export default function AppointmentHistory() {
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Appointment History
      </h2>
      <p>Tracking and Managing Your Consultation Sessions</p>
      <div className="bg-secondary-custom_secondary p-5 mt-10 rounded-3xl">
        <TableAppointmentHistory />
      </div>
    </>
  );
}
