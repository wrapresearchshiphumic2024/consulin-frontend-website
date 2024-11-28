"use server";

import { revalidateTag } from "next/cache";

export async function addAppointment(session: string, psychologist_id: string, data: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const appointment = await fetch(`${process.env.API_URL}/api/patients/psychologists/${psychologist_id}/book`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${session}`,
            "Accept": "application/json",
        },
        body: data,
    });

    const response = await appointment.json();
    console.log(response);
    revalidateTag("appointment-patient");
    revalidateTag("detail-appointment-patient");
    if (response.status === "success") {
        return { status: "success", message: "appointment successfully scheduled" }; 
    } else {
        return { status: "error", message: response.message || "Failed to add appointment." }; 
    }
}
