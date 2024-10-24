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
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import Link from "next/link";

export default function DetailApp() {
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Detail Applicant Psychologist
      </h2>
      <p className="mt-3 text-netral-primary  font-medium ">
        View applicant psychologist details on this page
      </p>

      <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start lg:justify-center mt-10">
        <div className="flex flex-col w-full lg:w-[500px] space-y-1 mb-10 lg:mb-0">
          <Card className="flex flex-col items-center p-4 md:p-6 rounded-[30px] h-auto md:h-[400px] shadow-lg bg-white mb-6 w-full">
            <Image
              src="/assets/images/satu.png"
              alt="David Williams"
              width={128}
              height={128}
              className="rounded-full w-20 h-20 md:w-32 md:h-32 mb-4 border-4 border-white shadow-md"
            />
            <h2 className="text-lg md:text-2xl font-semibold text-[#1E0342]">
              David Williams
            </h2>
            <p className="text-[#1E0342] mt-2 text-xs md:text-base font-semibold">
              Licence Number: 1234556788810
            </p>
            <div className="w-full text-center mt-4">
              <div className="flex items-center justify-center mb-2 mt-[30px]">
                <div className="h-px bg-gray-400 w-1/6"></div>
                <p className="text-gray-500 mx-4 text-xs md:text-base">
                  Click to see attachment
                </p>
                <div className="h-px bg-gray-400 w-1/6"></div>
              </div>
              <div className="flex justify-center space-x-5">
                <Button className="bg-[#27374D] text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base w-[100px]">
                  CV
                </Button>
                <Button className="bg-[#27374D] text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base">
                  Certificate
                </Button>
                <Button className="bg-[#27374D] text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base">
                  Licence
                </Button>
              </div>
            </div>
          </Card>
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white w-full mb-[10px]">
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Accept Button */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full sm:w-[200px]">
                    Accept
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-[#27374D] font-semibold">
                      Approve Confirmation
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-[#27374D]">
                      Are you sure you want to approve this psychologist?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                              Confirm
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-[#27374D] font-semibold">
                                Consulin Notification
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-[#27374D]">
                                Psychologist successfully approved!
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <Link href="/dashboard">
                                <AlertDialogAction className="bg-[#1E0342]">
                                  Close
                                </AlertDialogAction>
                              </Link>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-[#27374D] font-semibold">
                            Consulin Notification
                          </AlertDialogTitle>
                          <AlertDialogDescription className="text-[#27374D]">
                            Psychologist successfully approved!
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <Link href="/dashboard">
                            <AlertDialogAction className="bg-[#1E0342]">
                              Close
                            </AlertDialogAction>
                          </Link>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialogAction className="bg-white text-black px-6 py-2 rounded-lg">
                      Cancel
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-red-500 text-white px-4 py-2 rounded-lg w-full sm:w-[200px]">
                    Reject
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-[#27374D] font-semibold">
                      Reject Confirmation
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-[#27374D]">
                      Are you sure you want to reject this psychologist?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="bg-[#DC3545] rounded-lg">
                          Confirm
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-[#27374D] font-semibold">
                            Consulin Notification
                          </AlertDialogTitle>
                          <AlertDialogDescription className="text-[#27374D]">
                            Psychologist successfully rejected!
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <Link href="/dashboard">
                            <AlertDialogAction className="bg-[#1E0342] rounded-lg">
                              Close
                            </AlertDialogAction>
                          </Link>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </Card>
        </div>
        <div className="flex flex-col space-y-6 w-full lg:w-2/3">
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white">
            <h3 className="text-md md:text-xl font-bold text-[#1E0342] mb-4">
              Psychologist Information Details
            </h3>
            <p className="text-[#1E0342] mb-2 text-xs md:text-base">
              Name: David Williams
            </p>
            <p className="text-[#1E0342] mb-2 text-xs md:text-base">
              Gender: Male
            </p>
            <p className="text-[#1E0342] mb-2 text-xs md:text-base">
              Email: david@woho.com
            </p>
            <p className="text-[#1E0342] text-xs md:text-base">
              Phone: 081234312134
            </p>
          </Card>
          <Card className="p-4 md:p-6 rounded-[30px] shadow-lg bg-white">
            <h3 className="text-md md:text-xl font-bold text-[#1E0342] mb-4">
              Additional Information
            </h3>
            <p className="text-[#1E0342] mb-2 text-xs md:text-base">
              Degree: Bachelor of Psychology
            </p>
            <p className="text-[#1E0342] mb-2 text-xs md:text-base">
              University: University of Bandung
            </p>
            <p className="text-[#1E0342] mb-2 text-xs md:text-base">
              Graduation Year: 2021
            </p>
            <p className="text-[#1E0342] mb-2 text-xs md:text-base">
              Language Major: English
            </p>
            <p className="text-[#1E0342] mb-2 text-xs md:text-base">
              Experience Year: 4 Years
            </p>
            <p className="text-[#1E0342] text-xs md:text-base">
              Specialist: Addiction Therapy
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
