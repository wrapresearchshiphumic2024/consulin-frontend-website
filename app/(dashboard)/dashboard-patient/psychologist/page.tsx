import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import IconGender from "@/components/icons/icon-gender";
import { auth } from "@/auth";
import { getPsychologstData } from "@/services/global-service";
import PsychologistCard from "../../_components/ui/psychologist-card";

export default async function Psychologist() {
  const session = await auth();
  const psychologists = await getPsychologstData(
    session?.user.access_token,
    "/api/patients/psychologists-list"
  );

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Psychologist
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Explore and book an appointment with a psychologist to get the support
        you need.
      </p>
      <div className="flex justify-between items-center mt-5">
          {/* Filter Dropdown */}
          <Select>
            <SelectTrigger className="w-[140px] bg-[#272C4D] text-secondary-custom_secondary justify-start gap-2 py-2 rounded-lg">
              <IconGender className="mr-2" />
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent className="w-[180px]">
              <SelectGroup className="text-center px-2">
                <SelectItem value="re" className="border-b-2">
                  Relevance
                </SelectItem>
                <SelectItem value="ma" className="border-b-2">
                  Male
                </SelectItem>
                <SelectItem value="fe" className="border-b-2">
                  Female
                </SelectItem>
                <SelectItem value="ava" className="border-b-2">
                  Available
                </SelectItem>
                <SelectItem value="fully" className="border-b-2">
                  Fully Booked
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Search Bar */}
          <div className="relative text-netral-primary mr-[50px]">
            <input
              type="text"
              placeholder="Search psychologist by name"
              className="px-[50px] py-2 w-[350px] rounded-[100px] focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
              </svg>
            </span>
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      

      {psychologists.length === 0 ? (
        <div className="mt-10 text-[#1E0342] font-semibold flex justify-center items-center">
          Empty List Psychologist
        </div>
      ) : (
        <div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-3 mt-3">
          {psychologists.map((psychologist) => (
            <PsychologistCard
              key={psychologist.id}
              user_psychologist={psychologist}
              available
            >
              <div className="w-full px-4 mt-auto flex justify-center">
                <Link
                  href={`/dashboard-patient/psychologist/${psychologist.id}/detail-psychologst`}
                >
                  <Button className="bg-gray-700 justify-center text-white px-4 py-2 rounded-md w-[200px]">
                    Detail
                  </Button>
                </Link>
              </div>
            </PsychologistCard>
          ))}
        </div>
      )}
    </>
  );
}
