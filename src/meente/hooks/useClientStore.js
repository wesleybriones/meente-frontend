import { useDispatch, useSelector } from 'react-redux';
import { onAddNewClient, onDeleteClient, onSetActiveClient, onUpdateClient } from '../../store';

export const useClientStore = () => {

    const dispatch =  useDispatch();
    const { clients, activeClient } = useSelector( state => state.client );

    const setActiveClient = ( clientEvent ) => {
        dispatch( onSetActiveClient( clientEvent ) )
    }

    const startSavingClient = async ( clientEvent ) => {
        // TODO: llegar al backenin

        // Todo bien
        if ( clientEvent._id ){
            // Actualizando
            dispatch( onUpdateClient({ ...clientEvent }) );
        }else{
            // Creando
            dispatch( onAddNewClient({ ...clientEvent, _id: new Date().getTime() }) );
        }
    }

    const startDeleteClient = () => {
        // Todo: Llegar al backend
        dispatch( onDeleteClient() );
    }

    return {
        //* Propiedades
        clients,
        activeClient,

        //*Métodos
        setActiveClient,
        startSavingClient,
        startDeleteClient,
    }
}
