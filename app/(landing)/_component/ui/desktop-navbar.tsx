"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkProps } from "../layouts/navbar";

interface DesktopNavbarProps {
  links: LinkProps[];
}
export function DesktopNavbar({ links }: DesktopNavbarProps) {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "features", "collaborate"];

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
  useEffect(() => {
    console.log(activeId);
  }, [activeId]);

  return (
    <>
      {/* <Link
        href="#home"
        className={cn("transition-all", activeId === "home" && "font-bold")}
      >
        Home
      </Link>
      <Link
        href="#about"
        className={cn("transition-all", activeId === "about" && "font-bold")}
      >
        About Us
      </Link>
      <Link
        href="#features"
        className={cn("transition-all", activeId === "features" && "font-bold")}
      >
        Features
      </Link>
      <Link
        href="#collaborate"
        className={cn(
          "transition-all",
          activeId === "collaborate" && "font-bold"
        )}
      >
        Collaborate
      </Link>
      <Link href="/ninjas" style={{ fontWeight: "normal" }}>
        FAQ
      </Link>
      <Link href="/ninjas" style={{ fontWeight: "normal" }}>
        Contact
      </Link> */}
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "transition-all",
            activeId === link.id.toLowerCase() && "font-semibold"
          )}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
}
