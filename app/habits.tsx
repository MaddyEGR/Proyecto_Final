import { useSelector, useDispatch } from "react-redux";
import { markAsDoneThunk } from "@/features/habit/habitSlice";
import { RootState, AppDispatch } from "@/Redux/store";
import { fetchHabitsThunk } from "@/features/habit/habitSlice";


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
    habits: any [];
}

const handleMarkAsDone = (dispatch: AppDispatch, _id: string) => {
    dispatch(markAsDoneThunk(_id));
    dispatch(fetchHabitsThunk());
}


export default function Habits({habits}: HabitProps) {
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector((state: RootState) => state.habit.status);
    const error = useSelector((state: RootState) => state.habit.error);
    const calculateProgress = (days:number):number => {
        return Math.min((days/66)*100, 100);
    }

    return (
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-bold mb-4 text-black">Habitos</h1>
            <ul className="space-y-4">
                {habits.map((habit: Habit) => {
                    const habitStatus = status && status[habit._id] ? status[habit._id] : "idle";
                    const habitError = error && error[habit._id] ? error[habit._id] : null;
                    return (
                        <li className="flex items-center justify-between" key={habit._id}>
                            <span className="text-black">{habit.title}</span>
                            <div className="flex items-center space-x-2">
                                <progress className="w-24" value={calculateProgress(habit.days)} max="100"></progress>
                                <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded" onClick={() => handleMarkAsDone(dispatch, habit._id)}>{habitStatus === "cargando" ? "Procesando" : "Completado"}</button>
                                {habitStatus === "failed" && <span className="text-red-500">{habitError}</span>}
                                {habitStatus === "success" && <span className="text-green-500">Ya se ha Completado</span>}
                        
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}