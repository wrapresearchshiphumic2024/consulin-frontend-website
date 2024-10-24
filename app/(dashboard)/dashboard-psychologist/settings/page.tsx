"use client";
import { useState } from "react";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import { ToastFailed, ToastSuccess } from "@/components/ui/toast-custom";

export default function Settings() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingMedical, setIsEditingMedical] = useState(false); // State untuk bagian medical
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "David Williams",
    gender: "Male",
    email: "david@woho.com",
    phone: "08123431234",
    licence: "123455678810",
  });

  const [medicalInfo, setMedicalInfo] = useState({
    specialist: "Addiction Therapy",
    degree: "Bachelor of Psychology",
    university: "University of Bandung",
    graduationYear: "2021",
    language: "English",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handleMedicalInputChange = (e) => {
    const { name, value } = e.target;
    setMedicalInfo({
      ...medicalInfo,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    toast.custom((t) => (
      <ToastSuccess label="Changes successfully saved" t={t} />
    ));
  };

  const handleSavePhotoChanges = () => {
    setIsEditingPhoto(false);
    toast.custom((t) => (
      <ToastSuccess label="Photo successfully updated" t={t} />
    ));
  };

  const handleSaveMedicalChanges = () => {
    setIsEditingMedical(false);
    toast.custom((t) => (
      <ToastSuccess label="Medical information successfully updated" t={t} />
    ));
  };

  const handleSendResetLink = () => {
    toast.custom((t) => (
      <ToastSuccess label="Reset link has been sent to your Email. Check it now!" t={t} />
    ));
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E0342] text-left">
            Setting
          </h2>
          <p className="mt-3 text-[#1E034280] font-semibold text-left">
            Manage Your Profile and Preferences Easily
          </p>
        </div>

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

              {isEditingPhoto ? (
                <div className="flex gap-4">
                  <button
                    className="bg-[#00AC69] text-white font-semibold py-2 px-4 rounded-lg"
                    onClick={handleSavePhotoChanges}
                  >
                    Save Changes
                  </button>
                  <button
                    className="bg-[#FF4B4B] text-white font-semibold py-2 px-4 rounded-lg"
                    onClick={() => setIsEditingPhoto(false)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="mt-4 bg-[#1E0342] text-white font-semibold py-2 px-4 rounded-lg"
                  onClick={() => setIsEditingPhoto(true)}
                >
                  Change Photo
                </button>
              )}
            </div>

            {/* Reset Password Card */}
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-center items-center h-[200px]">
              <h3 className="text-xl font-semibold text-[#1E0342]">Change Password</h3>
              <button
                className="mt-4 bg-[#1E0342] text-white font-semibold py-2 px-4 rounded-lg"
                onClick={handleSendResetLink}
              >
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

              {isEditing ? (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <label className="font-semibold w-1/3">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={personalInfo.name}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="font-semibold w-1/3">Gender</label>
                    <select
                      name="gender"
                      value={personalInfo.gender}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2 border rounded-md"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <label className="font-semibold w-1/3">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={personalInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="font-semibold w-1/3">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={personalInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="font-semibold w-1/3">Licence Number</label>
                    <input
                      type="text"
                      name="licence"
                      value={personalInfo.licence}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2 border rounded-md"
                    />
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button
                      className="bg-[#00AC69] text-white font-semibold py-2 px-6 rounded-lg"
                      onClick={handleSaveChanges}
                    >
                      Save Changes
                    </button>
                    <button
                      className="bg-[#FF4B4B] text-white font-semibold py-2 px-6 rounded-lg"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4 text-[#1E0342] font-medium space-y-3">
                  <p>Name: {personalInfo.name}</p>
                  <p>Gender: {personalInfo.gender}</p>
                  <p>Email: {personalInfo.email}</p>
                  <p>Phone: {personalInfo.phone}</p>
                  <p>Licence Number: {personalInfo.licence}</p>

                  <button
                    className="mt-4 bg-[#1E0342] text-white font-semibold py-2 px-4 rounded-lg"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Information
                  </button>
                </div>
              )}
            </div>

            {/* Medical and Educational Information Card */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-3">
              <h3 className="text-xl font-semibold text-[#1E0342]">
                Medical and Educational Information
              </h3>

              {isEditingMedical ? (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <label className="font-semibold w-1/3">Specialist</label>
                    <input
                      type="text"
                      name="specialist"
                      value={medicalInfo.specialist}
                      onChange={handleMedicalInputChange}
                      className="w-full px-2 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="font-semibold w-1/3">Degree</label>
                    <input
                      type="text"
                      name="degree"
                      value={medicalInfo.degree}
                      onChange={handleMedicalInputChange}
                      className="w-full px-2 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="font-semibold w-1/3">University</label>
                    <input
                      type="text"
                      name="university"
                      value={medicalInfo.university}
                      onChange={handleMedicalInputChange}
                      className="w-full px-2 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="font-semibold w-1/3">Graduation Year</label>
                    <input
                      type="text"
                      name="graduationYear"
                      value={medicalInfo.graduationYear}
                      onChange={handleMedicalInputChange}
                      className="w-full px-2 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="font-semibold w-1/3">Language</label>
                    <input
                      type="text"
                      name="language"
                      value={medicalInfo.language}
                      onChange={handleMedicalInputChange}
                      className="w-full px-2 py-2 border rounded-md"
                    />
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button
                      className="bg-[#00AC69] text-white font-semibold py-2 px-6 rounded-lg"
                      onClick={handleSaveMedicalChanges}
                    >
                      Save Changes
                    </button>
                    <button
                      className="bg-[#FF4B4B] text-white font-semibold py-2 px-6 rounded-lg"
                      onClick={() => setIsEditingMedical(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4 text-[#1E0342] font-medium space-y-3">
                  <p>Specialist: {medicalInfo.specialist}</p>
                  <p>Degree: {medicalInfo.degree}</p>
                  <p>University: {medicalInfo.university}</p>
                  <p>Graduation Year: {medicalInfo.graduationYear}</p>
                  <p>Language Major: {medicalInfo.language}</p>

                  <button
                    className="mt-4 bg-[#1E0342] text-white font-semibold py-2 px-4 rounded-lg"
                    onClick={() => setIsEditingMedical(true)}
                  >
                    Edit Information
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <Toaster position="bottom-right" />
      </div>
    </div>
  );
}
