"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchList({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("name", term);
    } else {
      params.delete("name");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="relative flex items-center ">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 w-5 h-5" />
      <Input
        placeholder={placeholder}
        className=" pl-10 rounded-2xl w-full mr-2  border-black bg-secondary-custom_secondary "
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
