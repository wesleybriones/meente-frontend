import { useDispatch, useSelector } from 'react-redux';

import { meenteApi } from '../../api';
import { convertDateToDateCreation } from '../helpers';
import { onAddNewClient, onDeleteClient, onLoadClients, onSetActiveClient, onUpdateClient } from '../../store';

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export const useClientStore = () => {

    const dispatch =  useDispatch();
    const { clients, activeClient } = useSelector( state => state.client );

    const setActiveClient = ( clientEvent ) => {
        dispatch( onSetActiveClient( clientEvent ) )
    }

    const startSavingClient = async ( clientEvent ) => {

        try {
            if ( clientEvent.id_client ){
                // Actualizando
                await meenteApi.put(`/clients/${ clientEvent.id_client }`, clientEvent)
                dispatch( onUpdateClient({ ...clientEvent }) );
                return ;
            }
            //Creando
            const { data } = await meenteApi.post('/clients', clientEvent );
            dispatch( onAddNewClient({ ...clientEvent, id: data.new_client.id_client }) );

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data?.msg, 'error' );
        }
        
    }

    const startLoadingClient = async() => {
        try {
            const { data } = await meenteApi.get('/clients');
            const clients = convertDateToDateCreation( data.clients );
            dispatch( onLoadClients( clients ) );
        } catch (error) {
            console.log('Error cargando clientes');
            console.log(error);
        }
    }

    const startDeleteClient = async() => {
        // Todo: Llegar al backend
        try {
            await meenteApi.delete(`/clients/${ activeClient.id_client }`)
            dispatch( onDeleteClient() );
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data?.msg, 'error' );
        }
    }

    return {
        //* Propiedades
        clients,
        activeClient,

        //*Métodos
        setActiveClient,
        startDeleteClient,
        startLoadingClient,
        startSavingClient,
    }
}
