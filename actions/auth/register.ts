"use server";

import { formSignUpSchema } from "@/helpers/validations/validation-auth";


export async function register(data: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const formData = Object.fromEntries(data.entries());

    const validatedFields = formSignUpSchema.safeParse(formData);
    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { confirm_password, ...dataToSend } = validatedFields.data;
    const user = await fetch(`${process.env.API_URL}/api/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
    });
    const response = await user.json();
    if (response.status === 'error') {
        return {
            errors: response.errors.email[0],
        };
    }
    let status = response.status;

    console.log("Response:", response);
    return { success: status};
  
}

export async function registerPsycholog(data: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = await fetch(`${process.env.API_URL}/api/register/psychologist`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
        },
        body: data,
    });

    // Mendapatkan respons dalam bentuk JSON
    const response = await user.json();
    console.log("Response:", response);
    if (response.status === 'error') {
        return {
            errors: response.errors.email[0],
        };
    }
    let status = response.status;
    return { success: status};
  
}
