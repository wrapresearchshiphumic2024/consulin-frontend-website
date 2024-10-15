import { cn } from "@/lib/utils";
import StatusBadge from "../../_components/ui/status-badge";

export default function NotificationCard({
  name,
  time,
  background,
  styleName,
  styletime,
  status,
}: {
  name: string;
  time: string;
  background?: string;

  styleName?: string;
  styletime?: string;
  status: string;
}) {
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
          Name:{name}
        </h3>

        <p
          className={cn(
            "text-md md:text-lg font-semibold text-netral-primary ",
            styletime
          )}
        >
          Time:{time}
        </p>
      </div>
      <div>
        <StatusBadge status={status} />
      </div>
    </div>
  );
}
