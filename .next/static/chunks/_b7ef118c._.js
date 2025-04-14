(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_b7ef118c._.js", {

"[project]/app/habits.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Habits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/habit/habitSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const handleMarkAsDone = (dispatch, _id, token)=>{
    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAsDoneThunk"])({
        _id,
        token
    }));
    if (token) {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHabitsThunk"])(token));
    }
};
function Habits({ habits }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Habits.useSelector[status]": (state)=>state.habit.status
    }["Habits.useSelector[status]"]);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Habits.useSelector[error]": (state)=>state.habit.error
    }["Habits.useSelector[error]"]);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Habits.useSelector[user]": (state)=>state.user.user
    }["Habits.useSelector[user]"]);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const calculateProgress = (days)=>{
        return Math.min(days / 66 * 100, 100);
    };
    const handleAddHabit = ()=>{
        if (title && description) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAddHabitThunk"])({
                token: user ? user.toString() : '',
                title,
                description
            }));
            setTitle('');
            setDescription('');
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHabitsThunk"])(user ? user.toString() : ''));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md p-4 bg-white rounded-lg shadow-md mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4 text-black",
                children: "Hábitos"
            }, void 0, false, {
                fileName: "[project]/app/habits.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-4",
                children: habits.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "text-gray-500",
                    children: "No hay hábitos disponibles"
                }, void 0, false, {
                    fileName: "[project]/app/habits.tsx",
                    lineNumber: 53,
                    columnNumber: 21
                }, this) : habits.map((habit)=>{
                    const habitStatus = status && status[habit._id] ? status[habit._id] : "idle";
                    const habitError = error && error[habit._id] ? error[habit._id] : null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-black",
                                children: habit.title
                            }, void 0, false, {
                                fileName: "[project]/app/habits.tsx",
                                lineNumber: 60,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("progress", {
                                        className: "w-24",
                                        value: calculateProgress(habit.days),
                                        max: "100"
                                    }, void 0, false, {
                                        fileName: "[project]/app/habits.tsx",
                                        lineNumber: 62,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 text-sm text-white bg-blue-500 rounded",
                                        onClick: ()=>handleMarkAsDone(dispatch, habit._id, user ? user.toString() : ''),
                                        children: habitStatus === "cargando" ? "Procesando" : "Completado"
                                    }, void 0, false, {
                                        fileName: "[project]/app/habits.tsx",
                                        lineNumber: 63,
                                        columnNumber: 37
                                    }, this),
                                    habitStatus === "failed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: habitError
                                    }, void 0, false, {
                                        fileName: "[project]/app/habits.tsx",
                                        lineNumber: 69,
                                        columnNumber: 66
                                    }, this),
                                    habitStatus === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-500",
                                        children: "Ya se ha Completado"
                                    }, void 0, false, {
                                        fileName: "[project]/app/habits.tsx",
                                        lineNumber: 70,
                                        columnNumber: 67
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/habits.tsx",
                                lineNumber: 61,
                                columnNumber: 33
                            }, this)
                        ]
                    }, habit._id, true, {
                        fileName: "[project]/app/habits.tsx",
                        lineNumber: 59,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/habits.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-4 text-black",
                        children: "Agregar Hábito Nuevo"
                    }, void 0, false, {
                        fileName: "[project]/app/habits.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block tesxt-sm font-medium text-gray-700",
                                children: "Titulo"
                            }, void 0, false, {
                                fileName: "[project]/app/habits.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                className: "mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                            }, void 0, false, {
                                fileName: "[project]/app/habits.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/habits.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block tesxt-sm font-medium text-gray-700",
                                children: "Descripción"
                            }, void 0, false, {
                                fileName: "[project]/app/habits.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                className: "mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                            }, void 0, false, {
                                fileName: "[project]/app/habits.tsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/habits.tsx",
                        lineNumber: 89,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddHabit,
                        className: "px-4 py-2 bg-green-500 text-white rounded-md",
                        children: "Add"
                    }, void 0, false, {
                        fileName: "[project]/app/habits.tsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/habits.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/habits.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(Habits, "+KPuVdnhjXw+ALYTKe5tI0inrDc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Habits;
var _c;
__turbopack_context__.k.register(_c, "Habits");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/habit/habitSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$habits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/habits.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$user$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/habit/user/userSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookies$2d$next$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookies-next/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Home() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const habits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Home.useSelector[habits]": (state)=>state.habit.habits
    }["Home.useSelector[habits]"]);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Home.useSelector[user]": (state)=>state.user.user
    }["Home.useSelector[user]"]);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookies$2d$next$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])('habitToken');
            if (token) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$user$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUser"])(token));
            }
            if (user) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$habitSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHabitsThunk"])(user.toString()));
            }
        }
    }["Home.useEffect"], [
        dispatch,
        user
    ]);
    const handleLogin = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$user$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLogingUserThunk"])({
            username,
            password
        }));
    };
    const handleRegister = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$habit$2f$user$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRegisterUserThunk"])({
            username,
            password
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20 font-sans bg-gray-100",
        children: [
            !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md p-4 bg-white rounded-lg shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Login / Register"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Username"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: username,
                                onChange: (e)=>setUsername(e.target.value),
                                className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Password"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogin,
                                className: "px-4 py-2 bg-blue-500 text-white rounded-md",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleRegister,
                                className: "px-4 py-2 bg-green-500 text-white rounded-md",
                                children: "Registro"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$habits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                habits: habits
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 78,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Home, "80MFTX41gTWkH6/cg99C/gdSrSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/cookie/dist/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = parse;
exports.serialize = serialize;
/**
 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
 * which has been replaced by the token definition in RFC 7230 appendix B.
 *
 * cookie-name       = token
 * token             = 1*tchar
 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
 *                     "*" / "+" / "-" / "." / "^" / "_" /
 *                     "`" / "|" / "~" / DIGIT / ALPHA
 *
 * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
 * Allow same range as cookie value, except `=`, which delimits end of name.
 */ const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
/**
 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
 *
 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
 *                     ; US-ASCII characters excluding CTLs,
 *                     ; whitespace DQUOTE, comma, semicolon,
 *                     ; and backslash
 *
 * Allowing more characters: https://github.com/jshttp/cookie/issues/191
 * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
 */ const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
/**
 * RegExp to match domain-value in RFC 6265 sec 4.1.1
 *
 * domain-value      = <subdomain>
 *                     ; defined in [RFC1034], Section 3.5, as
 *                     ; enhanced by [RFC1123], Section 2.1
 * <subdomain>       = <label> | <subdomain> "." <label>
 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
 *                     Labels must be 63 characters or less.
 *                     'let-dig' not 'letter' in the first char, per RFC1123
 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
 * <let-dig-hyp>     = <let-dig> | "-"
 * <let-dig>         = <letter> | <digit>
 * <letter>          = any one of the 52 alphabetic characters A through Z in
 *                     upper case and a through z in lower case
 * <digit>           = any one of the ten digits 0 through 9
 *
 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
 *
 * > (Note that a leading %x2E ("."), if present, is ignored even though that
 * character is not permitted, but a trailing %x2E ("."), if present, will
 * cause the user agent to ignore the attribute.)
 */ const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
/**
 * RegExp to match path-value in RFC 6265 sec 4.1.1
 *
 * path-value        = <any CHAR except CTLs or ";">
 * CHAR              = %x01-7F
 *                     ; defined in RFC 5234 appendix B.1
 */ const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
const __toString = Object.prototype.toString;
const NullObject = /* @__PURE__ */ (()=>{
    const C = function() {};
    C.prototype = Object.create(null);
    return C;
})();
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 */ function parse(str, options) {
    const obj = new NullObject();
    const len = str.length;
    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
    if (len < 2) return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) break; // No more cookie pairs.
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        // only assign once
        if (obj[key] === undefined) {
            let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
            let valEndIdx = endIndex(str, endIdx, valStartIdx);
            const value = dec(str.slice(valStartIdx, valEndIdx));
            obj[key] = value;
        }
        index = endIdx + 1;
    }while (index < len)
    return obj;
}
function startIndex(str, index, max) {
    do {
        const code = str.charCodeAt(index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index;
    }while (++index < max)
    return max;
}
function endIndex(str, index, min) {
    while(index > min){
        const code = str.charCodeAt(--index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index + 1;
    }
    return min;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize a name value pair into a cookie string suitable for
 * http headers. An optional options object specifies cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 */ function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options) return str;
    if (options.maxAge !== undefined) {
        if (!Number.isInteger(options.maxAge)) {
            throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
            throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
    }
    if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
            throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
    }
    if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
            throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
        str += "; HttpOnly";
    }
    if (options.secure) {
        str += "; Secure";
    }
    if (options.partitioned) {
        str += "; Partitioned";
    }
    if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : undefined;
        switch(priority){
            case "low":
                str += "; Priority=Low";
                break;
            case "medium":
                str += "; Priority=Medium";
                break;
            case "high":
                str += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
    }
    if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch(sameSite){
            case true:
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
    }
    return str;
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 */ function decode(str) {
    if (str.indexOf("%") === -1) return str;
    try {
        return decodeURIComponent(str);
    } catch (e) {
        return str;
    }
}
/**
 * Determine if value is a Date.
 */ function isDate(val) {
    return __toString.call(val) === "[object Date]";
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/cookies-next/lib/common/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRenderPhase = exports.isClientSide = exports.decode = exports.stringify = void 0;
var stringify = function(value) {
    try {
        if (typeof value === 'string') {
            return value;
        }
        var stringifiedValue = JSON.stringify(value);
        return stringifiedValue;
    } catch (e) {
        return value;
    }
};
exports.stringify = stringify;
var decode = function(str) {
    if (!str) return str;
    return str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
};
exports.decode = decode;
var isClientSide = function(options) {
    return !(options === null || options === void 0 ? void 0 : options.req) && !(options === null || options === void 0 ? void 0 : options.res) && !(options && 'cookies' in options && (options === null || options === void 0 ? void 0 : options.cookies));
};
exports.isClientSide = isClientSide;
var getRenderPhase = function() {
    return typeof window === 'undefined' ? 'server' : 'client';
};
exports.getRenderPhase = getRenderPhase;
}}),
"[project]/node_modules/cookies-next/lib/common/types.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
}}),
"[project]/node_modules/cookies-next/lib/client/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useCookiesNext = exports.useDeleteCookie = exports.useGetCookie = exports.useSetCookie = exports.useHasCookie = exports.useGetCookies = exports.hasCookie = exports.deleteCookie = exports.setCookie = exports.getCookie = exports.getCookies = void 0;
var cookie_1 = __turbopack_context__.r("[project]/node_modules/cookie/dist/index.js [app-client] (ecmascript)");
var utils_1 = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/utils.js [app-client] (ecmascript)");
var react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var ensureClientSide = function(options) {
    if (!(0, utils_1.isClientSide)(options)) {
        throw new Error('You are trying to access cookies on the server side. Please, use the server-side import with `cookies-next/server` instead.');
    }
};
var getCookies = function(_options) {
    ensureClientSide(_options);
    if ((0, utils_1.getRenderPhase)() === 'server') {
        return;
    }
    var cookies = {};
    var documentCookies = document.cookie ? document.cookie.split('; ') : [];
    for(var i = 0, len = documentCookies.length; i < len; i++){
        var cookieParts = documentCookies[i].split('=');
        var cookie = cookieParts.slice(1).join('=');
        var name_1 = cookieParts[0];
        cookies[name_1] = cookie;
    }
    return cookies;
};
exports.getCookies = getCookies;
var getCookie = function(key, options) {
    ensureClientSide(options);
    var _cookies = getCookies(options);
    var value = _cookies === null || _cookies === void 0 ? void 0 : _cookies[key];
    if (value === undefined) return undefined;
    return (0, utils_1.decode)(value);
};
exports.getCookie = getCookie;
var setCookie = function(key, data, options) {
    ensureClientSide(options);
    if ((0, utils_1.getRenderPhase)() === 'server') {
        return;
    }
    var _cookieOptions = options || {};
    var cookieStr = (0, cookie_1.serialize)(key, (0, utils_1.stringify)(data), __assign({
        path: '/'
    }, _cookieOptions));
    document.cookie = cookieStr;
};
exports.setCookie = setCookie;
var deleteCookie = function(key, options) {
    ensureClientSide(options);
    setCookie(key, '', __assign(__assign({}, options), {
        maxAge: -1
    }));
};
exports.deleteCookie = deleteCookie;
var hasCookie = function(key, options) {
    ensureClientSide(options);
    if (!key) return false;
    var cookies = getCookies(options);
    if (!cookies) {
        return false;
    }
    return Object.prototype.hasOwnProperty.call(cookies, key);
};
exports.hasCookie = hasCookie;
var useWrappedCookieFn = function(cookieFnCb) {
    var _a = (0, react_1.useState)(false), isMounted = _a[0], setIsMounted = _a[1];
    (0, react_1.useEffect)(function() {
        setIsMounted(true);
    }, []);
    return isMounted ? cookieFnCb : function() {};
};
var useGetCookies = function() {
    return useWrappedCookieFn(getCookies);
};
exports.useGetCookies = useGetCookies;
var useGetCookie = function() {
    return useWrappedCookieFn(getCookie);
};
exports.useGetCookie = useGetCookie;
var useHasCookie = function() {
    return useWrappedCookieFn(hasCookie);
};
exports.useHasCookie = useHasCookie;
var useSetCookie = function() {
    return useWrappedCookieFn(setCookie);
};
exports.useSetCookie = useSetCookie;
var useDeleteCookie = function() {
    return useWrappedCookieFn(deleteCookie);
};
exports.useDeleteCookie = useDeleteCookie;
var useCookiesNext = function() {
    return {
        getCookies: useGetCookies(),
        getCookie: useGetCookie(),
        hasCookie: useHasCookie(),
        setCookie: useSetCookie(),
        deleteCookie: useDeleteCookie()
    };
};
exports.useCookiesNext = useCookiesNext;
__exportStar(__turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/types.js [app-client] (ecmascript)"), exports);
}}),
"[project]/node_modules/cookies-next/lib/server/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    "TURBOPACK unreachable";
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasCookie = exports.deleteCookie = exports.setCookie = exports.getCookie = exports.getCookies = void 0;
var cookie_1 = __turbopack_context__.r("[project]/node_modules/cookie/dist/index.js [app-client] (ecmascript)");
var utils_1 = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/utils.js [app-client] (ecmascript)");
var ensureServerSide = function(context) {
    if ((0, utils_1.isClientSide)(context)) {
        throw new Error('You are trying to access cookies on the client side. Please, use the client-side import with `cookies-next/client` instead.');
    }
};
var isCookiesFromNext = function(cookieStore) {
    if (!cookieStore) return false;
    return 'getAll' in cookieStore && 'set' in cookieStore && typeof cookieStore.getAll === 'function' && typeof cookieStore.set === 'function';
};
var isContextFromNext = function(context) {
    return !!(context === null || context === void 0 ? void 0 : context.req) && 'cookies' in context.req && isCookiesFromNext(context.req.cookies) || !!(context === null || context === void 0 ? void 0 : context.res) && 'cookies' in context.res && isCookiesFromNext(context.res.cookies) || !!context && 'cookies' in context && typeof context.cookies === 'function';
};
var transformAppRouterCookies = function(cookies) {
    var _cookies = {};
    cookies.getAll().forEach(function(_a) {
        var name = _a.name, value = _a.value;
        _cookies[name] = value;
    });
    return _cookies;
};
var getCookies = function(options) {
    return __awaiter(void 0, void 0, void 0, function() {
        var _a, httpRequest;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    ensureServerSide(options);
                    if (!isContextFromNext(options)) return [
                        3 /*break*/ ,
                        2
                    ];
                    if (options.req) {
                        return [
                            2 /*return*/ ,
                            transformAppRouterCookies(options.req.cookies)
                        ];
                    }
                    if (options.res) {
                        return [
                            2 /*return*/ ,
                            transformAppRouterCookies(options.res.cookies)
                        ];
                    }
                    if (!options.cookies) return [
                        3 /*break*/ ,
                        2
                    ];
                    _a = transformAppRouterCookies;
                    return [
                        4 /*yield*/ ,
                        options.cookies()
                    ];
                case 1:
                    return [
                        2 /*return*/ ,
                        _a.apply(void 0, [
                            _b.sent()
                        ])
                    ];
                case 2:
                    if (options === null || options === void 0 ? void 0 : options.req) {
                        httpRequest = options.req;
                    }
                    if (httpRequest === null || httpRequest === void 0 ? void 0 : httpRequest.cookies) {
                        return [
                            2 /*return*/ ,
                            httpRequest.cookies
                        ];
                    }
                    if (httpRequest === null || httpRequest === void 0 ? void 0 : httpRequest.headers.cookie) {
                        return [
                            2 /*return*/ ,
                            (0, cookie_1.parse)(httpRequest.headers.cookie)
                        ];
                    }
                    return [
                        2 /*return*/ ,
                        {}
                    ];
            }
        });
    });
};
exports.getCookies = getCookies;
var getCookie = function(key, options) {
    return __awaiter(void 0, void 0, void 0, function() {
        var cookies, value;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    ensureServerSide(options);
                    return [
                        4 /*yield*/ ,
                        getCookies(options)
                    ];
                case 1:
                    cookies = _a.sent();
                    value = cookies[key];
                    if (value === undefined) return [
                        2 /*return*/ ,
                        undefined
                    ];
                    return [
                        2 /*return*/ ,
                        (0, utils_1.decode)(value)
                    ];
            }
        });
    });
};
exports.getCookie = getCookie;
var setCookie = function(key, data, options) {
    return __awaiter(void 0, void 0, void 0, function() {
        var req_1, res_1, cookiesFn, restOptions, payload, cookieOptions, req, res, _a, _req, _res, rest, cookieStore, currentCookies, cookies, cookies;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    ensureServerSide(options);
                    if (!isContextFromNext(options)) return [
                        3 /*break*/ ,
                        3
                    ];
                    req_1 = options.req, res_1 = options.res, cookiesFn = options.cookies, restOptions = __rest(options, [
                        "req",
                        "res",
                        "cookies"
                    ]);
                    payload = __assign({
                        name: key,
                        value: (0, utils_1.stringify)(data)
                    }, restOptions);
                    if (req_1) {
                        req_1.cookies.set(payload);
                    }
                    if (res_1) {
                        res_1.cookies.set(payload);
                    }
                    if (!cookiesFn) return [
                        3 /*break*/ ,
                        2
                    ];
                    return [
                        4 /*yield*/ ,
                        cookiesFn()
                    ];
                case 1:
                    _b.sent().set(payload);
                    _b.label = 2;
                case 2:
                    return [
                        2 /*return*/ 
                    ];
                case 3:
                    cookieOptions = {};
                    if (options) {
                        _a = options, _req = _a.req, _res = _a.res, rest = __rest(_a, [
                            "req",
                            "res"
                        ]);
                        req = _req;
                        res = _res;
                        cookieOptions = rest;
                    }
                    cookieStore = (0, cookie_1.serialize)(key, (0, utils_1.stringify)(data), __assign({
                        path: '/'
                    }, cookieOptions));
                    if (res && req) {
                        currentCookies = res.getHeader('Set-Cookie');
                        if (!Array.isArray(currentCookies)) {
                            currentCookies = !currentCookies ? [] : [
                                String(currentCookies)
                            ];
                        }
                        res.setHeader('Set-Cookie', currentCookies.concat(cookieStore));
                        if (req && req.cookies) {
                            cookies = req.cookies;
                            data === '' ? delete cookies[key] : cookies[key] = (0, utils_1.stringify)(data);
                        }
                        if (req && req.headers && req.headers.cookie) {
                            cookies = (0, cookie_1.parse)(req.headers.cookie);
                            data === '' ? delete cookies[key] : cookies[key] = (0, utils_1.stringify)(data);
                            req.headers.cookie = Object.entries(cookies).reduce(function(accum, item) {
                                return accum.concat("".concat(item[0], "=").concat(item[1], ";"));
                            }, '');
                        }
                    }
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
};
exports.setCookie = setCookie;
var deleteCookie = function(key, options) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(_a) {
            ensureServerSide(options);
            return [
                2 /*return*/ ,
                setCookie(key, '', __assign(__assign({}, options), {
                    maxAge: -1
                }))
            ];
        });
    });
};
exports.deleteCookie = deleteCookie;
var hasCookie = function(key, options) {
    return __awaiter(void 0, void 0, void 0, function() {
        var cookie;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    ensureServerSide(options);
                    if (!key) return [
                        2 /*return*/ ,
                        false
                    ];
                    return [
                        4 /*yield*/ ,
                        getCookies(options)
                    ];
                case 1:
                    cookie = _a.sent();
                    return [
                        2 /*return*/ ,
                        cookie.hasOwnProperty(key)
                    ];
            }
        });
    });
};
exports.hasCookie = hasCookie;
__exportStar(__turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/types.js [app-client] (ecmascript)"), exports);
}}),
"[project]/node_modules/cookies-next/lib/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useCookiesNext = exports.useDeleteCookie = exports.useGetCookie = exports.useSetCookie = exports.useHasCookie = exports.useGetCookies = exports.hasCookie = exports.deleteCookie = exports.setCookie = exports.getCookie = exports.getCookies = void 0;
var clientCookies = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/client/index.js [app-client] (ecmascript)");
var serverCookies = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/server/index.js [app-client] (ecmascript)");
__exportStar(__turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/types.js [app-client] (ecmascript)"), exports);
var utils_1 = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/common/utils.js [app-client] (ecmascript)");
var getCookies = function(options) {
    return (0, utils_1.isClientSide)(options) ? clientCookies.getCookies(options) : serverCookies.getCookies(options);
};
exports.getCookies = getCookies;
var getCookie = function(key, options) {
    return (0, utils_1.isClientSide)(options) ? clientCookies.getCookie(key, options) : serverCookies.getCookie(key, options);
};
exports.getCookie = getCookie;
var setCookie = function(key, data, options) {
    return (0, utils_1.isClientSide)(options) ? clientCookies.setCookie(key, data, options) : serverCookies.setCookie(key, data, options);
};
exports.setCookie = setCookie;
var deleteCookie = function(key, options) {
    return (0, utils_1.isClientSide)(options) ? clientCookies.deleteCookie(key, options) : serverCookies.deleteCookie(key, options);
};
exports.deleteCookie = deleteCookie;
var hasCookie = function(key, options) {
    return (0, utils_1.isClientSide)(options) ? clientCookies.hasCookie(key, options) : serverCookies.hasCookie(key, options);
};
exports.hasCookie = hasCookie;
var client_1 = __turbopack_context__.r("[project]/node_modules/cookies-next/lib/client/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "useGetCookies", {
    enumerable: true,
    get: function() {
        return client_1.useGetCookies;
    }
});
Object.defineProperty(exports, "useHasCookie", {
    enumerable: true,
    get: function() {
        return client_1.useHasCookie;
    }
});
Object.defineProperty(exports, "useSetCookie", {
    enumerable: true,
    get: function() {
        return client_1.useSetCookie;
    }
});
Object.defineProperty(exports, "useGetCookie", {
    enumerable: true,
    get: function() {
        return client_1.useGetCookie;
    }
});
Object.defineProperty(exports, "useDeleteCookie", {
    enumerable: true,
    get: function() {
        return client_1.useDeleteCookie;
    }
});
Object.defineProperty(exports, "useCookiesNext", {
    enumerable: true,
    get: function() {
        return client_1.useCookiesNext;
    }
});
}}),
}]);

//# sourceMappingURL=_b7ef118c._.js.map