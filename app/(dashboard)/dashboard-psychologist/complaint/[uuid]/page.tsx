import { Card } from "@/components/ui/card";

import { auth } from "@/auth";
import { historyAiPatientAnalyzer } from "@/lib/services/psychologist/psychologist-service";

import {
  formatHumanReadableDate,
  formatHumanReadableDateWithHour,
} from "@/lib/helpers/string-helpers";
import ButtonBack from "@/app/(dashboard)/_components/ui/button-back";
import TextSection from "@/app/(dashboard)/_components/ui/text-section";

export default async function Complaint({
  params,
}: {
  params: { uuid: string };
}) {
  const session = await auth();
  const complaints = await historyAiPatientAnalyzer(
    session?.user.access_token,
    params.uuid
  );

  return (
    <>
      <div className="flex ">
        <ButtonBack />
        <div>
          <TextSection
            title="Patient Complaint"
            subtitle="View all patient complaint on this page"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {complaints &&
          complaints.map((complaint, index) => (
            <Card key={index} className="p-6 rounded-[30px] shadow-md bg-white">
              <h2 className="text-[#27374D] font-semibold mb-2">
                {formatHumanReadableDateWithHour(complaint.createdAt)}
              </h2>
              <hr className="my-3 border-gray-300 w-[120px]" />
              <p className="text-gray-700 text-justify">
                {complaint.complaint}
              </p>
              <hr className="my-3 border-gray-300 w-[120px]" />
              <div className="font-semibold">
                <p>Probability of Stress: {complaint.stress}%</p>
                <p>Probability of Anxiety: {complaint.anxiety}%</p>
                <p>Probability of Depression: {complaint.depression}%</p>
              </div>
            </Card>
          ))}
      </div>
    </>
  );
}
