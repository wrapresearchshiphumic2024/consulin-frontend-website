import { Card } from "@/components/ui/card";
export default function DetailList() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-left text-[#1E0342] mb-2">Detail Psikologist</h1>
      <p className="text-left text-[#1E034280] mb-8">View psychologist details on this page</p>
      <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start lg:justify-center">
        <Card className="flex flex-col items-center p-6 rounded-[30px] shadow-lg bg-[#E0E9F9] mb-6 h-[500px] lg:mb-0 w-full lg:w-1/3 border-[10px] border-white">
          <img
            src="/assets/images/satu.png"
            alt="David Williams"
            className="rounded-full w-[200px] h-[200px] mb-4 mt-[50px] border-[10px] border-white shadow-md"
          />
          <h2 className="text-2xl font-semibold text-[#1E0342]">David Williams</h2>
          <p className="text-[#1E0342] mt-2">Licence Number: 1234556788810</p>
        </Card>
        <div className="flex flex-col space-y-6 w-full lg:w-2/3">
          <Card className="p-6 rounded-[30px] shadow-lg bg-white text-[#1E0342] space-y-[5px]">
            <h3 className="text-xl font-bold text-[#1E0342] mb-4">Psychologist Information Details</h3>
            <p>Name: David Williams</p>
            <p>Gender: Male</p>
            <p>Email: david@woho.com</p>
            <p>Phone: 081234312134</p>
          </Card>
          <Card className="p-6 rounded-[30px] shadow-lg bg-white text-[#1E0342] space-y-[5px]">
            <h3 className="text-xl font-bold text-[#1E0342] mb-4">Additional Information</h3>
            <p>Degree: Bachelor of Psychology</p>
            <p>University: University of Bandung</p>
            <p>Graduation Year: 2021</p>
            <p>Language Major: English</p>
            <p>Experience Year: 4 Year</p>
            <p>Specialist: Addiction Therapy</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
