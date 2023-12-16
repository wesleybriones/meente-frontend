import { createSlice } from '@reduxjs/toolkit';

const tmpClient = {
    _id: new Date().getTime(),
    identification_ruc: '0950178673',
    names: 'Wesley',
    surnames: 'Briones',
    city: 'Guayaquil',
    direction: 'Av Socio Vivienda 1 Mz 4D Solar 5',
    genre: 'Masculino',
    phone: '0990508849',
    mail: 'wesley@meente.ec',
    state: 'Activo',
    create_date: new Date(),
    update_date: new Date()
};

export const clientSlice = createSlice({
    name: 'client',
    initialState: {
        clients: [
            tmpClient
        ],
        activeClient: null
    },
    reducers: {
        onSetActiveClient: ( state, { payload }) => {
            state.activeClient = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveClient } = clientSlice.actions;