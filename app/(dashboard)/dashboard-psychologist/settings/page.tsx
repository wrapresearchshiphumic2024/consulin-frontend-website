import { auth } from "@/auth";
import {
  formatCommaSeparated,
  formatFullName,
} from "@/lib/helpers/string-helpers";
import { getProfilePsychologist } from "@/lib/services/psychologist/psychologist-service";
import Image from "next/image";
import TextSection from "../../_components/ui/text-section";

export default async function Settings() {
  const session = await auth();
  const user = await getProfilePsychologist(session?.user.access_token);
  return (
    <>
      <TextSection
        title="Settings"
        subtitle="Manage Your Profile and Preferences Easily"
      />
      {/* 2 Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: Profile Picture and Reset Password */}
        <div className="flex flex-col space-y-8">
          {/* Profile Picture Card with extended height */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center h-full md:h-[400px]">
            <div className="w-100 h-100 mb-6">
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

          {/* Reset Password Card */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-center items-center h-[200px]">
            <h3 className="text-xl font-semibold text-[#1E0342]">
              Change Password
            </h3>
            <button className="mt-4 bg-[#1E0342] text-white font-semibold py-2 px-4 rounded-lg">
              Send Reset Link
            </button>
          </div>
        </div>

        {/* Column 2: Personal and Educational Information */}
        <div className="flex flex-col space-y-8">
          {/* Personal Information Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#1E0342]">
              Personal Information
            </h3>

            <div className="mt-4 text-[#1E0342] font-medium space-y-3">
              <p>Name: {formatFullName(user.firstname, user.lastname)}</p>
              <p>Gender: {user.gender} </p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone_number}</p>
              <p>
                Licence Number:{" "}
                {user.psychologist?.profesional_identification_number}
              </p>

              {/* <button className="mt-4 bg-[#1E0342] text-white font-semibold py-2 px-4 rounded-lg">
                  Edit Information
                </button> */}
            </div>
          </div>

          {/* Medical and Educational Information Card */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-3">
            <h3 className="text-xl font-semibold text-[#1E0342]">
              Medical and Educational Information
            </h3>

            <div className="mt-4 text-[#1E0342] font-medium space-y-3">
              <p>
                Specialist:{" "}
                {formatCommaSeparated(
                  user.psychologist?.specialization as string[]
                )}
              </p>
              <p>Degree: {user.psychologist?.degree}</p>
              <p>University: {user.psychologist?.university}</p>
              <p>Graduation Year: {user.psychologist?.graduation_year}</p>
              <p>
                Language Major:{" "}
                {formatCommaSeparated(user.psychologist?.language as string[])}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
