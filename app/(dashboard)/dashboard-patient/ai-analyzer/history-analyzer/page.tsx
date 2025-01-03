import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { historyAiAnalyzer } from "@/lib/services/patient/patient-service";
import { formatHumanReadableDate } from "@/lib/helpers/string-helpers";
import ButtonBack from "@/app/(dashboard)/_components/ui/button-back";
import TextSection from "@/app/(dashboard)/_components/ui/text-section";

export default async function HistoryAnalyzer() {
  const session = await auth();
  const history_ai_analyzer = await historyAiAnalyzer(
    session?.user.access_token
  );
  return (
    <>
      <div className="flex ">
        <ButtonBack />
        <div>
          <TextSection
            title="AI Analyzer History"
            subtitle="View your AI analyzer history on this page"
          />
        </div>
      </div>

      {history_ai_analyzer ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {history_ai_analyzer.map((data) => (
            <div
              key={data.id}
              className="bg-white p-6 rounded-xl shadow-md h-full w-full"
            >
              <p className="text-lg text-[#1E0342] font-semibold">
                {formatHumanReadableDate(data.createdAt)}
              </p>
              <hr className="my-3 border-gray-300 w-[120px]" />
              <p className="text-black font-semibold">{data.complaint}</p>
              <hr className="my-3 border-gray-300 w-[120px]" />
              <div className="font-semibold">
                <p>Probability of Stress: {data.stress}%</p>
                <p>Probability of Anxiety: {data.anxiety}%</p>
                <p>Probability of Depression: {data.depression}%</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[50vh]">
          <p className="text-[#1E0342] font-semibold">No data available</p>
        </div>
      )}
    </>
  );
}
