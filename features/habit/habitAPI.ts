export const fetchHabits = async (token:string) => {
    const response = await fetch("https://habits-tracker-backend-rho.vercel.app/api/habits",{
        headers: {
            Authorization: 'Bearer ' +token
        }
    });

    if (!response.ok) {
        throw new Error("Error al obtener los habitos");
    }
    return response;
};

export const fetchAddHabit = async (token:string, title:string, description: string ) => {
    const response = await fetch("https://habits-tracker-backend-rho.vercel.app/api/habits",{
        method: "POST",
        headers: {
            Authorization: 'Bearer ' +token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": title,
            "description": description
        })
    });

    if (!response.ok) {
        throw new Error("Error al crear el habito");
    }
    return response.json();
};