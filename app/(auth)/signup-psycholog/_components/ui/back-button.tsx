import { Button } from "@/components/ui/button";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";

export default function BackButton() {
  return (
    <div className="absolute lg:top-[-70px] lg:left-[-300px] top-[-70px] left-0  lg:flex items-center gap-3 z-40 hidden ">
      <Link href="/" className="z-20">
        <Button className="bg-primary-custom_primary text-secondary-custom_secondary rounded-3xl w-[50px] h-[50px]">
          <ArrowLeft2 />
        </Button>
      </Link>
      <p className="hidden sm:inline-block">Back</p>
    </div>
  );
}
