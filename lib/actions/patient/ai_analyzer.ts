"use server";

import { revalidateTag } from "next/cache";

export async function aiAnalyzer(session: string, data: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const appointment = await fetch(`${process.env.API_URL}/api/patients/ai-analyze`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${session}`,
            "Accept": "application/json",
        },
        body: data,
    });

    const response = await appointment.json();

    if (response.success === true) {
        revalidateTag("latest-history-ai-analyzer");
        revalidateTag("all-history-ai-analyzer");
        return { status: "success", message: "Ai analysis successfully" }; 
    } else {
        return { status: "error", message: response.message || "Ai analysis failed" }; 
    }
}
