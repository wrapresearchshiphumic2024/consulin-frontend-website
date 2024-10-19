"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { X } from "lucide-react";

export default function DetailSc() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-left mb-2 lg:mb-4 text-[#27374D]">
        Detail Patient
      </h1>
      <p className="text-left text-gray-600 mb-6 lg:mb-8">
        View patient details on this page
      </p>

      <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start lg:justify-between">
        {/* Left Column (Ongoing Card and AI Analysis Card) */}
        <div className="flex flex-col w-full lg:w-[500px] space-y-4 mb-6 lg:mb-0">
          {/* Ongoing Card */}
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

              {/* Full-Width Buttons */}
              <div className="flex flex-row space-x-2 mt-4">
                <Button
                  onClick={() =>
                    toast.custom((t) => (
                      <div className="bg-[#28A745] p-3 rounded text-white relative">
                        <button
                          className="absolute top-0 right-0"
                          onClick={() => toast.dismiss(t)}
                        >
                          <X className="h-4 w-4" />
                        </button>
                        Schedule Successfully created
                      </div>
                    ))
                  }
                  className="bg-green-500 text-white py-3 rounded-lg w-full"
                >
                  Done
                </Button>

                <Button
                  onClick={() =>
                    toast.custom((t) => (
                      <div className="bg-[#DC3545] p-3 rounded text-white relative">
                        <button
                          className="absolute top-0 right-0"
                          onClick={() => toast.dismiss(t)}
                        >
                          <X className="h-4 w-4" />
                        </button>
                        Session Cancelled
                      </div>
                    ))
                  }
                  className="bg-red-500 text-white py-3 rounded-lg w-full"
                >
                  Reject
                </Button>
              </div>
            </div>
          </Card>

          {/* AI Analysis Results Card */}
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white w-full">
            <h3 className="font-bold text-[#27374D] text-lg md:text-xl mb-4">
              AI Analysis Results
            </h3>
            <p className="text-gray-700">Probability of Stress: 65%</p>
            <p className="text-gray-700">Probability of Anxiety: 40%</p>
            <p className="text-gray-700">Probability of Depression: 70%</p>
          </Card>

          {/* See Patient Complaint Button */}
          <div className="w-full">
            <Link href="/dashboard-psychologist/complaint">
              <Button className="bg-[#27374D] text-white px-4 py-3 rounded-full w-full">
                See Patient Complaint
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column (Chat Section) */}
        <div className="flex flex-col space-y-6 w-full lg:w-2/3">
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white">
            <p>Chat section content here</p>
          </Card>
        </div>
      </div>
    </div>
  );
}