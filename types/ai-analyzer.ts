export interface Analyzer {
    id?: number;
    complaint: string;
    stress: number;
    anxiety: number;
    depression: number;
    createdAt: string;
    updatedAt?: string;
    patientId?: number;
}