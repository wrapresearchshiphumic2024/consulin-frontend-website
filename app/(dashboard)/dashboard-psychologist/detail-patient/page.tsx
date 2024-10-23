import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import ChatOne from "./_components/chat-one";

export default function DetailSc() {
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Patient Complaint
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        View patient complaint on this page
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
        <div className="space-y-4 col-span-1">
          <Card className="flex flex-col rounded-[30px] shadow-lg bg-white w-full">
            <div className="w-full bg-[#28A745] rounded-t-[30px] text-white text-center py-2 font-bold">
              Ongoing
            </div>
            <div className="flex flex-col p-4 space-y-3">
              <p className="text-gray-900">Name: Maria Johnson</p>
              <p className="text-gray-900">Gender: Woman</p>
              <p className="text-gray-900">Email: marjo.@woho.id</p>
              <p className="text-gray-900">Phone: 0812-3456-7890</p>
              <p className="text-gray-900">Day & Time: 14 Oct 2024, 10:00</p>

              <div className="flex flex-row space-x-2 mt-4">
                <Button className="bg-green-500 text-white py-3 rounded-lg w-full">
                  Done
                </Button>
                <Button className="bg-red-500 text-white py-3 rounded-lg w-full">
                  Reject
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white w-full">
            <h3 className="font-bold text-[#27374D] text-lg md:text-xl mb-4">
              AI Analysis Results
            </h3>
            <p className="text-gray-700">Probability of Stress: 65%</p>
            <p className="text-gray-700">Probability of Anxiety: 40%</p>
            <p className="text-gray-700">Probability of Depression: 70%</p>
          </Card>

          <div className="w-full">
            <Link href="/dashboard-psychologist/complaint">
              <Button className="bg-[#27374D] text-white px-4 py-3 rounded-full w-full">
                See Patient Complaint
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Chat Section */}
        <div className="col-span-2">
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white w-full  h-[530px]">
            <ChatOne />
          </Card>
        </div>
      </div>
    </>
  );
}
