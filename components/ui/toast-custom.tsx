"use client";
import { X } from "lucide-react";
import { toast } from "sonner";
export function ToastSuccess({ t, label }: { t: any; label: string }) {
  return (
    <div className="bg-[#28A745] p-3 rounded text-white relative md:w-60 w-full  text-center">
      <button
        className="absolute top-0 right-0"
        onClick={() => toast.dismiss(t)}
      >
        <X className="h-4 w-4" />
      </button>
      {label}
    </div>
  );
}
export function ToastFailed({ t, label }: { t: any; label: string }) {
  return (
    <div className="bg-[#DC3545]  p-3 rounded text-white relative   md:w-60 w-full  text-center">
      <button
        className="absolute top-0 right-0"
        onClick={() => toast.dismiss(t)}
      >
        <X className="h-4 w-4" />
      </button>
      {label}
    </div>
  );
}
