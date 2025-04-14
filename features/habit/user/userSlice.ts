import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRegisterUser, fetchLoginUser } from "./userAPI";

interface userThuk {
    username: string;
    password: string;
}
type user = {
    token: string;
}
type userState = {
    user: user | null;
    status: "idle" | "loading" | "success" | "failed";
    error: string | null;
}
const initialState: userState = {
    user: null,
    status: "idle",
    error: null
}

export const fetchRegisterUserThunk = createAsyncThunk("user/fetchRegisterUser", async ({username, password}: userThuk, {rejectWithValue}) => {
    const response = await fetchRegisterUser(username, password);
    const responseJson = await response.json();
    if (!response.ok) {
        return rejectWithValue("Error al registrar el usuario");
    }else if (responseJson.message.toString() === "Usuario registrado exitosamente") {
        return responseJson.message;
    }else{
        return rejectWithValue(responseJson.message);
    }    
});

export const fetchLogingUserThunk = createAsyncThunk("user/fetchLoginUser", async ({username, password}: userThuk, {rejectWithValue}) => {
    const response = await fetchLoginUser(username, password);
    const responseJson = await response.json();
    if (!response.ok) {
        return rejectWithValue("Error al iniciar sesion");
    }else if (responseJson.message.toString() === "Inicio de sesión exitoso") {
        return responseJson.token;
    }else{
        return rejectWithValue(responseJson.message);
    }    
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegisterUserThunk.fulfilled, (state, action) => {
                state.status = "success";
                state.user = null;
                state.error = action.payload as string;
                alert("Usuario registrado exitosamente");
            })
            .addCase(fetchRegisterUserThunk.rejected, (state, action) => {
                state.status = "failed";
                state.user = null;
                state.error = action.payload as string;
                alert("No es posible registrar el usuario en este momento");
            })
            .addCase(fetchLogingUserThunk.fulfilled, (state, action) => {
                state.status = "success";
                state.user = action.payload;
                state.error = action.payload as string;
                alert("Inicio de sesión exitoso");
            })
            .addCase(fetchLogingUserThunk.rejected, (state, action) => {
                state.status = "failed";
                state.user = null;
                state.error = action.payload as string;
            });
    }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
