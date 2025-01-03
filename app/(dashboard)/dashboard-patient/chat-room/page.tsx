import App from "@/app/(dashboard)/_components/layouts/chat";
import { auth } from "@/auth";
import { formatFullName } from "@/lib/helpers/string-helpers";
import { getProfilePatient } from "@/lib/services/patient/patient-service";
import TextSection from "../../_components/ui/text-section";

export default async function ChatRoomPatient() {
  const session = await auth();
  const user = await getProfilePatient(session?.user.access_token);
  const apiKey = process.env.API_KEY;

  const userId = user.id;
  const userName = formatFullName(user.firstname, user.lastname);

  if (!apiKey) {
    return <div>Error: API key not found.</div>;
  }

  return (
    <>
      <TextSection
        title="Chatroom"
        subtitle="Chat with pscyhologist appointments"
      />
      <div className="flex h-[530px]  w-full p-5 bg-white rounded-3xl mt-5">
        <App
          apiKey={apiKey}
          userId={userId}
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
