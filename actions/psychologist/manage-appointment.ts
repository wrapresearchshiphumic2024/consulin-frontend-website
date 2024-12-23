"use server";
import { revalidateTag } from "next/cache";

export async function doneAppointment(session : string, uuid:string){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = await fetch(`${process.env.API_URL}/api/psychologist/appointment-done/${uuid}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
    });
    const response = await user.json();
    console.log(response);
    let status = response.status;
    revalidateTag("appointment-schedule");
    revalidateTag("appointment-patient");
    return { success: status as string};
}
export async function cancelAppointment(session : string, uuid:string,data: FormData ){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data)
    const user = await fetch(`${process.env.API_URL}/api/psychologist/appointment-cancel/${uuid}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${session}`,
            "Accept": "application/json",
        },
        body: data
    });
    const response = await user.json();
    console.log(response);
    let status = response.status;
    revalidateTag("appointment-schedule");
    revalidateTag("appointment-patient");
    revalidateTag("consultation-data-psychologist");
    return { success: status as string};
}