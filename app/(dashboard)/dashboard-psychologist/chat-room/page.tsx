import { createToken } from "@/actions/chat-token";
import App from "../../_components/layouts/chat";

export default function Home() {
  const apiKey = process.env.API_KEY;

  const userId = "Psycholog_f989c982-fb97-4d63-939d-e445b81e9d66";
  const userName = "Psycholog";

  if (!apiKey) {
    return <div>Error: API key not found.</div>;
  }

  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        Chatroom
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Chat with patients during appointments
      </p>
      <div className="flex h-[530px]  bg-white w-full p-5  rounded-3xl mt-5">
        <App
          apiKey={apiKey}
          createToken={createToken}
          userId={userId}
          userName={userName}
          image={"https://github.com/shadcn.png"}
        />
      </div>
    </>
  );
}
