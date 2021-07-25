import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";

const reducers = {

    User: UserReducer
};
const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
console.log("Dev tools: " + process.env.NODE_ENV);