// app/api/chat-token/route.ts
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
    const { userId } = await request.json();

    if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    try {
        const serverClient = getServerClient();
        const token = serverClient.createToken(userId);
        await serverClient.upsertUser({ id: userId });

        return NextResponse.json({ token });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
