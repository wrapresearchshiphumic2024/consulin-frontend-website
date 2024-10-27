"use server"

import { revalidateTag } from "next/cache";

export async function approvePsychologst(session : string, uuid:string){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = await fetch(`${process.env.API_URL}/api/psychologists/${uuid}/approve`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },

    });
    const response = await user.json();
    let status = response.status;
    revalidateTag("psychologst-list");
    return { success: status as string};
}

export async function rejectPsychologst(session : string, uuid:string){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = await fetch(`${process.env.API_URL}/api/psychologists/${uuid}/reject`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },

    });
    const response = await user.json();
    let status = response.status;
    revalidateTag("psychologst-list");
    return { success: status as string};
}