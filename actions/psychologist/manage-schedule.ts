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
    revalidateTag("detail-psychologist");
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
    revalidateTag("detail-psychologist");
    revalidateTag("schedule-psychologist");
    return { success: status as string};
}

export async function updateSchedule(session: string,data: {  days: string[], times: { start: string, end: string }[] }) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const json_data = JSON.stringify(data)
    console.log(json_data);
    const appointment = await fetch(`${process.env.API_URL}/api/psychologist/schedule/update`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        body: json_data,
    });
    if (!appointment.ok) {
        console.error("Error Response Status:", appointment.status);

        let errorResponse;
        try {
            errorResponse = await appointment.json();
        } catch (err) {

            const textResponse = await appointment.text(); 
            console.error("Error Response Body (HTML):", textResponse);      
            return;
        }
        console.error("Error Response Body (JSON):", errorResponse); 
        return; 
    }

    const response = await appointment.json();

    let status = response.status;
    revalidateTag("psychologst-list");
    revalidateTag("detail-psychologist");
    revalidateTag("schedule-psychologist");
    return { success: status };
}



