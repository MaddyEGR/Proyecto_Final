export const fetchHabits = async (token:string) => {
    const response = await fetch("http://localhost:3001/api/habits",{
        headers: {
            Authorization: 'Bearer ' +token
        }
    });

    if (!response.ok) {
        throw new Error("Error al obtener los habitos");
    }
    return response;
};

export const fetchAddHabit = async (token:string, title:string, description: string) => {
    const response = await fetch("http://localhost:3001/api/habits",{
        method: "POST",
        headers: {
            Authorization: 'Bearer ' +token,
            'Cintent-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": title,
            "description": description
        })
    });

    if (!response.ok) {
        throw new Error("Error al obtener los habitos");
    }
    return response;
};