import { Badge } from "@/components/ui/badge"; // Pastikan Anda mengimpor Badge dari ShadCN
import { cn } from "@/lib/utils";

export default function StatusBadge({ status }: { status: string }) {
  const isOngoing = status === "ongoing";
  const bgColor = isOngoing ? "bg-green-500" : "bg-[#F28D35]";
  const text = isOngoing ? "On-Going" : "Waiting";

  return (
    <Badge
      className={cn(
        "md:w-32 w-20 h-10 text-sm md:text-md text-center rounded-xl flex items-center justify-center",
        bgColor
      )}
    >
      {text}
    </Badge>
  );
}
