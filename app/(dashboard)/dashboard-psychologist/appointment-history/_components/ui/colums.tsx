"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
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
          variant="ghost"
          className="text-netral-primary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Patient Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-netral-primary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-netral-primary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
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
