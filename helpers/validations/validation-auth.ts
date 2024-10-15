import { z } from "zod";

export const formRegisterSchema = z
  .object({
    first_name: z
      .string()
      .min(1, { message: "First name is required" })
      .max(50, { message: "First name cannot exceed 50 characters" }),
    last_name: z
      .string()
      .min(2, { message: "Last name is required" })
      .max(50, { message: "Last name cannot exceed 50 characters" }),
    gender: z
      .string()
      .min(2, { message: "Gender is required" }),
     
    email: z
      .string()
      .email({ message: "Please provide a valid email address" }),
    phone_number: z
      .string()
      .min(10, { message: "Phone number must be at least 10 characters" })
      .max(15, { message: "Phone number cannot exceed 15 characters" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/\d/, { message: "Password must contain at least one number" }),
     
    confirm_password: z
      .string()
      .min(8, { message: "Confirm password must be at least 6 characters" }),
      
    degree: z
      .string()
      .min(2, { message: "Degree is required" })
      .max(50, { message: "Degree cannot exceed 50 characters" }),
    university: z
      .string()
      .min(2, { message: "University is required" })
      .max(50, { message: "University name cannot exceed 50 characters" }),
    major: z
      .string()
      .min(2, { message: "Major is required" })
      .max(50, { message: "Major cannot exceed 50 characters" }),
    graduation_year: z
      .string()
      .min(2, { message: "Graduation year is required" })
      .max(50, { message: "Graduation year cannot exceed 50 characters" }),
    language: z
      .array(z.string())
      .nonempty({ message: "Please select at least one language" }),
    sertificate: z.array(
      z
        .any() 
        .refine((file) => file instanceof File && file.size < 4 * 1024 * 1024, {
          message: "File size must be less than 4MB",
        })
    ),
    profesional_identification_number: z
      .string()
      .min(2, { message: "Professional ID is required" })
      .max(50, { message: "Professional ID cannot exceed 50 characters" }),
    spesialization: z
      .array(z.string())
      .nonempty({ message: "Please select at least one specialization" }),
    work_experience: z
      .string()
      .min(1, { message: "Work experience is required" }),
    cv: z
      .array(
        z
          .any() // Change to `z.any()` for File validation
          .refine(
            (file) => file instanceof File && file.size < 4 * 1024 * 1024,
            {
              message: "CV size must be less than 4MB",
            }
          )
      ).nonempty({ message: "CV is required" }),
    practice_license: z
      .array(
        z
          .any() // Change to `z.any()` for File validation
          .refine(
            (file) => file instanceof File && file.size < 4 * 1024 * 1024,
            {
              message: "Practice license size must be less than 4MB",
            }
          )
      )
      .nonempty({ message: "Practice license is required" }),
  })
  .refine((data) => {
    
    if (data.password && data.confirm_password) {
      return data.password === data.confirm_password;
    }
    return true; 
  }, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export const formLoginSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
  password: z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/\d/, { message: "Password must contain at least one number" }),
});

export const formSignUpSchema = z.object({
  first_name: z
  .string()
  .min(1, { message: "First name is required" })
  .max(50, { message: "First name cannot exceed 50 characters" }),
  last_name: z
  .string()
  .min(2, { message: "Last name is required" })
  .max(50, { message: "Last name cannot exceed 50 characters" }),
  phone_number: z
      .string()
      .min(10, { message: "Phone number must be at least 10 characters" })
      .max(15, { message: "Phone number cannot exceed 15 characters" }),
  email: z.string().email("Please provide a valid email address"),
  gender: z
      .string()
      .min(2, { message: "Gender is required" }),
  password: z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/\d/, { message: "Password must contain at least one number" }),
  confirm_password: z
      .string()
      .min(8, { message: "Confirm password must be at least 6 characters" }),
});

export const formForgotPasswordSchema = z.object({  email: z.string().email("Please provide a valid email address"),});
