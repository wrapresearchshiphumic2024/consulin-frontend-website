"use client";

import { cn } from "@/lib/utils";

// Time slots dengan objek `start` dan `end`
const days = [
  { label: "09.00-10.00", value: { start: "09.00", end: "10.00" } },
  { label: "11.00-12.00", value: { start: "11.00", end: "12.00" } },
  { label: "13.00-14.00", value: { start: "13.00", end: "14.00" } },
  { label: "14.00-15.00", value: { start: "14.00", end: "15.00" } },
  { label: "15.00-16.00", value: { start: "15.00", end: "16.00" } },
  { label: "16.00-17.00", value: { start: "16.00", end: "17.00" } },
];

export default function ScheduleComponentTime({
  value = [],
  onChange,
  isSingleSelect = false,
}: {
  value: { start: string; end: string }[] | { start: string; end: string };
  onChange: (
    days: { start: string; end: string }[] | { start: string; end: string }
  ) => void;
  isSingleSelect?: boolean;
}) {
  const handleSelectDay = (selectedDay: { start: string; end: string }) => {
    if (isSingleSelect) {
      if (value === selectedDay) {
        onChange({ start: "", end: "" });
      } else {
        onChange(selectedDay);
      }
    } else {
      const selectedDays = Array.isArray(value) ? value : [];
      if (
        selectedDays.some(
          (day) =>
            day.start === selectedDay.start && day.end === selectedDay.end
        )
      ) {
        onChange(
          selectedDays.filter(
            (day) =>
              day.start !== selectedDay.start && day.end !== selectedDay.end
          )
        );
      } else {
        onChange([...selectedDays, selectedDay]);
      }
    }
  };

  const isSelected = (itemValue: { start: string; end: string }) => {
    return isSingleSelect
      ? value === itemValue
      : Array.isArray(value) &&
          value.some(
            (day) => day.start === itemValue.start && day.end === itemValue.end
          );
  };

  return (
    <div>
      <h3>Set Available Time Slots:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:w-[450px] w-full mt-5">
        {days.map((item) => (
          <div
            key={item.value.start}
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
    </div>
  );
}
