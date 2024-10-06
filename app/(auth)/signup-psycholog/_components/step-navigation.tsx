import React from "react";
import ButtonStep from "./ui/button-step";

interface Step {
  label: string;
  page: number;
}

interface StepNavigationProps {
  buttonSteps: Step[];
  currentPage: number;
  page: { status: boolean }[];
  onClickPage: (pageIndex: number) => void;
}

export default function StepNavigation({
  buttonSteps,
  currentPage,
  page,
  onClickPage,
}: StepNavigationProps) {
  return (
    <div className="absolute z-10 top-[-70px] left-0 right-0 flex justify-center items-center gap-2">
      {buttonSteps.map((step, index) => (
        <React.Fragment key={index}>
          <ButtonStep
            currentPage={currentPage}
            pageIndex={step.page}
            page={page}
            onClickPage={onClickPage}
            label={step.label}
          />
          {index < buttonSteps.length - 1 && (
            <div className="bg-primary-custom_primary h-1 w-8"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
