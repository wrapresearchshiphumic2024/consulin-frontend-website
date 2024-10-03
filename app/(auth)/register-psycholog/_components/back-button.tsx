import { Button } from "@/components/ui/button";
import { ArrowLeft2 } from "iconsax-react";

export default function BackButton() {
  return (
    <div className=" flex items-center gap-3">
      <Button className="bg-primary-custom_primary text-secondary-custom_secondary rounded-3xl w-[50px] h-[50px]">
        <ArrowLeft2 />
      </Button>
      <p>Back</p>
    </div>
  );
}
