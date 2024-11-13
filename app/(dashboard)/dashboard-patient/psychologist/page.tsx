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
      <div className="mt-10">
        <Select>
          <SelectTrigger className="w-[140px] bg-[#272C4D] text-secondary-custom_secondary justify-start gap-2 py-5 rounded-lg">
            <IconGender className="mr-2" />
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent className="w-[140px]">
            <SelectGroup className="text-center px-2">
              <SelectItem value="apple" className="border-b-2">
                Relevance
              </SelectItem>
              <SelectItem value="banana" className="border-b-2">
                Male
              </SelectItem>
              <SelectItem value="blueberry">Female</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
