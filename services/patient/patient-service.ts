import { User } from "@/types/user/user-type-data";

export async function getProfilePatient(session: string): Promise<User> {
    const res = await fetch(`${process.env.API_URL}/api/profile`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60,tags: ['psychologst-list'] }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
    }
    
    const json = await res.json();

    return json.data as User;
}