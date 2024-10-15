"use client";

import { useCallback, useEffect } from "react";
import {
  Channel,
  ChannelHeader,
  ChannelList,
  Chat,
  DefaultStreamChatGenerics,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useCreateChatClient,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import { ChannelSort } from "stream-chat";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function App({
  apiKey,
  createToken,
  userId,
  userName,
  image,
}: {
  apiKey: string;
  createToken: (userId: string) => Promise<string>;
  userId: string;
  userName: string;
  image: string;
}) {
  const tokenProvider = useCallback(async () => {
    return await createToken(userId);
  }, [createToken, userId]);

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: tokenProvider,
    userData: {
      id: userId,
      name: userName,
      image: image,
    },
  });

  const sort: ChannelSort<DefaultStreamChatGenerics> = { last_message_at: -1 };
  const filters = {
    type: "messaging",
    members: { $in: [userId] },
  };
  const options = {
    limit: 10,
  };
  // Fungsi untuk membuat channel privat dengan 2 anggota
  const createPrivateChannel = async () => {
    const channel = client?.channel("messaging", {
      members: [
        "Psycholog_f989c982-fb97-4d63-939d-e445b81e9d66",
        "Patient_17fd95c7-eb1b-4140-9dcf-4d52f0560ec9",
      ],
      created_by_id: userId,
    });

    await channel?.create();
  };

  useEffect(() => {
    if (client) {
      createPrivateChannel();
    }
  }, [client]);

  // function CustomChannelHeader(props: ChannelHeaderProps) {
  //   // Mengambil informasi channel dan state dari context Stream
  //   const { channel } = useChannelStateContext();

  //   // Mendapatkan informasi tentang user pertama di channel (misalnya untuk 1-1 chat)
  //   const member = channel.data || {};

  //   return (
  //     <div className="flex items-center p-4 border-b border-gray-300">
  //       {/* Avatar pengguna */}
  //       <Avatar>
  //         <AvatarImage src={props.image} alt="@shadcn" />
  //         <AvatarFallback>CN</AvatarFallback>
  //       </Avatar>
  //       {/* Informasi user */}
  //       <div className="flex items-center">
  //         <span className="font-bold mr-2">{props.title}</span>
  //         {/* Indikator Online */}
  //       </div>
  //     </div>
  //   );
  // }

  if (!client) return <div>Setting up client & connection</div>;
  return (
    <Chat client={client}>
      <ChannelList
        sort={sort}
        options={options}
        filters={filters}
        showChannelSearch
      />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}
