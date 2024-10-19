import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
export default function DetailPsycholog() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-left text-[#1E0342] mb-2">
        Detail Psikologist
      </h1>
      <p className="text-left text-[#1E034280] mb-8">
        View psychologist details on this page
      </p>
      <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start lg:justify-center">
        <Card className="flex flex-col items-center  rounded-[30px] shadow-lg  mb-6  lg:mb-0 w-full lg:w-1/3 ">
          <div
            className={cn(
              "Available" === "Available" ? "bg-[#272C4D]" : "bg-[#272C4D]/75 ",
              " w-full text-center text-secondary-custom_secondary font-semibold text-xl px-6 py-4 rounded-t-[30px] "
            )}
          >
            Available
          </div>
          <img
            src="/assets/images/satu.png"
            alt="David Williams"
            className="rounded-full w-[200px] h-[200px] mb-4 mt-[50px] border-[10px] border-[#DDE7F9] shadow-md"
          />
          <h2 className="text-2xl font-semibold text-[#1E0342]">
            David Williams
          </h2>
          <div className="p-6">
            <p className="text-[#1E0342] mt-2">Gender : Male </p>
            <p className="text-[#1E0342] mt-2">Email : marjo@gmail.com </p>
            <p className="text-[#1E0342] mt-2">
              Specialization : Anxiety Disorders
            </p>
            <p className="text-[#1E0342] mt-2">Experience :4 Years </p>
          </div>
        </Card>
        <div className="flex flex-col space-y-6 w-full lg:w-2/3">
          <Card className="p-6 rounded-[30px] shadow-lg bg-white text-[#1E0342] space-y-[5px]">
            <h2 className="text-xl font-semibold text-[#1E0342]">
              Available Date
            </h2>
          </Card>
          <Card className="p-6 rounded-[30px] shadow-lg bg-white text-[#1E0342] space-y-[5px]"></Card>
        </div>
      </div>
    </div>
  );
}
