import { Appointment } from "../psychologist/psychologist-type-data";

interface ScheduleTime {
    start: string; 
    end: string;   

  }
  
export interface UpcomingSchedule {
    date: string;        
    times: ScheduleTime[];   
}

export interface AppointmentPatient{
  upcoming_appointments: Appointment[];
  history: Appointment[];
}



  
