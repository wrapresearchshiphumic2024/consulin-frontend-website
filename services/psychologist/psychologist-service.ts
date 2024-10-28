export async function getConsultationDataPsychologist(session: string): Promise<ConsultationDataPsychologist > {
    const res = await fetch(`${process.env.API_URL}/api/psychologist/analitics`, {
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
    return json.data as ConsultationDataPsychologist ;
}