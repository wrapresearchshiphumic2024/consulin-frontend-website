"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, PanelLeft, PanelRight, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function DashboardLayoutTemplate({
  children,
  sidebarDesktopChildren,
  sidebarMobileChildren,
  sidebarDesktopBottomChildren,
  sidebarMobileBottomChildren,
}: {
  children: React.ReactNode;
  sidebarDesktopChildren: React.ReactNode;
  sidebarMobileChildren: React.ReactNode;
  sidebarDesktopBottomChildren: React.ReactNode;
  sidebarMobileBottomChildren: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(true);
  function Opened() {
    setOpen(!isOpen);
  }
  return (
    <div
      className={cn(
        isOpen
          ? "lg:grid-cols-[280px_1fr] md:grid-cols-[220px_1fr]"
          : "lg:grid-cols-[0px_1fr] md:grid-cols-[0px_1fr] ",
        "grid min-h-screen w-full  transition-all bg-gradient-to-br from-[#DDE7F9]"
      )}
    >
      <div className="hidden md:block  bg-muted/40">
        <div
          className={cn(
            isOpen ? " translate-x-0 " : " -translate-x-full",
            "fixed inset-y-0 z-10 w-[220px] lg:w-[280px]  bg-primary-custom_primary transition-all "
          )}
        >
          <Button
            className="absolute -right-7 top-10  bg-primary-custom_primary rounded-r-lg -z-10"
            onClick={Opened}
            size={"icon"}
          >
            <PanelRight className="text-secondary-custom_secondary w-5 h-5 " />
          </Button>
          <div className="flex h-14 items-center lg:h-[60px] md:p-12">
            <Link href="/" className="font-semibold">
              <div className="overflow-hidden w-[140px] lg:w-[180px] z-50   ">
                <Image
                  src="/assets/images/logo-navbar.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  alt="logo consulin"
                />
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-3">
              {sidebarDesktopChildren}
            </nav>
          </div>
          <div className="mt-auto p-4 absolute bottom-0 flex-1 right-0 left-0 ">
            <div className="border-t-2 pt-4 ">
              <nav className="grid items-start text-sm font-medium gap-3">
                {sidebarDesktopBottomChildren}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="md:hidden flex h-14 items-center gap-4 px-4  lg:px-6  ">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden "
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col bg-primary-custom_primary"
            >
              <nav className="grid gap-2 text-lg font-medium ">
                <Link
                  href="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground text-secondary-custom_secondary"
                >
                  <div className="overflow-hidden w-[150px]  z-50   ">
                    <Image
                      src="/assets/images/logo-navbar.png"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-auto"
                      alt="logo consulin"
                    />
                  </div>
                </Link>
                {sidebarMobileChildren}
              </nav>
              <div className="mt-auto border-t-2 pt-4 ">
                <nav className="grid gap-2 text-lg font-medium ">
                  {sidebarMobileBottomChildren}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <main className=" px-5 lg:p-10 h-full w-full overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
