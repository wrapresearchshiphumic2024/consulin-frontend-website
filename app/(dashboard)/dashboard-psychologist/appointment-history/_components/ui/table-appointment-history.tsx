import { Appointment_history, columns } from "./colums";
import { DataTable } from "./data-table";

async function getData(): Promise<Appointment_history[]> {
  // Fetch data from your API here.
  return [
    {
      id: "m5gr84i9",
      patient_name: "Ken Smith", // Nama pasien
      date: "2024-10-01", // Tanggal janji
      status: "success", // Status janji
    },
    {
      id: "3u1reuv4",
      patient_name: "Abe Jones", // Nama pasien
      date: "2024-10-02", // Tanggal janji
      status: "success", // Status janji
    },
    {
      id: "derv1ws0",
      patient_name: "Monserrat Lee", // Nama pasien
      date: "2024-10-03", // Tanggal janji
      status: "processing", // Status janji
    },
    {
      id: "5kma53ae",
      patient_name: "Silas Brown", // Nama pasien
      date: "2024-10-04", // Tanggal janji
      status: "success", // Status janji
    },
    {
      id: "bhqecj4p",
      patient_name: "Carmella White", // Nama pasien
      date: "2024-10-05", // Tanggal janji
      status: "cancelled", // Status janji
    },
  ];
}
export default async function TableAppointmentHistory() {
  const data = await getData();
  return <DataTable columns={columns} data={data} />;
}
