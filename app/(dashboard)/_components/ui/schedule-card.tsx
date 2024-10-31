"use client";
import { Button } from "@/components/ui/button";

interface ScheduleCardProps {
  day: string;

  time: Time;
}
interface Time {
  start: string;
  end: string;
}

export default function SheduleCard({ day, time }: ScheduleCardProps) {
  return (
    <div className="w-full bg-primary-custom_primary text-secondary-custom_secondary p-8 flex justify-between flex-col gap-3 rounded-2xl">
      <h3 className="text-xl font-semibold capitalize">Every {day}</h3>
      <div>
        <p>Status: Scheduled</p>
        <p>
          {time.start} - {time.end}
        </p>
      </div>
      <div>
        {/* <Button
          className="bg-secondary-custom_secondary text-primary-custom_primary"
          type="button"
        >
          Delete Schedule
        </Button> */}
      </div>
    </div>
  );
}
