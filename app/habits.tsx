import { useSelector, useDispatch } from "react-redux";
import { markAsDoneThunk, fetchAddHabitThunk, fetchHabitsThunk } from "@/features/habit/habitSlice";
import { RootState, AppDispatch } from "@/Redux/store";
import { useState } from "react";

interface Habit {
    _id: string;
    title: string;
    description: string;
    createAt: string;
    days: number;
    lastDone: Date;
    lastUpdate: Date;
}

type HabitProps = {
    habits: Habit[];
}

const handleMarkAsDone = (dispatch: AppDispatch, _id: string, token: string) => {
    dispatch(markAsDoneThunk({ _id, token }));
    if (token) {
        dispatch(fetchHabitsThunk(token));
    }
}

export default function Habits({ habits }: HabitProps) {
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector((state: RootState) => state.habit.status);
    const error = useSelector((state: RootState) => state.habit.error);
    const user = useSelector((state: RootState) => state.user.user);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const calculateProgress = (days: number): number => {
        return Math.min((days / 66) * 100, 100);
    }

    const handleAddHabit = () => {
        if (title && description) {
            dispatch(fetchAddHabitThunk({ token:user?user.toString(): '', title, description }));
            setTitle('');
            setDescription('');
            dispatch(fetchHabitsThunk(user ? user.toString() : ''));
        }
    };

    return (
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-bold mb-4 text-black">Hábitos</h1>
            <ul className="space-y-4">
                {habits.length === 0 ? (
                    <li className="text-gray-500">No hay hábitos disponibles</li>
                ) : (
                    habits.map((habit: Habit) => {
                        const habitStatus = status && status[habit._id] ? status[habit._id] : "idle";
                        const habitError = error && error[habit._id] ? error[habit._id] : null;
                        return (
                            <li className="flex items-center justify-between" key={habit._id}>
                                <span className="text-black">{habit.title}</span>
                                <div className="flex items-center space-x-2">
                                    <progress className="w-24" value={calculateProgress(habit.days)} max="100"></progress>
                                    <button
                                        className="px-2 py-1 text-sm text-white bg-blue-500 rounded"
                                        onClick={() => handleMarkAsDone(dispatch, habit._id, user ? user.toString(): '')}
                                    >
                                        {habitStatus === "cargando" ? "Procesando" : "Completado"}
                                    </button>
                                    {habitStatus === "failed" && <span className="text-red-500">{habitError}</span>}
                                    {habitStatus === "success" && <span className="text-green-500">Ya se ha Completado</span>}
                                </div>
                            </li>
                        );
                    })
                )}
            </ul>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4 text-black">Agregar Hábito Nuevo</h2>
                <div className="mb-4">
                    <label className="block tesxt-sm font-medium text-gray-700">Titulo</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block tesxt-sm font-medium text-gray-700">Descripción</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                />
              </div>
                <button
                    onClick={handleAddHabit}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                    Add
                </button>
            </div>
        </div>
    );
}