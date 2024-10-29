"use client";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

interface ManageButtonProps {
  session: string;
  uuid: string;
  label: string;
  title: string;
  description: string;
  danger?: boolean;
  onApprove: (session: string, uuid: string) => void;
}

export default function ManageButton({
  session,
  uuid,
  label,
  title,
  description,
  onApprove,
  danger = false,
}: ManageButtonProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={cn(
            danger ? "bg-red-500" : "bg-green-500",
            " text-white px-4 py-2 rounded-lg flex-1 "
          )}
        >
          {label} {/* Menggunakan label sebagai teks tombol */}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#27374D] font-semibold">
            {title} {/* Menggunakan title untuk judul dialog */}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[#27374D]">
            {description} {/* Menggunakan description untuk deskripsi dialog */}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className={cn(
              danger ? "bg-red-500" : "bg-green-500",
              " text-white px-4 py-2 rounded-lg"
            )}
            type="button"
            onClick={() => onApprove(session, uuid)} // Memanggil fungsi saat tombol diklik
          >
            Confirm
          </AlertDialogAction>
          <AlertDialogCancel className="bg-white text-black px-6 py-2 rounded-lg">
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
