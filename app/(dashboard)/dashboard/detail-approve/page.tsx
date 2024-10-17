import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
export default function DetailApp() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2 text-[#27374D]">
        Detail Applicant Psychologist
      </h1>
      <p className="text-center text-gray-600 mb-6 md:mb-8">
        View applicant psychologist details on this page
      </p>
      <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start lg:justify-center">
        <div className="flex flex-col w-full lg:w-[500px] space-y-4 mb-6 lg:mb-0">
          <Card className="flex flex-col items-center p-4 md:p-6 rounded-[30px] shadow-lg bg-white mb-6 w-full">
            <img
              src="/assets/images/satu.png"
              alt="David Williams"
              className="rounded-full w-20 h-20 md:w-32 md:h-32 mb-4 border-4 border-white shadow-md"
            />
            <h2 className="text-lg md:text-2xl font-semibold text-[#27374D]">
              David Williams
            </h2>
            <p className="text-gray-700 mt-2 text-xs md:text-base">
              Licence Number: 1234556788810
            </p>
            <div className="w-full text-center mt-4">
              <div className="flex items-center justify-center mb-2">
                <div className="h-px bg-gray-400 w-1/6"></div>
                <p className="text-gray-500 mx-4 text-xs md:text-base">
                  Click to see attachment
                </p>
                <div className="h-px bg-gray-400 w-1/6"></div>
              </div>
              <div className="flex justify-center space-x-2">
                <Button className="bg-gray-700 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base">
                  CV
                </Button>
                <Button className="bg-gray-700 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base">
                  Certificate
                </Button>
                <Button className="bg-gray-700 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base">
                  Licence
                </Button>
              </div>
            </div>
          </Card>
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white w-full mb-[10px]">
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-full w-full sm:w-48 text-xs md:text-base">
                    Accept Applicants
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Approve Confirmation</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to approve this psychologist?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>Confirm</AlertDialogAction>
                    <AlertDialogAction>Cancel</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-red-500 text-white px-4 md:px-6 py-2 rounded-full w-full sm:w-48 text-xs md:text-base">
                    Reject Applicants
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Rejection Confirmation</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to reject this psychologist?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <Link href="/dashboard/approve-psyghologst">
                      <AlertDialogAction>Close</AlertDialogAction>
                    </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </Card>
        </div>
        <div className="flex flex-col space-y-6 w-full lg:w-2/3">
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white">
            <h3 className="text-md md:text-xl font-bold text-[#27374D] mb-4">
              Psychologist Information Details
            </h3>
            <p className="text-gray-700 mb-2 text-xs md:text-base">
              <strong>Name:</strong> David Williams
            </p>
            <p className="text-gray-700 mb-2 text-xs md:text-base">
              <strong>Gender:</strong> Male
            </p>
            <p className="text-gray-700 mb-2 text-xs md:text-base">
              <strong>Email:</strong> david@woho.com
            </p>
            <p className="text-gray-700 text-xs md:text-base">
              <strong>Phone:</strong> 081234312134
            </p>
          </Card>
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white">
            <h3 className="text-md md:text-xl font-bold text-[#27374D] mb-4">
              Additional Information
            </h3>
            <p className="text-gray-700 mb-2 text-xs md:text-base">
              <strong>Degree:</strong> Bachelor of Psychology
            </p>
            <p className="text-gray-700 mb-2 text-xs md:text-base">
              <strong>University:</strong> University of Bandung
            </p>
            <p className="text-gray-700 mb-2 text-xs md:text-base">
              <strong>Graduation Year:</strong> 2021
            </p>
            <p className="text-gray-700 mb-2 text-xs md:text-base">
              <strong>Language Major:</strong> English
            </p>
            <p className="text-gray-700 mb-2 text-xs md:text-base">
              <strong>Experience Year:</strong> 4 Years
            </p>
            <p className="text-gray-700 text-xs md:text-base">
              <strong>Specialist:</strong> Addiction Therapy
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
