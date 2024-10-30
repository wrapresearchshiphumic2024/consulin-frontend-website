import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { auth } from "@/auth";

export default async function Footer() {
  const session = await auth();
  return (
      <div className="pt-[120px] bg-white">

        <div
          className="bg-primary-custom_primary  rounded-t-[50px]"
          id="contact"
        >
          <section className="container mx-auto px-5 z-10 md:px-24 md:pt-12">
            <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center py-10">
              {/* Left section: Logo and Contact Info */}
              <div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0 text-white">
                <div className="flex items-center mb-4">
                  {/* Correct usage of Image component */}
                  <Image
                    src="/assets/images/logo-light 1.png"
                    alt="Consulin Logo"
                    width={100}
                    height={30} // Set appropriate width and height
                    className="h-8 w-auto"
                  />
                  <h2 className="ml-2 text-lg font-bold">CONSULIFE</h2>
                </div>
                <p className="text-center lg:text-left">
                  Phone Number: +62 0812345678
                </p>
                <p className="text-center lg:text-left">
                  Email: consulifeid@office.id
                </p>
              </div>

              {/* Right section: CTA and Buttons */}
              <div className="flex flex-col items-center lg:items-end text-white text-center lg:text-right">
                <h3 className="font-bold text-xl mb-2">START CONSULTATION NOW!</h3>
                <p className="text-center lg:text-right">
                  Log in or sign up to connect with a <br /> professional
                  psychologist
                </p>

                {/* Sign In / Sign Up Buttons */}
                <div className="mt-4 mb-4 flex space-x-2">
                  {session?.user ? (
                    <Link href="/dashboard">
                      <Button
                        className={`bg-secondary-custom_secondary text-black hover:bg-secondary-custom_secondary rounded-3xl`}
                      >
                        Dashboard
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Link href="/signin">
                        <Button
                          className={`bg-secondary-custom_secondary text-black hover:bg-secondary-custom_secondary rounded-3xl`}
                        >
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/signup">
                        <Button
                          className={`bg-secondary-custom_secondary text-black hover:bg-secondary-custom_secondary rounded-3xl`}
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom section: Social Icons and Copyright */}
            <div className="mt-8 flex flex-col lg:flex-row justify-between items-center border-t border-white pt-4 text-white pb-[50px]">
              {/* Left side: Text */}
              <div className="mb-4 lg:mb-0 text-center lg:text-left">
                <p className="text-sm">
                  &copy; 2024 Consulife. All rights reserved.
                </p>
              </div>

              {/* Right side: Social media icons */}
              <div className="flex justify-center lg:justify-end space-x-4">
                <Link href="#" className="text-white hover:opacity-75">
                  <Image
                    src="/assets/icons/ig.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </Link>
                <Link href="#" className="text-white hover:opacity-75">
                  <Image
                    src="/assets/icons/fb.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </Link>
                <Link href="#" className="text-white hover:opacity-75">
                  <Image
                    src="/assets/icons/ln.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

  );
}
