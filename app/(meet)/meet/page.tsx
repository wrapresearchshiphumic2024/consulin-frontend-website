import { redirect } from "next/navigation";
import JitsiClient from "./_components/jitsi-client";

export default function Meet({
  searchParams,
}: {
  searchParams?: {
    room_id?: string;
  };
}) {
  const query = searchParams?.room_id;
  if (!query) {
    return redirect("/");
  }
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return (
    <>
      <JitsiClient />
    </>
  );
}
