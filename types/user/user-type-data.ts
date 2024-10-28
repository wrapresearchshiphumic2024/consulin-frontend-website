export interface User {
    id: string; 
    firstname: string;
    lastname: string;
    email?: string; 
    phone_number?: string;
    is_verified?: boolean; 
    is_rejected?: boolean; 
    gender?: string; 
    profile_picture: string | null;
    psychologist?: Psychologist;
  }
export interface Psychologist {
    id: number;
    user_id: string; 
    degree: string;
    major: string; 
    university: string; 
    graduation_year: string;
    language: string[]; 
    certification: string[];
    specialization: string[];
    work_experience: string;
    profesional_identification_number: string;
    cv?: string[]; 
    practice_license?: string[]; 
}