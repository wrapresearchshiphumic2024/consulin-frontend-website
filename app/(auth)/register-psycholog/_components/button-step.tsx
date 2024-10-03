import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface CustomButtonProps {
  currentPage: number;
  pageIndex: number;
  page: { status: boolean }[];
  onClickPage: (pageNumber: number) => void;
  label: string;
}

export default function ButtonStep({
  currentPage,
  pageIndex,
  page,
  onClickPage,
  label,
}: CustomButtonProps) {
  const isPrimary = currentPage === pageIndex || page[pageIndex].status;

  return (
    <Button
      className={cn(
        "rounded-full h-[50px] w-[50px]",
        isPrimary
          ? "bg-primary-custom_primary"
          : "bg-secondary-custom_secondary text-primary-custom_primary border-primary-custom_primary border-2 hover:text-secondary-custom_secondary"
      )}
      onClick={() => onClickPage(pageIndex)}
    >
      {label}
    </Button>
  );
}
