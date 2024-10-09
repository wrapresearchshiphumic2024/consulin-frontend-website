import CardDashboard from "./_components/card-dashboard";

export default function Dashboard() {
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Hello, Consulin Admins!
      </h2>
      <p>Have a good day!</p>

      <div className="grid md:grid-cols-2 grid-rows-2 gap-4 mt-10">
        <div className="order-1 lg:order-1">
          <CardDashboard
            label="Total Psychologists"
            total="10.1k"
            status="Psychologists"
            icon={<p>coba</p>}
          />
        </div>

        <div className="md:row-span-2 order-3 md:order-2">
          <div className="bg-secondary-custom_secondary rounded-3xl md:p-10 p-3">
            <center>
              <h3>Total Consultation</h3>
            </center>
            <div className="flex flex-col gap-4 mt-5">
              <CardDashboard
                label="On-Going Consultation"
                total="400"
                status="Psychologists"
                background="bg-[#DDE7F9]"
                icon={<p>coba</p>}
                styleLabel="md:text-xl"
                styleTotal="md:text-3xl"
                styleStatus="md:text-xl"
              />
              <CardDashboard
                label="Completed Consultation"
                total="200.2k"
                status="Psychologists"
                background="bg-[#DDE7F9]"
                icon={<p>coba</p>}
                styleLabel="md:text-xl"
                styleTotal="md:text-3xl"
                styleStatus="md:text-xl"
              />
            </div>
          </div>
        </div>

        {/* Elemen Ketiga (Menjadi Elemen Kedua di Mobile) */}
        <div className="order-2 lg:order-3">
          <CardDashboard
            label="Total Patient"
            total="120.1k"
            status="Patient"
            icon={<p>coba</p>}
          />
        </div>
      </div>
    </>
  );
}
