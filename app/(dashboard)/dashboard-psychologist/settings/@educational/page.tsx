import { Button } from "@/components/ui/button";

export default function Educational() {
  return (
    <div className="flex flex-col gap-3">
      <p>Specialist: Addiction Therapy</p>
      <p>Degree: Bachelor of Psychology</p>
      <p>Email: david@woho.com</p>
      <p>University: University of Bandung</p>
      <p>Graduation Year: 2021</p>
      <div>
        <Button>Edit Information</Button>
      </div>
    </div>
  );
}
