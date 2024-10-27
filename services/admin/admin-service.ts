import { DashboardAdminData, User } from "@/types/admin/admin-type-data";

export async function getDashboardAdminData(session: string): Promise<DashboardAdminData > {
    const res = await fetch(`${process.env.API_URL}/api/admin/home`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }

    const json = await res.json();
    return json.data as DashboardAdminData;
}

export async function getPsychologstData(session: string, url: string): Promise<User[]> {
    const res = await fetch(`${process.env.API_URL}${url}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        
        next: { revalidate: 60,tags: ['psychologst-list'] }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch psychologist data");
    }

    const json = await res.json();

    // Check if json.data is empty
    if (!json.data || json.data.length === 0) {
        console.warn("No psychologists found.");
        return []; // return an empty array if no data is found
    }

    const psychologists: User[] = json.data.map((item: any) => ({
        id: item.user_id,
        firstname: item.firstname,
        lastname: item.lastname,
        profile_picture: item.profile_picture,
        psychologist: {
            id: item.id,
            user_id: item.user_id,
            degree: item.degree,
            major: "",
            university: "",
            graduation_year: "",
            language: [],
            certification: [],
            specialization: JSON.parse(item.specialization),
            work_experience: item.work_experience,
            profesional_identification_number: item.profesional_identification_number,
            cv: [],
            practice_license: []
        }
    }));

    return psychologists;
}

export async function getDetailPsychologst(session: string, uuid: string): Promise<User | null> {
    const res = await fetch(`${process.env.API_URL}/api/psychologists/${uuid}/detail`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
    });

    const json = await res.json();

    if (json.message === "Psychologist not found") {
        return null; // Return null if the psychologist is not found
    }

    const item = json.data;
  
    const psychologist: User = {
        id: item.user_id,
        firstname: item.user.firstname,
        lastname: item.user.lastname,
        email: item.user.email,
        phone_number: item.user.phone_number,
        gender: item.user.gender,
        is_verified: item.is_verified === 1,
        is_rejected: item.is_verified === 1, 
        profile_picture: item.user.profile_picture,
        psychologist: {
            id: item.id,
            user_id: item.user_id,
            degree: item.degree,
            major: item.major,
            university: item.university,
            graduation_year: item.graduation_year,
            language: JSON.parse(item.language),
            certification: JSON.parse(item.certification),
            specialization: JSON.parse(item.specialization),
            work_experience: item.work_experience,
            profesional_identification_number: item.profesional_identification_number,
            cv: JSON.parse(item.cv),
            practice_license: JSON.parse(item.practice_license),
        }
    };

    return psychologist;
}
