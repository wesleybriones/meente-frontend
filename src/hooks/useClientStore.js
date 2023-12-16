import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveClient } from '../store';

export const useClientStore = () => {

    const dispatch =  useDispatch();
    const { clients, activeClient } = useSelector( state => state.meente );

    const setActiveClient = ( clientEvent ) => {
        dispatch( onSetActiveClient( clientEvent ) )
    }

    return {
        //* Propiedades
        clients,
        activeClient,

        //*Métodos
        setActiveClient,
    }
}
