"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";
import Link from "next/link";
import { toast } from "sonner";
import ChatOne from "./_components/chat-one";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
export default function DetailSc() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex items-center mb-6">
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
            <div className="w-full bg-[#28A745] rounded-t-[30px] text-white text-center py-2 font-bold">
              Ongoing
            </div>
            <div className="flex flex-col p-4 space-y-3">
              <p className="text-[#1E0342] font-semibold">Name: Maria Johnson</p>
              <p className="text-[#1E0342] font-semibold">Gender: Woman</p>
              <p className="text-[#1E0342] font-semibold">Email: marjo.@woho.id</p>
              <p className="text-[#1E0342] font-semibold">Phone: 0812-3456-7890</p>
              <p className="text-[#1E0342] font-semibold">
                Day & Time: 14 Oct 2024, 10:00
              </p>

              <div className="flex flex-row space-x-2 mt-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="bg-green-500 text-white py-3 rounded-lg w-full">
                      Done
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Confirmation of Consultation Session
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to complete this session? Once the
                        session is completed, you cannot change or cancel this action.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction
                        onClick={() =>
                          toast.custom((t) => (
                            <ToastSuccess label="Schedule Successfully created" t={t} />
                          ))
                        }
                        className="bg-[#28A745]"
                      >
                        Confirm
                      </AlertDialogAction>
                      <AlertDialogCancel className="bg-[#DC3545] text-white">
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="bg-red-500 text-white py-3 rounded-lg w-full">
                      Cancel
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Cancel Session</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to cancel this session?
                        <br />
                        Please provide the reason for cancellation below:
                        <br />
                        <br />
                        <textarea
                          placeholder="Enter your cancellation reason here..."
                          className="w-full h-32 p-4 bg-[#E9ECEF] text-gray-500 rounded-xl outline-none resize-none"
                        />
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction
                        onClick={() =>
                          toast.custom((t) => (
                            <ToastFailed label="Session Cancelled" t={t} />
                          ))
                        }
                        className="bg-[#28A745]"
                      >
                        Confirm
                      </AlertDialogAction>
                      <AlertDialogCancel className="bg-[#DC3545] text-white">
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
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
    </div>
  );
}
