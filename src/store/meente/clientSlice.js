import { createSlice } from '@reduxjs/toolkit';

const tmpClient = {
    _id: new Date().getTime(),
    identification_ruc: '0909090909',
    names: 'Luis',
    surnames: 'Briones',
    city: 'Quito',
    direction: 'quito',
    genre: 'Masculino',
    phone: '0990503337',
    mail: 'luis@meente.ec',
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
        },
        onAddNewClient: ( state, { payload } ) => {
            state.clients.push( payload );
            state.activeClient = null;
        },
        onUpdateClient: ( state, { payload }) => {
            state.clients = state.clients.map( client => {
                if( client._id === payload._id ){
                    return payload;
                }
                return client;
            });
        },
        onDeleteClient: ( state ) => {
            if ( state.activeClient ){
                state.clients = state.clients.filter( client => client._id !== state.activeClient._id );
                state.activeClient = null;
            }
        },
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveClient, onAddNewClient, onUpdateClient, onDeleteClient } = clientSlice.actions;