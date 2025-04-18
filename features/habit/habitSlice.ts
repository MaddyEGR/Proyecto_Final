import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHabits, fetchAddHabit } from "./habitAPI";

type Habit = {
    _id: string;
    title: string;
    description: string;
    createAt: string;
    days: number;
    lastDone: Date;
    lastUpdate: Date;
    startedAt: Date;
};

type markAsDoneThunkParams = {
    _id: string,
    token: string
};

type addHabitThunkParams = {
    token: string,
    title: string,
    description: string
};

type HabitState = {
    habits: Habit [];
    status: Record<string, "idle" | "loading" | "success" | "failed">;
    error: Record<string, string | null>;
};

const initialState: HabitState = {
    habits: [],
    status: {},
    error: {}
};

export const fetchHabitsThunk = createAsyncThunk("habit/fetchHabits", async (token:string, {rejectWithValue}) => {
        const response = await fetchHabits(token);
        const responseJson = await response.json();
        if (!response.ok) {
            return rejectWithValue("Error al obtener los habitos");
        }
            return responseJson;
});

export const markAsDoneThunk = createAsyncThunk("habit/markAsDone", async ({_id, token }: markAsDoneThunkParams, {rejectWithValue}) => {
    const response = await fetch(`https://habits-tracker-backend-rho.vercel.app/api/habits/markasdone/${_id}`, {
        method: "PATCH",
        headers: { Authorization: 'Bearer ' + token },
    });

    const responseJson = await response.json();
    if (!response.ok) {
        return rejectWithValue("Fallo al marcar como hecho");
    }else if (responseJson.message.toString() === "Habito reiniciado") {
        return rejectWithValue(responseJson.message);
    }else{
        return responseJson.message;
    }
});

export const fetchAddHabitThunk = createAsyncThunk("habit/fetchAddHabit", async ({token, title, description }: addHabitThunkParams, {rejectWithValue}) => { 
    const response = await fetchAddHabit (token, title, description);
    const responseJson = await response.json();

    if (!response.ok) {
        return rejectWithValue("Fallo al agregar el habito");
    }else if (responseJson.message.toString() === "Error al crear el habito") {
        return rejectWithValue(responseJson.message);
    }else{
        return responseJson.token;
    }
});


const habitSlice = createSlice ({
    name: "habit",
    initialState,
    reducers: {
        addHabits: (state, action) => {
            state.habits = action.payload;
        },


        addHabit: (state, action) => {
            state.habits.push(action.payload);
        },

        removeHabit: (state, action) => {
            state.habits = state.habits.filter(habit => habit._id !== action.payload);
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchHabitsThunk.fulfilled, (state, action) => {
            state.habits =Array.isArray (action.payload) ? action.payload : [];
        }).addCase(markAsDoneThunk.fulfilled, (state, action) => {
            state.status[action.meta.arg._id] = "success";
            state.error[action.meta.arg._id] = null;
        }).addCase(markAsDoneThunk.rejected, (state, action) => {
            state.status[action.meta.arg._id] = "failed";
            state.error[action.meta.arg._id] = action.payload as string;
        }).addCase(fetchAddHabitThunk.fulfilled, (state, action) => {
            state.habits.push(action.payload);
        });
    }
});

export const { addHabits, addHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;