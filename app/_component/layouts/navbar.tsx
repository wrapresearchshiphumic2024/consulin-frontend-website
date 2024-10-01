import { Button } from "@/components/ui/button";
import Link from "next/link";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#27374D] fixed top-0 right-0 left-0 z-50">
      <div className="flex items-center p-4 container mx-auto px-5 md:px-24 justify-between z-50">
        <div className="overflow-hidden w-[150px] md:w-[200px]  ">
          <Image
            src="/assets/images/logo-navbar.png"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="logo consulin"
          />
        </div>
        <div
          className={` lg:flex gap-5 text-secondary-custom_secondary items-center hidden`}
        >
          <Link href="/">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="/ninjas">Features</Link>
          <Link href="/ninjas">Collaborate</Link>
          <Link href="/ninjas">FAQ</Link>
          <Link href="/ninjas">Contact</Link>
          <Link href="/ninjas">
            <Button
              className={`bg-secondary-custom_secondary text-black hover:bg-secondary-custom_secondary`}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
