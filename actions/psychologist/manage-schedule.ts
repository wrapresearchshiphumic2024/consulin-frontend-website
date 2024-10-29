"use server"

import { revalidateTag } from "next/cache";

export async function openAppointment(session : string){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const appointment = await fetch(`${process.env.API_URL}/api/psychologist/schedule/open`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },

    });
    const response = await appointment.json();
    let status = response.status;
    revalidateTag("psychologst-list");
    revalidateTag("schedule-psychologist");
    return { success: status as string};
}

export async function closeAppointment(session : string){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const appointment = await fetch(`${process.env.API_URL}/api/psychologist/schedule/close`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
    });
    const response = await appointment.json();
    let status = response.status;
    revalidateTag("psychologst-list");
    revalidateTag("schedule-psychologist");
    return { success: status as string};
}