import App from "../../_components/layouts/chat";
import { auth } from "@/auth";
import { formatFullName } from "@/lib/helpers/string-helpers";
import { getProfilePsychologist } from "@/lib/services/psychologist/psychologist-service";
import TextSection from "../../_components/ui/text-section";

export default async function ChatRoomPsychologist() {
  const session = await auth();
  const user = await getProfilePsychologist(session?.user.access_token);
  const apiKey = process.env.API_KEY;
  const userName = formatFullName(user.firstname, user.lastname);
  if (!apiKey) {
    return <div>Error: API key not found.</div>;
  }

  return (
    <>
      <TextSection
        title="Chatroom"
        subtitle="Chat with patients during appointments"
      />
      <div className="flex  h-[530px] flex-col md:flex-row bg-white w-full p-5  rounded-3xl mt-5">
        <App
          apiKey={apiKey}
          userId={user.id}
          userName={userName}
          image={
            user.profile_picture ||
            `https://getstream.io/random_png/?name=${userName}`
          }
        />
      </div>
    </>
  );
}
