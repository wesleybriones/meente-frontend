import { createSlice } from '@reduxjs/toolkit';

export const clientSlice = createSlice({
    name: 'client',
    initialState: {
        isLoadingClient: true,
        clients: [ ],
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
                if( client.id_client === payload.id_client ){
                    return payload;
                }
                return client;
            });
        },
        onDeleteClient: ( state ) => {
            if ( state.activeClient ){
                state.clients = state.clients.filter( client => client.id_client !== state.activeClient.id_client );
                state.activeClient = null;
            }
        },
        onLoadClients: ( state, { payload = [] } ) => {
            state.isLoadingClient = false;
            payload.forEach( client => {
                const exists = state.clients.some( dbClient => dbClient.id_client === client.id_client )
                if ( !exists ){
                    if ( client.state.toLowerCase() === 'activo' ){
                        state.clients.push( client )
                    }
                }
            });
        },
        onClearClients: ( state ) => {
            state.isLoadingClient = true,
            state.clients = [ ],
            state.activeClient = null
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onSetActiveClient, 
    onAddNewClient, 
    onUpdateClient, 
    onDeleteClient, 
    onLoadClients, 
    onClearClients 
} = clientSlice.actions;