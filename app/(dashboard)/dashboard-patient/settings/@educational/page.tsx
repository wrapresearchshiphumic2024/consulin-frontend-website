import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Educational() {
  return (
    <div className="flex flex-col gap-3">
      <p>Specialist: Addiction Therapy</p>
      <p>Degree: Bachelor of Psychology</p>
      <p>Email: david@woho.com</p>
      <p>University: University of Bandung</p>
      <p>Graduation Year: 2021</p>
      <div>
        <Link href="/dashboard-psychologist/settings/edit-educational">
          <Button>Edit Information</Button>
        </Link>
      </div>
    </div>
  );
}
