import { createToken } from "@/actions/chat-token";
import { Card } from "@/components/ui/card";
import App from "../../_components/layouts/chat";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function DetailAppointment() {
  const apiKey = process.env.API_KEY;

  const userId = "Patient_17fd95c7-eb1b-4140-9dcf-4d52f0560ec9";
  const userName = "Patient";

  if (!apiKey) {
    return <div>Error: API key not found.</div>;
  }
  return (
    <> 
    <div className="flex items-center mb-5 gap-3">
      <Link href="/dashboard-patient">
        <Button className="p-2 rounded-[100px] bg-white shadow-md h-[35px] w-[35px] flex items-center justify-center">
          <Image
            src="/assets/icons/back.png"
            alt="Back"
            width={10}
            height={10}
          />
        </Button>
      </Link>
      <div className="flex flex-col pl-3">
        <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
          Detail Appointment
        </h2>
        <p className="text-left text-[#1E034280] font-semibold mt-3">
          View appointment details on this page and chat with psychologist
        </p>
      </div>
    </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="space-y-4 col-span-1">
        <div className="flex flex-col rounded-[30px] bg-white w-full shadow-lg">
          <div className="w-full bg-[#28A745] rounded-t-[30px] text-white text-center py-3 font-bold text-lg">
            Ongoing
          </div>
          <div className="flex flex-col p-6 space-y-3">
            <h3 className="font-bold text-[#1E0342] text-lg">Personal Information</h3>
            <p className="text-[#1E0342]">Name: David Williams</p>
            <p className="text-[#1E0342]">Gender: Male</p>
            <p className="text-[#1E0342]">Email: marjo.@woho.id</p>
            <p className="text-[#1E0342]">Specialization: Anxiety Disorders</p>
            <p className="text-[#1E0342]">Experience: 4 years</p>
          </div>
        </div>
        <div className="flex flex-col p-6 rounded-[30px] bg-white w-full shadow-lg space-y-3">
          <h3 className="font-bold text-[#1E0342] text-lg">Appointment Information</h3>
          <p className="text-[#1E0342]">Date: 2024-10-15</p>
          <p className="text-[#1E0342]">Time: 09 AM</p>
          <p className="text-[#1E0342]">Status: Ongoing</p>
          <p className="text-[#1E0342]">Duration: 1 Hour</p>
        </div>
      </div>
        <div className="lg:col-span-2">
          <div className="p-4 md:p-6 rounded-[30px]  bg-white w-full h-[530px]">
            <App
              apiKey={apiKey}
              createToken={createToken}
              userId={userId}
              channelId="messaging:!members--4fb2ZwmLHa98rIcxEwXmqgYOdJcOrwQyKWEumQGy3E"
              userName={userName}
              channelList={true}
              image={
                "https://media.istockphoto.com/id/2155498773/id/foto/wanita-percaya-diri-berjalan-dengan-koper-merah-di-lingkungan-perkotaan-modern.jpg?s=2048x2048&w=is&k=20&c=v5ZXzWRBGbXJl2XnYAPSVYW3h9Fk4z-0Hy39GhZZIUg="
              } 
             />
          </div>
        </div>
      </div>
    </>
  );
}
