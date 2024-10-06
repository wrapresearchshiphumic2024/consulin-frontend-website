export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-col justify-center items-center container min-h-screen mx-auto md:px-24 py-20 bg-secondary-custom_secondary  z-10 overflow-hidden ">
        <div className="absolute -right-48 -top-48 md:w-96 md:h-96 w-72 h-64 bg-secondary-custom_secondary border-[50px] md:border-[100px] border-netral-primary rounded-full z-20"></div>
        <div className=" w-full lg:px-52 z-10 px-3">{children}</div>
      </section>
    </>
  );
}
