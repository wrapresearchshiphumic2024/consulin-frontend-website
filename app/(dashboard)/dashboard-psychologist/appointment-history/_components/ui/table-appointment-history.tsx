import { Appointment } from "@/types/psychologist/psychologist-type-data";
import { columns } from "./colums";
import { DataTable } from "./data-table";

export default function TableAppointmentHistory({
  appointment,
}: {
  appointment: Appointment[];
}) {
  return <DataTable columns={columns} data={appointment} />;
}
