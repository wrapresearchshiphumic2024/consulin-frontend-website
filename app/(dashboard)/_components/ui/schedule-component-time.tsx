"use client";

import { cn } from "@/lib/utils";
import { Time } from "@/types/psychologist/psychologist-type-data";

const days = [
  { label: "09:00-10:00", value: { start: "09:00", end: "10:00" } },
  { label: "11:00-12:00", value: { start: "11:00", end: "12:00" } },
  { label: "13:00-14:00", value: { start: "13:00", end: "14:00" } },
  { label: "14:00-15:00", value: { start: "14:00", end: "15:00" } },
  { label: "15:00-16:00", value: { start: "15:00", end: "16:00" } },
  { label: "16:00-17:00", value: { start: "16:00", end: "17:00" } },
];

export default function ScheduleComponentTime({
  value = [],
  onChange,
  times,
  isSingleSelect = false,
  disabled = false,
}: {
  value: { start: string; end: string }[];
  onChange: (days: { start: string; end: string }[]) => void;
  times?: Time[];
  isSingleSelect?: boolean;
  disabled?: boolean;
}) {
  const handleSelectDay = (selectedDay: { start: string; end: string }) => {
    if (disabled) return;

    const selectedDays = Array.isArray(value) ? value : [];

    if (isSingleSelect) {
      if (
        selectedDays.length > 0 &&
        selectedDays[0].start === selectedDay.start &&
        selectedDays[0].end === selectedDay.end
      ) {
        onChange([]);
      } else {
        onChange([selectedDay]);
      }
    } else {
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
      ? value.length > 0 &&
          value[0].start === itemValue.start &&
          value[0].end === itemValue.end
      : Array.isArray(value) &&
          value.some(
            (day) => day.start === itemValue.start && day.end === itemValue.end
          );
  };

  const filteredDays =
    times && times.length > 0
      ? days.filter((day) =>
          times.some(
            (time) =>
              time.start === day.value.start && time.end === day.value.end
          )
        )
      : days;

  return (
    <div>
      <h3>Set Available Time Slots:</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:w-[450px] w-full mt-5">
        {filteredDays.map((item) => (
          <div
            key={item.value.start}
            className={cn(
              isSelected(item.value)
                ? "bg-[#27374D] text-white"
                : "bg-[#27374D]/10 text-netral-primary",
              disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
              "w-full h-12 flex items-center justify-center rounded-xl shadow-md px-3 hover:border-netral-primary hover:border-2"
            )}
            onClick={() => !disabled && handleSelectDay(item.value)}
          >
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
