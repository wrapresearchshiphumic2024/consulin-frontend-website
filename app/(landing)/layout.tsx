import Navbar from "./_component/layouts/navbar";
import { SessionProvider } from "next-auth/react";
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider>
        <Navbar />
        {children}
      </SessionProvider>
    </>
  );
}
