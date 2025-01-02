import Image from "next/image";

import { auth } from "@/auth";
import { getProfilePatient } from "@/lib/services/patient/patient-service";
import { formatFullName } from "@/lib/helpers/string-helpers";

export default async function Settings() {
  const session = await auth();
  const user = await getProfilePatient(session?.user.access_token);

  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold text-[#1E0342] text-left">
        Setting
      </h2>
      <p className="mt-3 text-[#1E034280] font-semibold text-left">
        Manage Your Profile and Preferences Easily
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md">
          <div className="w-100 h-100 mb-[50px]">
            <Image
              src="/assets/images/cewe.png"
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
          </div>

          <button className="mt-4 bg-[#1E0342] text-white font-semibold py-2 px-4 rounded-lg">
            Change Photo
          </button>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1E0342]">
              Personal Information
            </h3>

            <div className="mt-4 text-[#1E0342] font-medium space-y-3">
              <p>Name: {formatFullName(user.firstname, user.lastname)}</p>
              <p className="capitalize">Gender: {user.gender}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone_number}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1E0342]">
              Change Password
            </h3>
            <button className="mt-4 bg-[#1E0342] text-white font-semibold py-2 px-4 rounded-lg">
              Send Reset Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
