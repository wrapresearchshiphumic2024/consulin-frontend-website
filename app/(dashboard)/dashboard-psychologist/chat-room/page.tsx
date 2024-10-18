import { StreamChat } from "stream-chat";
import App from "../../_components/layouts/chat";

export default function Home() {
  async function createToken(userId: string): Promise<string> {
    "use server";

    const apiKey = process.env.API_KEY;
    const secret = process.env.STREAM_SECRET;

    if (!apiKey) throw new Error("API key not found");
    if (!secret) throw new Error("Secret not found");

    const serverClient = new StreamChat(apiKey, secret);
    return serverClient.createToken(userId);
  }

  const apiKey = process.env.API_KEY;

  const userId = "Psycholog_f989c982-fb97-4d63-939d-e445b81e9d66";
  const userName = "Psycholog";

  if (!apiKey) {
    return <div>Error: API key not found.</div>;
  }

  return (
    <div className="flex h-[650px]  w-full p-5">
      <App
        apiKey={apiKey}
        createToken={createToken}
        userId={userId}
        userId2="Patient_17fd95c7-eb1b-4140-9dcf-4d52f0560ec9"
        userName={userName}
        image={"https://github.com/shadcn.png"}
      />
    </div>
  );
}
