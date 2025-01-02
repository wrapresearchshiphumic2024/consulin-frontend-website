"use server"

import { revalidateTag } from "next/cache";

export async function approvePsychologst(session : string, uuid:string){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = await fetch(`${process.env.API_URL}/api/admin/psychologists/${uuid}/approve`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
    });
    const response = await user.json();
    console.log(response);
    let status = response.status;
    revalidateTag("psychologst-list");
    revalidateTag("admin-data");
    return { success: status as string};
}

export async function rejectPsychologst(session : string, uuid:string){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = await fetch(`${process.env.API_URL}/api/admin/psychologists/${uuid}/reject`, {
        method: "POST",
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