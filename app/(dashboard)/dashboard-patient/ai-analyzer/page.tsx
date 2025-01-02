import { FormAiAnalyzer } from "./_components/form-ai-analyzer";
import { ChartAiAnalyzer } from "./_components/chart-ai-analyzer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { latestHistoryAiAnalyzer } from "@/lib/services/patient/patient-service";

export default async function AiAnalyzer() {
  const session = await auth();
  const ai_analyzer = await latestHistoryAiAnalyzer(session?.user.access_token);

  const chartData = ai_analyzer
    ? [
        { category: "Stress", percentage: ai_analyzer.stress, fill: "#DC3545" },
        {
          category: "Anxiety",
          percentage: ai_analyzer.anxiety,
          fill: "#4C9AFF",
        },
        {
          category: "Depression",
          percentage: ai_analyzer.depression,
          fill: "#F28D35",
        },
      ]
    : [];

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        AI Analyzer
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Share your concerns, AI will analyse your mental state
      </p>

      <div className="flex justify-between mt-10">
        <Link href="/dashboard-patient/ai-analyzer/history-analyzer">
          <Button className="text-white font-semibold bg-[#27374D] rounded-full">
            Analyzer History
          </Button>
        </Link>
      </div>

      <div className="flex gap-5 flex-col lg:flex-row mt-5">
        <div className="bg-secondary-custom_secondary p-5 flex-1 rounded-3xl">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Health Mental Analyzer
            </h3>
          </center>
          <div className="flex flex-col gap-2 mt-5 lg:h-96">
            <FormAiAnalyzer session={session?.user.access_token} />
          </div>
        </div>

        <div className="bg-secondary-custom_secondary p-5 rounded-2xl flex-1 w-full">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Analysis Results
            </h3>
          </center>
          {ai_analyzer ? (
            <div className="flex flex-col flex-1 p-3 md:p-10">
              <div className="text-netral-primary">
                <p>Probability of Stress: {ai_analyzer.stress}%</p>
                <p>Probability of Anxiety: {ai_analyzer.anxiety}%</p>
                <p>Probability of Depression: {ai_analyzer.depression}%</p>
              </div>
              <Separator className="mt-10 border-2" />
              <ChartAiAnalyzer data={chartData} />
            </div>
          ) : (
            <center>
              <p className="text-netral-primary">
                No AI analysis data available
              </p>
            </center>
          )}
        </div>
      </div>
    </>
  );
}
