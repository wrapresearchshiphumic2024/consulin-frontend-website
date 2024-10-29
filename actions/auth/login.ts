'use server'
import { signIn } from "@/auth";
import { formLoginSchema } from "@/helpers/validations/validation-auth";
import { AuthError } from "next-auth";

type LoginResult = 
  | { errors: { email?: string[]; password?: string[] } }
  | { success: string }
  | { error: string };

export async function loginAction(data: FormData): Promise<LoginResult> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const formData = Object.fromEntries(data);
    const validatedFields = formLoginSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const result = await signIn("credentials", {
      redirect: false,
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    });

    if (result?.error) {
      return { error: result.error };
    }
    
    return { success: "Sign in successfully" };
  } catch (e) {
    if (e instanceof AuthError) {
      if (e.cause?.err?.message === "Email not found") {
        return { error: "Email not found" };
      } else if (e.cause?.err?.message === "Incorrect password") {
        return { error: "Incorrect password" };
      }
    }
    return { error: "An unknown error occurred" };
  }
}
