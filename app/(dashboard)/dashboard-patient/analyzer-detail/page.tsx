import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function DetailAnalyzer() {
  return (
    <>
      <div className="flex mb-5 gap-3">
        <Link href="/dashboard-patient/ai-analyzer">
          <Button className="p-2 rounded-[100px] bg-white shadow-md h-[35px] w-[35px] flex items-center justify-center">
            <Image
              src="/assets/icons/back.png"
              alt="Back"
              width={10}
              height={10}
            />
          </Button>
        </Link>

        <div className="pl-3">
          <h1 className="text-5xl font-bold text-netral-primary">
            AI Analyzer History
          </h1>
          <p className="mt-3 text-[#1E034280] font-semibold">
            View your AI analyzer history on this page
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div className="bg-white p-6 rounded-xl shadow-md h-full w-full">
          <p className="text-lg text-[#1E0342] font-semibold">2024-10-01</p>
          <hr className="my-3 border-gray-300 w-[120px]" />
          <p className="text-black ">
            I often feel overwhelmed with my daily tasks, and I struggle to find
            motivation. I have trouble sleeping and frequently feel anxious
            about upcoming deadlines. Additionally, I sometimes feel sad without
            any specific reason, making it difficult to enjoy things I once
            liked.
          </p>
          <hr className="my-3 border-gray-300 w-[120px]" />
          <div className="font-semibold">
            <p>Probability of Stress: 60%</p>
            <p>Probability of Anxiety: 40%</p>
            <p>Probability of Depression: 70%</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md h-full w-full">
          <p className="text-lg text-[#1E0342] font-semibold">2024-09-29</p>
          <hr className="my-3 border-gray-300 w-[120px]" />
          <p className="text-black ">
            Over the past month, I’ve experienced significant mood swings. Some
            days I feel extremely sad without any particular reason, and I lose
            interest in things I usually enjoy. Other times, I’m irritable and
            get frustrated easily. These shifts in my mood are affecting my
            relationships with family and friends, and I’m struggling to manage
            my emotions. I’m also finding it hard to stay motivated at work.
          </p>
          <hr className="my-3 border-gray-300 w-[120px]" />
          <div className="font-semibold">
            <p>Probability of Stress: 60%</p>
            <p>Probability of Anxiety: 40%</p>
            <p>Probability of Depression: 70%</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md h-full w-full">
          <p className="text-lg text-[#1E0342] font-semibold">2024-08-11</p>
          <hr className="my-3 border-gray-300 w-[120px]" />
          <p className="text-black ">
            I have been feeling constantly anxious over the past few weeks.
            Small tasks seem overwhelming, and I often find myself worrying
            about things that haven’t even happened yet. My sleep patterns have
            been erratic, and I wake up frequently in the middle of the night
            feeling tense. These feelings of unease are making it difficult for
            me to concentrate at work, and I’m starting to withdraw from social
            activities.
          </p>
          <hr className="my-3 border-gray-300" />
          <div className="font-semibold">
            <p>Probability of Stress: 60%</p>
            <p>Probability of Anxiety: 40%</p>
            <p>Probability of Depression: 70%</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md h-full w-full">
          <p className="text-lg text-[#1E0342] font-semibold">2024-06-21</p>
          <hr className="my-3 border-gray-300 w-[120px]" />
          <p className="text-black ">
            I’ve been under a lot of stress recently due to increased
            responsibilities at work. I feel like there’s no time to relax, and
            I’ve noticed that I’m becoming more forgetful and distracted. I
            often feel exhausted even after a full night’s sleep, and I’m having
            trouble balancing my work and personal life. This constant pressure
            is making me feel burned out, and I’m worried it’s affecting my
            health.
          </p>
          <hr className="my-3 border-gray-300" />
          <div className="font-semibold">
            <p>Probability of Stress: 60%</p>
            <p>Probability of Anxiety: 40%</p>
            <p>Probability of Depression: 70%</p>
          </div>
        </div>
      </div>
    </>
  );
}
