// app/api/create-channel/route.ts
import { StreamChat } from "stream-chat";
import { NextResponse } from "next/server";

function getServerClient(): StreamChat {
    const apiKey = process.env.API_KEY!;
    const secret = process.env.STREAM_SECRET!;

    if (!apiKey) throw new Error("API key not found");
    if (!secret) throw new Error("Secret not found");

    return new StreamChat(apiKey, secret);
}

export async function POST(request: Request) {
    const { patient_id, psychologist_id} = await request.json();

    if (!patient_id && !psychologist_id) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    try {
        const serverClient = getServerClient();

        const channel = serverClient.channel('messaging', {
            members: [
              patient_id,
              psychologist_id
            ],
            created_by_id: "muhammad63",
          });

        await channel.create();
        return NextResponse.json({ channel_id : channel.cid });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
