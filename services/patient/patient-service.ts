
import { AppointmentPatient } from "@/types/patient/patient-type-data";
import { Appointment } from "@/types/psychologist/psychologist-type-data";
import { User } from "@/types/user/user-type-data";



export async function getProfilePatient(session: string): Promise<User> {
    const res = await fetch(`${process.env.API_URL}/api/profile`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60,tags: ['profile-patient'] }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }
    
    const json = await res.json();

    return json.data as User;
}
export async function getDetailPsychologistPatient(session: string, uuid: string): Promise<User | null> {
    const res = await fetch(`${process.env.API_URL}/api/patients/psychologists/${uuid}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60, tags: ['detail-psychologist'] },
    });

    const json = await res.json();
    
    if (json.message === "Psychologist not found") {
        return null; 
    }

    const item = json.data;
  
    const psychologist: User = {
        id: item.user_id,
        firstname: item.user.firstname,
        lastname: item.user.lastname,
        email: item.user.email,
        phone_number: item.user.phone_number,
        gender: item.user.gender || null,
        is_verified: item.is_verified === 1,
        is_rejected: item.is_rejected === 1,
        profile_picture: item.user.profile_picture || null,
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
            cv: item.cv ? JSON.parse(item.cv) : [], 
            practice_license: item.practice_license ? JSON.parse(item.practice_license) : [], 
            schedule: item.schedule || undefined, 
            upcoming_schedules: json.upcoming_schedules|| [], 
        }

    };

    return psychologist;
}

export async function getAppointmentPatient(session: string): Promise<AppointmentPatient > {
    const res = await fetch(`${process.env.API_URL}/api/patients/appointments`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60, tags: ['appointment-patient'] }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }

    const json = await res.json();
    const appointmentsResponse = json.data;

    const upcoming_appointments :Appointment[] = appointmentsResponse.upcoming_appointments.map((item: any) => ({
        id: item.id,
        channel_id: item.channel_id,
        date: item.date,
        start_time: item.start_time,
        end_time: item.end_time,
        status: item.status,
        user: {
            id: item.psychologist.user_id,
            firstname: item.psychologist.firstname,
            lastname: item.psychologist.lastname,
        },

    }));
    
    // Map history appointments data (currently empty in your example)
    const history: Appointment[] = appointmentsResponse.history.map((item: any) => ({
        id: item.id,
        channel_id: item.channel_id,
        date: item.date,
        start_time: item.start_time,
        end_time: item.end_time,
        status: item.status,
        user: {
            id: item.psychologist.user_id,
            firstname: item.psychologist.firstname,
            lastname: item.psychologist.lastname,
        },
    }));
    
    // Combine both into AppointmentPatient interface
    const appointments: AppointmentPatient = {
        upcoming_appointments: upcoming_appointments,
        history: history,
    };
    return appointments;
}

export async function getAppointmentDetailPatient(session: string, uuid :string): Promise<Appointment | null> {
    const res = await fetch(`${process.env.API_URL}/api/patients/appointments/${uuid}/detail`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60, tags: ['detail-appointment-patient'] }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }

    const json = await res.json();
    const item = json.data;
    const detail_appointment : Appointment = {
        id: item.id,
        channel_id: item.channel_id,
        date: item.date,
        start_time: item.start_time,
        end_time: item.end_time,
        duration: item.duration,
        status: item.status,
        note: item.note,
        user: {
            id: item.psychologist.user_id,
            firstname: item.psychologist.firstname,
            lastname: item.psychologist.lastname,
            email: item.psychologist.email,
            gender: item.psychologist.gender,
            psychologist:{
                work_experience: item.psychologist.work_experience,
                specialization: JSON.parse(item.psychologist.specialization),
            }
        }
    }

    return detail_appointment;
}
