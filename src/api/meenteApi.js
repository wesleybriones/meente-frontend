import axios from 'axios';
import { getEnvVariables } from '../meente/helpers';

const { VITE_API_URL } = getEnvVariables()

const meenteApi = axios.create({
    baseURL: VITE_API_URL
});

// Todo: configurar interceptopres
meenteApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem( 'token' )
    }

    return config;
})

export default meenteApi;