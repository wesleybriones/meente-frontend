import { configureStore } from "@reduxjs/toolkit";
import { authSlice, clientSlice, uiSlice } from "./";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        meente: clientSlice.reducer,
        ui: uiSlice.reducer,
    },
});