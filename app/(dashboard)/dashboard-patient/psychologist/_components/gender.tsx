"use client";

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import IconGender from "@/components/icons/icon-gender";

export default function Gender() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [gender, setGender] = useState<string | undefined>(
    searchParams.get("gender") || "relevance"
  );

  const handleGenderChange = (value: string) => {
    setGender(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value === "relevance") {
      params.delete("gender");
    } else {
      params.set("gender", value);
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleGenderChange} value={gender}>
      <SelectTrigger className="w-[140px] bg-[#272C4D] text-secondary-custom_secondary justify-start gap-2 py-5 rounded-lg">
        <IconGender className="mr-2" />
        <SelectValue placeholder="Gender" />
      </SelectTrigger>
      <SelectContent className="w-[140px]">
        <SelectGroup className="text-center px-2">
          <SelectItem value="relevance" className="border-b-2">
            Relevance
          </SelectItem>
          <SelectItem value="male" className="border-b-2">
            Male
          </SelectItem>
          <SelectItem value="female">Female</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
