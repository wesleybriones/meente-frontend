import { useDispatch, useSelector } from 'react-redux';
import { meenteApi } from '../../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../../store';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async ({ user, password }) => {
        dispatch( onChecking() )
        try {
            const { data } = await meenteApi.post('/auth', { user, password });
            localStorage.setItem('token', data.employee.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({
                names: data.employee.names,
                surnames: data.employee.surnames,
                identification: data.employee.identification 
            }) )
        } catch (error) {
            dispatch( onLogout('Credenciales Incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if( !token ) return dispatch( onLogout() )
        try {
            const { data } = await meenteApi.get('/auth/renew');
            localStorage.setItem('token', data.token )
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({
                names: data.name,
                identification: data.uid 
            }) )
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() )
        }
    }

    return {
        //* Propiedades
        errorMessage,
        status,
        user, 


        //* Métodos
        startLogin,
        checkAuthToken,

    }
}
