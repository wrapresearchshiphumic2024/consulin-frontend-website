

import { User } from "../user/user-type-data";


export interface ConsultationDataPsychologist {
    consultations: Appointment[];
    total_weekly_consultation: number;
    total_consultation: number;
    today_ongoing_consultation: number;
}
export interface Schedule {
    id: number;
    psychologist_id: number;
    status: string;
    days: Day[];
}

export interface Day {
    id: number;
    schedule_id: number;
    day: string;
    status: string;
    times: Time[];
}

export interface Time {
    id: number;
    day_id: number;
    start: string;
    end: string;
    status: string;
}
export interface Appointment{
    id:number;
    channel_id?:string;
    date: string;
    start_time?: string;
    end_time?: string;
    duration?: string;
    status:string;
    note?:string;
    user:User;
}