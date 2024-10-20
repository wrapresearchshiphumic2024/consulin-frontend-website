import { Card } from "@/components/ui/card";

export default function DetailAppointment() {
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Detail Patient
      </h2>
      <p className="text-left text-[#1E034280] mb-8 mt-3">
        View appointment details on this page and chat with psychologist
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Column (Ongoing Card and AI Analysis Card) */}
        <div className="space-y-4 col-span-1">
          {/* Ongoing Card */}
          <div className="flex flex-col rounded-[30px] bg-white w-full">
            <div className="w-full bg-[#28A745] rounded-t-[30px] text-white text-center py-2 font-bold">
              Ongoing
            </div>
            <div className="flex flex-col p-4 space-y-3">
              <p className="text-gray-900">Name: Maria Johnson</p>
              <p className="text-gray-900">Gender: Woman</p>
              <p className="text-gray-900">Email: marjo.@woho.id</p>
              <p className="text-gray-900">Phone: 0812-3456-7890</p>
              <p className="text-gray-900">Day & Time: 14 Oct 2024, 10:00</p>
            </div>
          </div>

          {/* AI Analysis Results div */}
          <div className="p-4 md:p-6 rounded-[30px]  bg-white w-full">
            <h3 className="font-bold text-[#27374D] text-lg md:text-xl mb-4">
              AI Analysis Results
            </h3>
            <p className="text-gray-700">Probability of Stress: 65%</p>
            <p className="text-gray-700">Probability of Anxiety: 40%</p>
            <p className="text-gray-700">Probability of Depression: 70%</p>
          </div>
        </div>

        {/* Right Column (Chat Section) */}
        <div className="lg:col-span-2">
          <div className="p-4 md:p-6 rounded-[30px]  bg-white w-full">
            <p>Chat section content here</p>
          </div>
        </div>
      </div>
    </>
  );
}
