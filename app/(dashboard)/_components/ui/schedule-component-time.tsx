"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const days = [
  { label: "09.00-10.00", value: "09.00-10.00" },
  { label: "11.00-12.00", value: "11.00-12.00" },
  { label: "13.00-14.00", value: "13.00-14.00" },
  { label: "14.00-15.00", value: "14.00-15.00" },
  { label: "15.00-16.00", value: "15.00-16.00" },
  { label: "16.00-17.00", value: "16.00-17.00" },
];

export default function ScheduleComponentTime({
  value = [],
  onChange,
  isSingleSelect = false,
}: {
  value: string[] | string;
  onChange: (days: string[] | string) => void;
  isSingleSelect?: boolean;
}) {
  const handleSelectDay = (selectedDay: string) => {
    if (isSingleSelect) {
      if (value === selectedDay) {
        onChange("");
      } else {
        onChange(selectedDay);
      }
    } else {
      const selectedDays = Array.isArray(value) ? value : [];
      if (selectedDays.includes(selectedDay)) {
        onChange(selectedDays.filter((day) => day !== selectedDay));
      } else {
        onChange([...selectedDays, selectedDay]);
      }
    }
  };

  const isSelected = (itemValue: string) => {
    return isSingleSelect
      ? value === itemValue
      : (value as string[]).includes(itemValue);
  };

  return (
    <div>
      <h3>Choose {isSingleSelect ? "a time slot" : "time slots"}:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:w-[450px] w-full">
        {days.map((item) => (
          <div
            key={item.value}
            className={cn(
              isSelected(item.value)
                ? "bg-[#27374D] text-white"
                : "bg-[#27374D]/10 text-netral-primary",
              "w-full h-12 flex items-center justify-center rounded-xl shadow-md cursor-pointer px-3 hover:border-netral-primary hover:border-2"
            )}
            onClick={() => handleSelectDay(item.value)}
          >
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Repeat in every week
        </label>
      </div>
    </div>
  );
}
