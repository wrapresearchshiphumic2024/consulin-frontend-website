import { FormAiAnalyzer } from "./_components/form-ai-analyzer";
import { ChartAiAnalyzer } from "./_components/chart-ai-analyzer";
import { Separator } from "@/components/ui/separator";

export default function AiAnalyzer() {
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Hello, Welcome To Consulin!
      </h2>
      <p>Have a good day!</p>
      <div className="flex gap-5 flex-col lg:flex-row mt-10">
        <div className="bg-secondary-custom_secondary p-5 flex-1 rounded-3xl">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Your Appointment
            </h3>
          </center>
          <div className="flex flex-col gap-2 mt-5">
            <FormAiAnalyzer />
          </div>
        </div>

        <div className="bg-secondary-custom_secondary p-5 rounded-2xl flex-1 w-full ">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Appointment History
            </h3>
          </center>
          <div className="flex flex-col flex-1 p-3 md:p-10">
            <div className="text-netral-primary">
              <p>Probability of Stress: 65%</p>
              <p>Probability of Anxiety: 40%</p>
              <p>Probability of Depression: 70%</p>
            </div>
            <Separator className="mt-10 border-2" />
            <ChartAiAnalyzer />
          </div>
        </div>
      </div>
    </>
  );
}
