"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";

export default function ScheduledApp() {
  const psychologists = [
    {
      id: 1,
      name: "Maria Johnson",
      status: "Ongoing",
      gender: "Female",
      phone: "0812-3456-7890",
      dateTime: "12 Oct 2024, 10:00",
      imageUrl: "/assets/images/satu.png",
    },
    {
      id: 2,
      name: "Michael Brown",
      status: "Waiting",
      gender: "Male",
      phone: "0812-9876-5432",
      dateTime: "12 Oct 2024, 13:00",
      imageUrl: "/assets/images/dua.png",
    },
    {
      id: 3,
      name: "Anna Bella",
      status: "Canceled",
      gender: "Female",
      phone: "0812-6543-2189",
      dateTime: "13 Oct 2024, 08:00",
      imageUrl: "/assets/images/tiga.png",
    },
    {
      id: 4,
      name: "Lisa Smith",
      status: "Waiting",
      gender: "Female",
      phone: "0812-3450-1234",
      dateTime: "14 Oct 2024, 10:00",
      imageUrl: "/assets/images/empat.png",
    },
    {
      id: 5,
      name: "Sarah Lee",
      status: "Waiting",
      gender: "Female",
      phone: "0812-3456-7890",
      dateTime: "14 Oct 2024, 13:00",
      imageUrl: "/assets/images/lima.png",
    },
    {
      id: 6,
      name: "Anna Williams",
      status: "Waiting",
      gender: "Female",
      phone: "0812-3456-7890",
      dateTime: "15 Oct 2024, 10:00",
      imageUrl: "/assets/images/enam.png",
    },
  ];

  const getRedirectUrl = (status) => {
    if (status === "Ongoing") return "/dashboard-psychologist/detail-patient";
    if (status === "Waiting")
      return "/dashboard-psychologist/detail-wait-patient";
    if (status === "Canceled")
      return "/dashboard-psychologist/detail-cancel-patient";
    return "/dashboard-psychologist/detail-patient";
  };

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold mb-[10px]">
        Scheduled Appointment
      </h2>
      <p className="text-[#1E034280] font-semibold">
        Manage patient appointments, complete or decline consultations, and view
        patient details.
      </p>
      <div className="flex justify-between items-center mt-5">
          {/* Filter Dropdown */}
          <Select>
            <SelectTrigger className="w-[140px] bg-[#272C4D] text-secondary-custom_secondary justify-start gap-2 py-2 rounded-lg">
              
              <SelectValue placeholder="Relevance" />
            </SelectTrigger>
            <SelectContent className="w-[180px]">
              <SelectGroup className="text-center px-2">
                <SelectItem value="re" className="border-b-2">
                  Relevance
                </SelectItem>
                <SelectItem value="ma" className="border-b-2">
                  Male
                </SelectItem>
                <SelectItem value="fe" className="border-b-2">
                  Female
                </SelectItem>
                <SelectItem value="ava" className="border-b-2">
                  Ongoing
                </SelectItem>
                <SelectItem value="fully" className="border-b-2">
                  Waiting
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Search Bar */}
          <div className="relative text-netral-primary mr-[50px]">
            <input
              type="text"
              placeholder="Search patient by name"
              className="px-[50px] py-2 w-[350px] rounded-[100px] focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
              </svg>
            </span>
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {psychologists.map((psychologist) => (
          <Card
            key={psychologist.id}
            className="rounded-[30px] shadow-lg bg-[#FCFCFC] w-full"
          >
            <div
              className={`rounded-t-[20px] p-3 text-white text-center font-bold ${
                psychologist.status === "Ongoing"
                  ? "bg-[#28A745]"
                  : psychologist.status === "Waiting"
                  ? "bg-[#272C4D]"
                  : "bg-[#DC3545]"
              }`}
            >
              {psychologist.status}
            </div>

            <div className="p-5">
              <div className="flex flex-col items-center mt-4">
                <Image
                  src={psychologist.imageUrl}
                  alt={psychologist.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold text-center mb-2">
                  {psychologist.name}
                </h2>
                <div className="text-left space-y-3">
                  <p>Gender: {psychologist.gender}</p>
                  <p>Phone number: {psychologist.phone}</p>
                  <p>Day & Time: {psychologist.dateTime}</p>
                </div>
              </div>

              <div className="flex justify-center gap-2 w-full px-4 flex-wrap mt-6">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="bg-[#28A745] text-white py-2 px-4 rounded-lg shadow-md">
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
                        session is completed, you cannot change or cancel this
                        action.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction
                        onClick={() =>
                          toast.custom((t) => (
                            <ToastSuccess
                              label="Schedule Successfully created"
                              t={t}
                            />
                          ))
                        }
                        className="bg-[#28A745] text-white px-4 py-2 rounded-full"
                      >
                        Confirm
                      </AlertDialogAction>
                      <AlertDialogCancel className="bg-[#DC3545] text-white px-4 py-2 rounded-full">
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="bg-[#DC3545] text-white py-2 px-4 rounded-lg shadow-md">
                      Cancel
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Cancel Session</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to cancel this session? <br />
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
                        className="bg-[#28A745] text-white px-4 py-2 rounded-full"
                      >
                        Confirm
                      </AlertDialogAction>
                      <AlertDialogCancel className="bg-[#DC3545] text-white px-4 py-2 rounded-full">
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Link href={getRedirectUrl(psychologist.status)}>
                  <Button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    Detail
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}