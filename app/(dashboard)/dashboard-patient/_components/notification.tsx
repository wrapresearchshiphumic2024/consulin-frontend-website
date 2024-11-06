import { cn } from "@/lib/utils";
import StatusBadge from "../../_components/ui/status-badge";

export default function NotificationCard({
  name,
  date,
  time,
  background,
  styleName,
  styletime,
  status,
}: {
  name: string;
  date: string;
  time: string;
  background?: string;
  styleName?: string;
  styletime?: string;
  status: string;
}) {
  const dateFormat = new Date(date);
  const convertedDate = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(dateFormat);
  return (
    <div
      className={cn(
        background ? background : "bg-secondary-custom_secondary ",
        "rounded-3xl p-5  flex justify-between items-center flex-wrap  gap-2"
      )}
    >
      <div className="flex flex-col  ">
        <h3
          className={cn(
            " text-md md:text-lg font-semibold text-netral-primary",
            styleName
          )}
        >
          Name: {name}
        </h3>

        <p
          className={cn(
            "text-md md:text-lg font-semibold text-netral-primary ",
            styletime
          )}
        >
          Time: {convertedDate}, {time}
        </p>
      </div>
      <div>
        <StatusBadge status={status} />
      </div>
    </div>
  );
}
