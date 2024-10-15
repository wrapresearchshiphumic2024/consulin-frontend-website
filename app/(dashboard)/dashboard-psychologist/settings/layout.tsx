import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function SettingsLayouts({
  children,
  personal_information,
  educational,
}: {
  children: React.ReactNode;
  personal_information: React.ReactNode;
  educational: React.ReactNode;
}) {
  return (
    <div className="w-full text-netral-primary">
      {children}
      <div className="grid md:grid-cols-3 md:grid-rows-6 gap-4 mt-10 ">
        <div className="order-1 md:row-span-4   ">
          <div className="bg-secondary-custom_secondary rounded-3xl md:p-5 p-3 h-full flex justify-center items-center flex-col gap-10">
            <Avatar className="lg:w-56 lg:h-56 w-36 h-36 border-8 border-[#DDE7F9]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button>Change Photo</Button>
          </div>
        </div>

        <div className="md:row-span-3 md:col-span-2 order-3">
          <div className="bg-secondary-custom_secondary rounded-3xl md:p-10 p-3 h-full flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-netral-primary">
              Personal Information
            </h3>
            {personal_information}
          </div>
        </div>

        <div className="order-4 md:row-span-3 md:col-span-2  lg:order-3">
          <div className="bg-secondary-custom_secondary rounded-3xl md:p-10 p-3 h-full flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-netral-primary">
              Medical and Educational Information
            </h3>
            {educational}
          </div>
        </div>
        <div className="order-2 md:order-4 md:row-span-3">
          <div className="bg-secondary-custom_secondary rounded-3xl md:p-5 p-3 h-full flex justify-center items-center flex-col gap-5">
            <h3 className="text-2xl font-semibold">Change Password</h3>
            <Button>Send Reset Link</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
