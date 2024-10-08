import { Button } from "@/components/ui/button";
import Link from "next/link";

import Image from "next/image";
import HamburgerNavbar from "../ui/hamburger-navbar";
import { DesktopNavbar } from "../ui/desktop-navbar";

export interface LinkProps {
  href: string;
  title: string;
  id: string;
}

const links: LinkProps[] = [
  {
    href: "#home",
    title: "Home",
    id: "home",
  },
  {
    href: "#about",
    title: "About Us",
    id: "about",
  },
  {
    href: "#features",
    title: "Features",
    id: "features",
  },
  {
    href: "#collaborate",
    title: "Collaborate",
    id: "collaborate",
  },
];
export default function Navbar() {
  return (
    <nav className="bg-[#27374D] fixed top-0 right-0 left-0 z-50 shadow-md">
      <div className="flex items-center p-4 container mx-auto px-5 md:px-24 justify-between z-50">
        <div className="overflow-hidden w-[150px] md:w-[200px] z-50   ">
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
          className={` lg:flex gap-10 text-secondary-custom_secondary items-center hidden`}
        >
          <DesktopNavbar links={links} />
          <Link href="/signin">
            <Button
              className={`bg-secondary-custom_secondary text-black hover:bg-secondary-custom_secondary rounded-3xl`}
            >
              Sign In
            </Button>
          </Link>
        </div>
        <div className="lg:hidden ">
          <HamburgerNavbar links={links} />
        </div>
      </div>
    </nav>
  );
}
