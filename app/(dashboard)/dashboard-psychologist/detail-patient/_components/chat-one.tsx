import App from "@/app/(dashboard)/_components/layouts/chat";

export default function ChatOne() {
  const apiKey = process.env.API_KEY;

  const userId = "Psycholog_f989c982-fb97-4d63-939d-e445b81e9d66";
  const userName = "Psycholog";
  if (!apiKey) {
    return <div>Error: API key not found.</div>;
  }
  return (
    <App
      apiKey={apiKey}
      userId={userId}
      channelId="messaging:!members--4fb2ZwmLHa98rIcxEwXmqgYOdJcOrwQyKWEumQGy3E"
      userName={userName}
      channelList={true}
      image={"https://github.com/shadcn.png"}
    />
  );
}
