import Image from "next/image";

const testimonials = [
  {
    icon: "/assets/images/cewe.jpg",
    name: "Raul S.",
    role: "Student in Telkom University",
    description:
      "I didn't expect that online counseling could be this close to face-to-face counseling. Consulife helped me overcome anxiety with a very comfortable approach.",
  },
  {
    icon: "/assets/images/cowobiru.jpg",
    name: "Vincent",
    role: "Private Employee",
    description:
      "Consulife has really helped me manage my work-related stress and anxiety. I can instantly connect with a psychologist and AI initial assessment is also very precise and useful!",
  },
  {
    icon: "/assets/images/cowohitam.jpg",
    name: "Dina K",
    role: "Housewife",
    description:
      "The combination of AI and professional consultation at Consulife has really made it easier for me to maintain my mental health. I don't have to worry about finding the right psychologist anymore.",
  },
];

export default function Client() {
  return (
    <section className="pt-[100px]" id="how">
      <div className="container mx-auto px-5 md:px-24 z-10">
        <div className="text-center text-[#27374D]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            What Our Client Says
          </h1>

          <p className="text-base sm:text-lg text-[#27374D] mb-10">
            Happiness is for everyone,{" "}
            <span className="font-bold">including you.</span>
          </p>

          {/* Decorative Circle */}
          {/* <div
            className="w-[150px] h-[150px] bg-accent-custom_accent flex justify-center items-center rounded-full absolute top-[-50px] left-[50%] transform -translate-x-1/2 z-[0]"
          ></div> */}
        </div>

        {/* Responsive Flex Layout for Testimonials */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 justify-center items-center lg:items-start pt-[50px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center text-[#1E0342] w-full lg:w-[300px] h-auto mb-6 lg:mb-0"
            >
              <div
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] overflow-hidden mb-4"
                style={{ borderRadius: "0px 100px 100px 100px" }}
              >
                <Image
                  src={testimonial.icon}
                  alt={testimonial.name}
                  width={300}
                  height={300}
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold mt-[10px]">
                {testimonial.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-2">
                {testimonial.role}
              </p>
              <p className="text-[#1E0342] mt-[20px] sm:mt-[30px]">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
