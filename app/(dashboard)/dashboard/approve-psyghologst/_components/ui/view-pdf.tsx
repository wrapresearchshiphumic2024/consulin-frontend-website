"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ViewPdfProps {
  label: string;
  url_pdf?: string;
}

// Komponen ViewPdf
export default function ViewPdf({ label, url_pdf }: ViewPdfProps) {
  return (
    <Dialog>
      <DialogTrigger className="bg-primary-custom_primary text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base  ">
        {label}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>PDF {label}</DialogTitle>
        </DialogHeader>
        <embed
          src={url_pdf}
          type="application/pdf"
          className="w-full h-[600px]"
        />
      </DialogContent>
    </Dialog>
  );
}
