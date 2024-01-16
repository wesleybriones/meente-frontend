import { useDispatch, useSelector } from 'react-redux';

import { meenteApi } from '../../api';
import { convertDataToDateInputDevice } from '../helpers';
import { onAddNewDevice, onLoadDevices, onSetActiveDevice, onUpdateDevice } from '../../store';

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export const useDeviceStore = () => {

    const dispatch = useDispatch();
    const { devices, activeDevice } = useSelector( state => state.device );

    const setActiveDevice = ( deviceEvent ) => {
        dispatch( onSetActiveDevice( deviceEvent ) );
    }

    const startSavingDevice = async ( deviceEvent ) => {
        
        try {
            if( deviceEvent.id_device ){
                //Actualizando
                await meenteApi.put(`/devices/${ deviceEvent.id_device }`, deviceEvent)
                dispatch( onUpdateDevice({ ...deviceEvent }));
                return ;
            }
            //Creando
            const { data } = await meenteApi.post('/devices', deviceEvent );
            dispatch( onAddNewDevice({ ...deviceEvent,
                                        id: data.new_device.id_device,
                                    }));

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data?.msg, 'error' );
        }
    }

    const startLoadingDevice = async() => {
        try {
            const { data } = await meenteApi.get('/devices');
            const devices = convertDataToDateInputDevice( data.devices );
            dispatch( onLoadDevices( data.devices ) );
        } catch (error) {
            console.log('Error cargando dispositivos');
            console.log( error );
        }
    }

    return {
        //* Propiedades
        devices,
        activeDevice,

        //* Métodos
        setActiveDevice,
        startSavingDevice,
        startLoadingDevice,
    }
}
