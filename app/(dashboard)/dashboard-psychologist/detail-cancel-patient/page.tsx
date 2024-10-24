"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import ChatOne from "../detail-patient/_components/chat-one";
import Image from "next/image";
export default function DetailCancel() {
  return (
    <>
      <div className="flex mb-6">
        <Link href="/dashboard-psychologist/Scheduled-Appointment">
          <Button className="p-2 rounded-full bg-white shadow-md h-[40px] w-[40px] flex items-center justify-center mr-4 mb-7">
            <Image
              src="/assets/icons/back.png"
              alt="Back"
              width={10}
              height={10}
            />
          </Button>
        </Link>

        <div>
          <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-left mb-2 lg:mb-4 text-[#1E0342]">
            Detail Patient
          </h1>
          <p className="text-left text-[#1E034280] font-semibold">
            View patient details on this page
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start lg:justify-between">
        <div className="flex flex-col w-full lg:w-[500px] space-y-4 mb-6 lg:mb-0">
          <Card className="flex flex-col rounded-[30px] shadow-lg bg-white w-full">
            <div className="w-full bg-[#DC3545] rounded-t-[30px] text-white text-center py-2 font-bold">
              Cancelled
            </div>
            <div className="flex flex-col p-4 space-y-3">
              <p className="text-[#1E0342] font-semibold">
                Name: Maria Johnson
              </p>
              <p className="text-[#1E0342] font-semibold">Gender: Woman</p>
              <p className="text-[#1E0342] font-semibold">
                Email: marjo.@woho.id
              </p>
              <p className="text-[#1E0342] font-semibold">
                Phone: 0812-3456-7890
              </p>
              <p className="text-[#1E0342] font-semibold">
                Day & Time: 14 Oct 2024, 10:00
              </p>
            </div>
          </Card>

          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white w-full space-y-3">
            <h3 className="font-bold text-[#1E0342] text-lg md:text-xl mb-4">
              AI Analysis Results
            </h3>
            <p className="text-[#1E0342] font-semibold">
              Probability of Stress: 65%
            </p>
            <p className="text-[#1E0342] font-semibold">
              Probability of Anxiety: 40%
            </p>
            <p className="text-[#1E0342] font-semibold">
              Probability of Depression: 70%
            </p>
          </Card>

          <div className="w-full">
            <Link href="/dashboard-psychologist/complaint">
              <Button className="bg-[#27374D] text-white px-4 py-3 rounded-full w-full">
                See Patient Complaint
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-6 w-full lg:w-2/3">
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white">
            <ChatOne />
          </Card>
        </div>
      </div>
    </>
  );
}
