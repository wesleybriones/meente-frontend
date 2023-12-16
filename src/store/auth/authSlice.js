import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'checking',  'authenticated'
        uid: null,
        email: null,
        displayName: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, action ) => {

        },
        logout: ( state, payload ) => {

        },
        checkingCredencials: ( state ) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredencials } = authSlice.actions;