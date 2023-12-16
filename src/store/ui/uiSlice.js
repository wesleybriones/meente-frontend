

import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isClientModalOpen: false
    },
    reducers: {
        onOpenClientModal: ( state ) => {
            state.isClientModalOpen = true;
        },
        onCloseClientModal: ( state ) => {
            state.isClientModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onOpenClientModal, onCloseClientModal } = uiSlice.actions;