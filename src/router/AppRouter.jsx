import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"

import { useAuthStore } from "../auth/hooks";
import { LoginPage } from "../auth";
import { MeenteRoutes } from "../meente";

import { HomePage } from "../views";

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore()
    
    useEffect(() => {
        checkAuthToken();
    }, [])
    

    if ( status === 'checking' ){
        return(
            <h3>Cargando...</h3>
        )
    }

    return (
        <>
            <Routes>
                {
                    ( status === 'authenticated' )
                    ?<Route path="/*" element={ <MeenteRoutes /> } />
                    : (
                        <>
                            <Route path="/auth/*" element={ <LoginPage /> }/>
                            <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
                        </>
                    )
                }
                <Route path="/*" element={ <Navigate to='/auth/login' /> } /> 
            </Routes>
        </>
        )
}
