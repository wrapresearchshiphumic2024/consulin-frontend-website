import { cn } from "@/lib/utils";

export default function CardDashboard({
  label,
  total,
  background,
  status,
  styleLabel,
  styleStatus,
  styleTotal,
  icon,
}: {
  label: string;
  total: string;
  background?: string;
  status: string;
  styleLabel?: string;
  styleTotal?: string;
  styleStatus?: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        background ? background : "bg-secondary-custom_secondary ",
        "rounded-3xl md:p-10 p-5 flex justify-between items-center h-full"
      )}
    >
      <div className="flex flex-col md:h-4/5 md:justify-between ">
        <h3 className={cn(" text-xl md:text-2xl", styleLabel)}>{label}</h3>
        <div className="mt-3">
          <p
            className={cn(
              "text-xl md:text-4xl font-bold text-primary-custom_primary",
              styleTotal
            )}
          >
            {total}
          </p>
          <p className={cn("text-xl md:text-2xl", styleStatus)}>{status}</p>
        </div>
      </div>
      {icon}
    </div>
  );
}
