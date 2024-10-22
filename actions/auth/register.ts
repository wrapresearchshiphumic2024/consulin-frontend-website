"use server";

import { formSignUpSchema } from "@/helpers/validations/validation-auth";

export async function register(data: FormData) {

    const formData = Object.fromEntries(data.entries());

    const validatedFields = formSignUpSchema.safeParse(formData);
    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { confirm_password, ...dataToSend } = validatedFields.data;
    console.log("Data yang dikirim:", dataToSend);
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
    return { success: status};
  
}
