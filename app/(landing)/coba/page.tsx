import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href={"/meet?room_id=faridz-123"} target="_blank">
        <Button>Link meet</Button>
      </Link>
      <Link href={"/meet?room_id=raya-124"} target="_blank">
        <Button>Link meet</Button>
      </Link>
      <Link href={"/meet?room_id=rohmad-125"} target="_blank">
        <Button>Link meet</Button>
      </Link>
    </div>
  );
}
