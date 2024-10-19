"use client";

import IconArrowDown from "@/components/icons/icon-arrow-down";
import IconArrowUp from "@/components/icons/icon-arrow-up";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown2, ArrowDown3, ArrowLeft2, ArrowLeft3 } from "iconsax-react";
import { ArrowUpDown } from "lucide-react";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Appointment_history = {
  id: string;
  patient_name: string;
  date: string;
  status: string;
};

export const columns: ColumnDef<Appointment_history>[] = [
  {
    accessorKey: "id",
    header: () => {
      return <p className="text-netral-primary">No</p>;
    },
    cell: ({ row }) => {
      return <p>{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "patient_name",
    header: ({ column }) => {
      return (
        <Button
          className="text-netral-primary bg-[#DDE7F9] hover:bg-[#DDE7F9] focus:bg-[#DDE7F9] active:bg-[#DDE7F9] flex gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Patient Name
          {column.getIsSorted() === "asc" ? <IconArrowUp /> : <IconArrowDown />}
        </Button>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          className="text-netral-primary bg-[#DDE7F9] hover:bg-[#DDE7F9] focus:bg-[#DDE7F9] active:bg-[#DDE7F9]  flex gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          {column.getIsSorted() === "asc" ? <IconArrowUp /> : <IconArrowDown />}
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          className="text-netral-primary bg-[#DDE7F9] hover:bg-[#DDE7F9] focus:bg-[#DDE7F9] active:bg-[#DDE7F9]  flex gap-2 "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          {column.getIsSorted() === "asc" ? <IconArrowUp /> : <IconArrowDown />}
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <p
          className={cn(
            row.original.status === "cancelled"
              ? "text-red-500"
              : "text-netral-primary",
            "font-semibold"
          )}
        >
          {row.original.status}
        </p>
      );
    },
  },
  {
    id: "actions",
    header: () => {
      return <p className="text-netral-primary">Action</p>;
    },
    cell: ({ row }) => {
      return <Button>Detail</Button>;
    },
  },
];
