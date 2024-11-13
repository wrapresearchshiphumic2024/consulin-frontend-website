export interface DashboardAdminData {
    psychologists: number;
    total_patient: number;
    ongoing_appointments: number;
    completed_appointments: number;
    monthly_data_psychologist: MonthlyDataPsychologst[];
    monthly_data_patient:  MonthlyPatientData[]

}
export interface MonthlyDataPsychologst {
    month: string;    
    accepted: number; 
    rejected: number; 
}
export interface MonthlyPatientData {
    month: string;      
    active_patients: number; 
  }


  


  