"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const days = [
  { label: "Mon", value: "Monday" },
  { label: "Tue", value: "Tuesday" },
  { label: "Wed", value: "Wednesday" },
  { label: "Thu", value: "Thursday" },
  { label: "Fri", value: "Friday" },
  { label: "Sat", value: "Saturday" },
  { label: "Sun", value: "Sunday" },
];

export default function ScheduleComponentDay({
  value = [],
  onChange,
  isSingleSelect = false,
  disabled = false,
}: {
  value: string[] | string;
  onChange: (days: string[] | string) => void;
  isSingleSelect?: boolean;
  disabled?: boolean;
}) {
  const handleSelectDay = (selectedDay: string) => {
    if (disabled) return;

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
      <h3>Choose {isSingleSelect ? "a day" : "days"}:</h3>
      <div className="flex gap-3 mt-4 flex-wrap">
        {days.map((item) => (
          <div
            key={item.value}
            className={cn(
              isSelected(item.value)
                ? "bg-[#27374D] text-white"
                : "bg-[#27374D]/10 text-netral-primary",
              disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
              "w-20 h-28 flex items-center justify-center rounded-xl shadow-md hover:border-netral-primary hover:border-2"
            )}
            onClick={() => !disabled && handleSelectDay(item.value)} // Nonaktifkan klik jika `disabled`
          >
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
