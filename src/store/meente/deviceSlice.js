import { createSlice } from '@reduxjs/toolkit';

const tmpDevice = {
    _id: new Date().getTime(),
    serie: '8CC0460B3R',
    description: 'HP All-in-one 22-df0018la',
    id_client: 'Angeles Terreros', 
    image: ''
};

export const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        devices: [
            tmpDevice
        ],
        activeDevice: null
    },
    reducers: {
        onSetActiveDevice: ( state, { payload }) => {
            state.activeDevice = payload;
        },
        onAddNewDevice: ( state, { payload }) => {
            state.devices.push( payload );
            state.activeDevice = null;
        },
        onUpdateDevice: (state, { payload }) => {
            state.devices = state.devices.map( device => {
                if ( device._id === payload._id ){
                    return payload;
                }
                return device;
            })
        },
        onDeleteDevice: ( state ) => {
            if ( state.activeDevice ){
                state.devices = state.devices.filter( device => device._id !== state._id );
                state.activeDevice = null;
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveDevice, onAddNewDevice, onUpdateDevice, onDeleteDevice } = deviceSlice.actions;


