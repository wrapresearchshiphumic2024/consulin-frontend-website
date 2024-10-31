// interface Consultation {
//     id: string;
//     date: string;
//     status: string;

import { User } from "../user/user-type-data";

// }
export interface ConsultationDataPsychologist {
    consultations: any[];
    total_weekly_consultation: number;
    total_consultation: number;
    today_ongoing_consultation: number;
}
export interface Schedule {
    id: number;
    psychologist_id: number;
    status: string;
    created_at: string;
    updated_at: string;
    days: Day[];
}

export interface Day {
    id: number;
    schedule_id: number;
    day: string;
    status: string;
    created_at: string;
    updated_at: string;
    times: Time[];
}

export interface Time {
    id: number;
    day_id: number;
    start: string;
    end: string;
    status: string;
    created_at: string;
    updated_at: string;
}
export interface Appointment{
    id:number;
    date: string;
    time: string;
    status:string;
    user:User;
}