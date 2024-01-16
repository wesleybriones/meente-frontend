import { createSlice } from '@reduxjs/toolkit';

export const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        isLoadingDevice: true,
        devices: [ ],
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
                if ( device.id_device === payload.id_device ){
                    return payload;
                }
                return device;
            })
        },
        onLoadDevices: ( state, { payload = [] }) => {
            state.isLoadingDevice = false;
            payload.forEach( device => {
                const exists = state.devices.some( dbDevice => dbDevice.serial === device.serial );
                if ( !exists ){
                    state.devices.push( device )
                }
            });
        },
        onClearDevice: ( state ) => {
            state.isLoadingDevice = true,
            state.devices = [ ],
            state.activeDevice = null
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    onSetActiveDevice, 
    onAddNewDevice, 
    onUpdateDevice, 
    onDeleteDevice, 
    onLoadDevices,
    onClearDevice,
} = deviceSlice.actions;


