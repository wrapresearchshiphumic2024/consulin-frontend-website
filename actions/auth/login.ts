'use server'
import { signIn } from "@/auth";
import { formLoginSchema } from "@/helpers/validations/validation-auth";
export async function loginAction(data: FormData) {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const formData = Object.fromEntries(data);
        const validatedFields = formLoginSchema.safeParse(formData);
        
        if (!validatedFields.success) {
          return {
            errors: validatedFields.error.flatten().fieldErrors,
          }
        }
        const response = await signIn("credentials", {redirect:false, email: validatedFields.data.email, password: validatedFields.data.password});
        console.log("response", response);
        return { success: "success"};

      } catch (e) {
        console.log("error", e);
        return { errors: { email: "Email atau password salah" } };
      }

}