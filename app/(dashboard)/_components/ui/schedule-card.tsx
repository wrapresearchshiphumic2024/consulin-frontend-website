"use client";
import { Button } from "@/components/ui/button";

interface ScheduleCardProps {
  day: string;
  status: string;
  time: string;
}

export default function SheduleCard({ day, status, time }: ScheduleCardProps) {
  return (
    <div className="w-full bg-primary-custom_primary text-secondary-custom_secondary p-8 flex justify-between flex-col gap-3 rounded-2xl">
      <h3 className="text-xl font-semibold">{day}</h3>
      <div>
        <p>Status: {status}</p>
        <p>{time}</p>
      </div>
      <div>
        <Button
          className="bg-secondary-custom_secondary text-primary-custom_primary"
          type="button"
        >
          Delete Schedule
        </Button>
      </div>
    </div>
  );
}
