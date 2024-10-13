"use client";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkProps } from "../layouts/navbar";
import { Button } from "@/components/ui/button";
interface DesktopNavbarProps {
  links: LinkProps[];
}
export default function HamburgerNavbar({ links }: DesktopNavbarProps) {
  const [isOpen, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "features",
        "collaborate",
        "faq",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          if (top < viewportHeight / 2 && bottom > viewportHeight / 2) {
            setActiveId(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="relative z-50 ">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#F5F5F7" />
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#27374D] flex flex-col items-center justify-center text-secondary-custom_secondary gap-4 z-40">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-all",
                activeId === link.id.toLowerCase() && "font-bold"
              )}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Link href="/signin">
            <Button
              className={`bg-secondary-custom_secondary text-black hover:bg-secondary-custom_secondary rounded-3xl`}
            >
              Sign In
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
