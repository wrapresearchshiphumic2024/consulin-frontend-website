import { createToken } from "@/actions/chat-token";
import App from "../../_components/layouts/chat";
import { auth } from "@/auth";
import { getProfilePsychologist } from "@/services/psychologist/psychologist-service";

export default async function ChatRoomPsychologist() {
  const session = await auth();
  const user = await getProfilePsychologist(session?.user.access_token);
  const apiKey = process.env.API_KEY;

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
      <div className="flex  h-[530px] flex-col md:flex-row bg-white w-full p-5  rounded-3xl mt-5">
        <App
          apiKey={apiKey}
          createToken={createToken}
          userId={user.id}
          userName={user.firstname + " " + user.lastname}
          image={"https://github.com/shadcn.png"}
        />
      </div>
    </>
  );
}
