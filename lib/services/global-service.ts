import { User } from "@/types/user/user-type-data";

export async function getPsychologstData(
  session: string, 
  url: string, 
  name?: string
): Promise<User[]> {

  const params = new URLSearchParams();
  if (name) {
    params.set("name", name);
  }


  const requestUrl = params.toString() ? `${url}?${params.toString()}` : url;

  const res = await fetch(`${process.env.API_URL}${requestUrl}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 0, tags: ['psychologst-list'] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch psychologist data");
  }

  const json = await res.json();


  if (!json.data || json.data.length === 0) {
    console.warn("No psychologists found.");
    return []; 
  }

  console.log(json);
  const psychologists: User[] = json.data.map((item: any) => ({
    id: item.user_id,
    firstname: item.firstname,
    lastname: item.lastname,
    profile_picture: item.profile_picture,
    gender: item.gender,
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
      practice_license: [],
    },
  }));

  return psychologists;
}
