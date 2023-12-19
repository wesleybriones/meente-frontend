import { configureStore } from "@reduxjs/toolkit";
import { authSlice, clientSlice, uiSlice, deviceSlice } from "./";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        client: clientSlice.reducer,
        device: deviceSlice.reducer,
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});