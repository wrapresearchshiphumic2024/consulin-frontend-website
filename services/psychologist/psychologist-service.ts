import { ConsultationDataPsychologist, Schedule } from "@/types/psychologist/psychologist-type-data";
import { User } from "@/types/user/user-type-data";

export async function getConsultationDataPsychologist(session: string): Promise<ConsultationDataPsychologist > {
    const res = await fetch(`${process.env.API_URL}/api/psychologist/analitics`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60,tags: ['consultation-data-psychologist'] }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }

    const json = await res.json();
    return json.data as ConsultationDataPsychologist ;
}

export async function getProfilePsychologist(session: string): Promise<User> {
    const res = await fetch(`${process.env.API_URL}/api/profile`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60,tags: ['profile-psychologist'] }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }
    
    const json = await res.json();

    return {
        id: json.data.user_id,
        firstname: json.data.firstname,
        lastname: json.data.lastname,
        email: json.data.email,
        phone_number: json.data.phone_number,
        is_verified: json.data.is_verified === 1,
        profile_picture: json.data.profile_picture,
        psychologist: {
            user_id: json.data.user_id,
            degree: json.data.degree,
            major: json.data.major,
            university: json.data.university,
            graduation_year: json.data.graduation_year,
            language: JSON.parse(json.data.language),
            certification: JSON.parse(json.data.certification),
            specialization: JSON.parse(json.data.specialization),
            work_experience: json.data.work_experience,
            profesional_identification_number: json.data.profesional_identification_number,
            cv: JSON.parse(json.data.cv),
            practice_license: JSON.parse(json.data.practice_license),
        }
    } as User;
}

export async function getSchedule(session: string): Promise<Schedule> {
    const res = await fetch(`${process.env.API_URL}/api/psychologist/schedule`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
   
        next: { revalidate: 60,tags: ['schedule-psychologist'] }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }
    
    const json = await res.json();
    
    const firstSchedule = json.data.length > 0 ? json.data[0] : null;
    
    if (!firstSchedule) {
        throw new Error("No schedule data found");
    }
    
    return firstSchedule as Schedule;

}