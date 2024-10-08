import Link from "next/link";
import Image from "next/image";
import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function DashboardLayoutTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden md:block  bg-muted/40">
        <div className="fixed inset-y-0 left-0 z-10 w-[220px] lg:w-[280px]  bg-primary-custom_primary">
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
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 bg-secondary-custom_secondary/[.08]  text-secondary-custom_secondary  transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-secondary-custom_secondary transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Approve Psyghologst
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg  text-secondary-custom_secondary px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                List Psyghologst
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4 absolute bottom-0 flex-1 right-0 left-0 ">
            <div className="border-t-2 pt-4 ">
              <nav className="grid items-start text-sm font-medium gap-3">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg  px-3 py-2 text-secondary-custom_secondary transition-all hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Setting
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-secondary-custom_secondary transition-all hover:text-primary"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Sign Out
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 ">
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
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-secondary-custom_secondary/[.08]  text-secondary-custom_secondary px-3 py-2  hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground text-secondary-custom_secondary"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
                <nav className="grid gap-2 text-lg font-medium ">
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Setting
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-secondary-custom_secondary hover:text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Sign Out
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full ">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
