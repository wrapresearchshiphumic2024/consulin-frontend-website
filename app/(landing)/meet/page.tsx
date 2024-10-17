"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { JitsiMeeting } from "@jitsi/react-sdk";
export default function SearchBar() {
  const searchParams = useSearchParams();

  const roomname = searchParams.get("room_id");
  const router = useRouter();
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return (
    <>
      <JitsiMeeting
        roomName={roomname as string}
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        userInfo={{
          displayName: "YOUR_USERNAME",
          email: "faridzmuhamad679@gmail.com",
        }}
        onApiReady={(externalApi) => {
          // here you can attach custom event listeners to the Jitsi Meet External API
          // you can also store it locally to execute commands
        }}
        onReadyToClose={() => {
          return router.push("/");
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100vh";
        }}
      />
    </>
  );
}
