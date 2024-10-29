"use server";
import { StreamChat } from "stream-chat";


function getServerClient(): StreamChat {
    const apiKey = process.env.API_KEY;
    const secret = process.env.STREAM_SECRET;

    if (!apiKey) throw new Error("API key not found");
    if (!secret) throw new Error("Secret not found");

    return new StreamChat(apiKey, secret);
}


export async function createToken(userId: string): Promise<string> {
    const serverClient = getServerClient();
    return serverClient.createToken(userId);
}


export async function createUser(userId: string): Promise<void> {
    const serverClient = getServerClient();
  
    await serverClient.upsertUser({
        id: userId,
    });
}
