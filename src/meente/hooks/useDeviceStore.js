import { useDispatch } from 'react-redux';
import { onAddNewDevice, onDeleteDevice, onSetActiveDevice, onUpdateDevice } from '../../store';


export const useDeviceStore = () => {

    const dispatch = useDispatch();
    const { devices, activeDevice } = useSelector( state => state.device );

    const setActiveDevice = ( deviceEvent ) => {
        dispatch( onSetActiveDevice( deviceEvent ) );
    }

    const startSavingDevice = async ( deviceEvent ) => {
        // TODO: llegar al backend

        // TODO bien
        if( deviceEvent._id ){
            //Actualizando
            dispatch( onUpdateDevice({ ...deviceEvent }));
        }else{
            //Creando
            dispatch( onAddNewDevice({ ...activeDevice, _id: new Date().getTime() }));
        }
    }

    const startDeeleteDevice = () => {
        // Todo: LLegar al backend
        dispatch( onDeleteDevice() );
    }

    return {
        //* Propiedades
        devices,
        activeDevice,

        //* Métodos
        setActiveDevice,
        startSavingDevice,
        startDeeleteDevice,
    }
}
