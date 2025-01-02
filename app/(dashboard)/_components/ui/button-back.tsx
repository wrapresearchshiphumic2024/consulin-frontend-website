"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function ButtonBack() {
  const router = useRouter();
  return (
    <Button
      className="p-2 rounded-full bg-white shadow-md h-[30px] w-[30px] flex items-center justify-center mr-4"
      onClick={() => router.back()}
    >
      <Image src="/assets/icons/back.png" alt="Back" width={10} height={10} />
    </Button>
  );
}
