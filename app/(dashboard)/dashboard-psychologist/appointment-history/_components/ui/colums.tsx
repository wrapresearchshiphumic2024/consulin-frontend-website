"use client";

import IconArrowDown from "@/components/icons/icon-arrow-down";
import IconArrowUp from "@/components/icons/icon-arrow-up";
import { Button } from "@/components/ui/button";
import { formatFullName } from "@/helpers/string-helpers";
import { cn } from "@/lib/utils";
import { Appointment } from "@/types/psychologist/psychologist-type-data";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Appointment>[] = [
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
    cell: ({ row }) => {
      return (
        <p>
          {formatFullName(
            row.original.user.firstname,
            row.original.user.lastname
          )}
        </p>
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
