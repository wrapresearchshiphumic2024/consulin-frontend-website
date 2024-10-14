import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PersonalInformation() {
  return (
    <div className="flex flex-col gap-3">
      <p>Name : David Williams</p>
      <p>Gender: Male</p>
      <p>Email: david@woho.com</p>
      <p>Phone: 0812345678</p>
      <p>Licence Number: 1231312312312</p>
      <div>
        <Link href="/dashboard-psychologist/settings/edit-information">
          <Button>Edit Information</Button>
        </Link>
      </div>
    </div>
  );
}
