import App from "@/app/(dashboard)/_components/layouts/chat";

export default function ChatOne({
  userId,
  userName,
  channelId,
}: {
  userId: string;
  userName: string;
  channelId: string;
}) {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return <div>Error: API key not found.</div>;
  }
  return (
    <App
      apiKey={apiKey}
      userId={userId}
      channelId={channelId}
      userName={userName}
      channelList={true}
      image={`https://getstream.io/random_png/?name=${userName}`}
    />
  );
}
