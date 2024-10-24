import Link from "next/link";
import Image from "next/image";

export default function DetailWait() {
  return (
    <>
      {/* Back Button and Title */}
      <div className="flex mb-5 gap-3">
        <Link href="/dashboard-patient">
          <button className="p-2 rounded-full bg-secondary-custom_secondary hover:bg-white shadow-md h-[35px] w-[35px] flex items-center justify-center">
            <Image
              src="/assets/icons/back.png"
              alt="Back"
              width={10}
              height={10}
            />
          </button>
        </Link>
        <div className="pl-3">
          <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
            Detail Appointment
          </h2>
          <p className="mt-1 text-[#1E034280] font-semibold">
            View appointment details on this page
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div className="bg-white rounded-2xl shadow-lg">
          <div className="w-full bg-[#27374D] pt-4 rounded-t-2xl text-white text-center py-2 font-bold text-lg h-[60px]">
            Waiting
          </div>
          <div className="flex flex-col items-center mt-4 ">
            <Image
              src="/assets/images/satu.png"
              alt="David Williams"
              width={150}
              height={150}
              className="rounded-full"
            />
            <h3 className="text-xl font-bold mt-5 text-[#1E0342]">
              David Williams
            </h3>
          </div>
          <div className="mt-2 space-y-2 text-[#1E0342] p-10 font-semibold">
            <p>Gender: Male</p>
            <p>Email: marjo.@woho.id</p>
            <p>Specialization: Anxiety Disorders</p>
            <p>Experience: 4 years</p>
          </div>
        </div>

        {/* Right Side: Appointment Information */}
        <div className="flex flex-col space-y-6">
          {/* Appointment Info */}
          <div className="bg-white p-6 rounded-2xl shadow-lg h-[250px]">
            <h3 className="font-bold text-lg text-[#1E0342]">
              Appointment Information
            </h3>
            <div className="mt-4 space-y-2 text-[#1E0342] font-semibold">
              <p>Date: 2024-10-15</p>
              <p>Time: 09 AM</p>
              <p>Status: Ongoing</p>
              <p>Duration: 1 Hours</p>
            </div>
          </div>

          {/* Note Section */}
          <div className="bg-white p-6 rounded-2xl shadow-lg font-semibold h-[220px]">
            <h3 className="font-bold text-lg text-[#1E0342]">Note</h3>
            <p className="mt-2 text-[#1E0342]">
              Make sure you have a stable internet connection and are in a quiet
              place during the consultation session.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
