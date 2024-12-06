import { Appointment, ConsultationDataPsychologist, Schedule } from "@/types/psychologist/psychologist-type-data";
import { User } from "@/types/user/user-type-data";

export async function getConsultationDataPsychologist(session: string): Promise<ConsultationDataPsychologist> {
    const res = await fetch(`${process.env.API_URL}/api/psychologist/analitics`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 0, tags: ['consultation-data-psychologist'] },
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch dashboard data");
    }
  
    const json = await res.json();

    console.log(json.data.consultations)
    // Menyesuaikan untuk mendapatkan data yang diperlukan
    return {
        consultations: json.data.consultations.map((consultation: any) => ({
          id: consultation.id,
          date: consultation.date,
          start_time: consultation.start_time,
          end_time: consultation.end_time,
          status: consultation.status,
          user: {
            firstname: consultation.firstname,
            lastname: consultation.lastname,
          },
        })),
        total_weekly_consultation: json.data.total_weekly_consultation,
        total_consultation: json.data.total_consultation,
        today_ongoing_consultation: json.data.today_ongoing_consultation,
      };
    
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
   
        next: { revalidate: 0,tags: ['schedule-psychologist'] }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }
    
    const json = await res.json();
    
  
    return json.data as Schedule;

}
export async function getAppointmentHistory(session: string): Promise<Appointment[]> {
    const res = await fetch(`${process.env.API_URL}/api/psychologist/appointment-history`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60, tags: ['appointment-history'] }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }

    const json = await res.json();

    if (!json.data || json.data.length === 0) {
        return []; 
    }

    const appointments: Appointment[] = json.data.map((item: any) => ({
        id: item.id,
        date: item.date,
        time: item.time,
        status: item.status,
        user: {
            id: item.patient.user.id,
            firstname: item.patient.user.firstname,
            lastname: item.patient.user.lastname,
        }
    }));

    return appointments;
}
export async function getAppointmentSchedule(session: string): Promise<Appointment[]> {
    const res = await fetch(`${process.env.API_URL}/api/psychologist/appointments-schedule`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60, tags: ['appointment-schedule'] }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }

    const json = await res.json();

    if (!json.data || json.data.length === 0) {
        return []; 
    }

    const appointments: Appointment[] = json.data.patients.map((item: any) => ({
        id: item.id,
        date: item.date,
        start_time: item.start_time,
        end_time: item.end_time,
        status : item.status,
        user: {
            firstname: item.firstname,
            phone_number : item.phone,
            gender : item.gender,
            lastname: item.lastname,
        }
    }));

    return appointments;
}

export async function getAppointmentDetailPsychologst(session: string, uuid :string): Promise<Appointment | null> {
    const res = await fetch(`${process.env.API_URL}/api/psychologist/appointment/detail/${uuid}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 0, tags: ['detail-appointment-psychologst'] }
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
        user: {
            id: item.id,
            firstname: item.firstname,
            lastname: item.lastname,
            phone_number:item.phone,
            email: item.email,
            gender: item.gender,
            
        }
    }

    return detail_appointment;
}