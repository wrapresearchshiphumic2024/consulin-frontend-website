import App from "@/app/(dashboard)/_components/layouts/chat";
import { StreamChat } from "stream-chat";

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

  const userId = "Patient_17fd95c7-eb1b-4140-9dcf-4d52f0560ec9";
  const userName = "Patient";

  if (!apiKey) {
    return <div>Error: API key not found.</div>;
  }

  return (
    <div className="flex">
      <App
        apiKey={apiKey}
        createToken={createToken}
        userId={userId}
        userName={userName}
        image={
          "https://media.istockphoto.com/id/2155498773/id/foto/wanita-percaya-diri-berjalan-dengan-koper-merah-di-lingkungan-perkotaan-modern.jpg?s=2048x2048&w=is&k=20&c=v5ZXzWRBGbXJl2XnYAPSVYW3h9Fk4z-0Hy39GhZZIUg="
        }
      />
    </div>
  );
}
